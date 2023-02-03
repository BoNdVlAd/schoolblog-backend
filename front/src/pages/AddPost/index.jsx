import React from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SimpleMDE from 'react-simplemde-editor';
import { useDispatch, useSelector } from 'react-redux';
import 'easymde/dist/easymde.min.css';
import styles from './AddPost.module.scss';
import { useSelect } from '@mui/base';
import { selectIsAuth } from '../../redux/slices/auth';
import { useNavigate, Navigate, useParams } from 'react-router';

import axios from '../../axios';

export const AddPost = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  const { id } = useParams();
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);
  const [isLoading, setLoading] = React.useState(false);
  const [text, setText] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [tags, setTags] = React.useState('');
  const inputFileRef = React.useRef(null);
  const [imageUrl, setImageUrl] = React.useState('');
  const [imageUrlAll, setImageUrlAll] = React.useState([]);

  const [myArray, setMyArray] = React.useState([]);
  let Vlad = [];
  const isEditing = Boolean(id);
  let postsSHOW = '';
  let postsSHOW1 = '';

  const onChange = React.useCallback((value) => {
    setText(value);
  }, []);

  const onSubmit = async () => {
    if (categoryId == 0) {
      postsSHOW = '/posts/' + id;
      postsSHOW1 = '/posts';
    } else if (categoryId == 1) {
      postsSHOW = '/schoolposts/' + id;
      postsSHOW1 = '/schoolposts';
    } else if (categoryId == 2) {
      postsSHOW = '/posts1/' + id;
      postsSHOW1 = '/posts1';
    } else if (categoryId == 3) {
      postsSHOW = '/posts2/' + id;
      postsSHOW1 = '/posts2';
    } else if (categoryId == 4) {
      postsSHOW = '/posts3/' + id;
      postsSHOW1 = '/posts3';
    } else if (categoryId == 5) {
      postsSHOW = '/posts4/' + id;
      postsSHOW1 = '/posts4';
    }
    console.log(postsSHOW1);

    try {
      setLoading(true);
      const fields = {
        title,
        imageUrl,
        imageUrlAll,
        tags: tags,
        text,
      };
      const { data } = isEditing
        ? await axios.patch(postsSHOW, fields)
        : await axios.post(postsSHOW1, fields);

      const _id = isEditing ? id : data._id;

      navigate(`/posts/${_id}`);
    } catch (error) {
      console.log(error);
      alert('Article error');
    }
  };

  const onChangeFile = {};
  const handleChangeFile = async (event) => {
    try {
      console.log(event.target.files);
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append('image', file);
      const { data } = await axios.post('/upload', formData);
      setMyArray((oldArray) => [...oldArray, data.url]);
      setImageUrlAll((oldArray) => [...oldArray, data.url]);
      setImageUrl(data.url);

      // console.log('imageUrl' + [imageUrl]);
    } catch (error) {
      console.warn(error);
      alert('Ошибка при загрузке картинки');
    }
  };
  const onClickRemoveImage = () => {
    if (window.confirm('are you sure?')) {
      setImageUrlAll('');
    }
  };

  React.useEffect(() => {
    if (categoryId == 0) {
      postsSHOW = '/posts/' + id;
      postsSHOW1 = '/posts';
    } else if (categoryId == 1) {
      postsSHOW = '/schoolposts/' + id;
      postsSHOW1 = '/schoolposts';
    } else if (categoryId == 2) {
      postsSHOW = '/posts1/' + id;
      postsSHOW1 = '/posts1';
    } else if (categoryId == 3) {
      postsSHOW = '/posts2/' + id;
      postsSHOW1 = '/posts2';
    } else if (categoryId == 4) {
      postsSHOW = '/posts3/' + id;
      postsSHOW1 = '/posts3';
    } else if (categoryId == 5) {
      postsSHOW = '/posts4/' + id;
      postsSHOW1 = '/posts4';
    }
    if (id) {
      axios
        .get(postsSHOW)
        .then(({ data }) => {
          setTitle(data.title);
          setText(data.text);
          setImageUrlAll(data.imageUrlAll);
          setTags(data.tags.join(','));
        })
        .catch((err) => {
          console.warn(err);
          alert('Ошибка при получении статьи');
        });
    }
  }, []);

  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
      autofocus: true,
      placeholder: 'Введите текст...',
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    [],
  );
  if (!window.localStorage.getItem('token') && !isAuth) {
    return <Navigate to="/" />;
  }

  // Vlad = imageUrlAll.split('|');
  // console.log('Vlad' + Vlad);
  // console.log('Vlad1' + Vlad[0]);
  // console.log('Vlad1' + Vlad[1]);
  // console.log('imageUrl' + imageUrl);
  console.log('------------imageUrlAll--------------');
  console.log(imageUrlAll);
  console.log(Vlad);
  console.log('------------myArray--------------');
  console.log(myArray);

  return (
    <Paper style={{ padding: 30 }}>
      <Button onClick={() => inputFileRef.current.click()} variant="outlined" size="large">
        Завантажити картику
      </Button>
      <input ref={inputFileRef} type="file" onChange={handleChangeFile} hidden />
      {imageUrlAll && (
        <>
          <Button variant="contained" color="error" onClick={onClickRemoveImage}>
            Remove
          </Button>
          <div className={styles.wrap}>
            {imageUrlAll.map((e) => (
              <img className={styles.image} src={`http://localhost:4444${e}`} alt="" />
            ))}
          </div>
        </>
      )}
      <br />
      <br />
      <TextField
        classes={{ root: styles.title }}
        variant="standard"
        placeholder="Заголовок статьи..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
      />

      <SimpleMDE className={styles.editor} value={text} onChange={onChange} options={options} />
      <div className={styles.buttons}>
        <Button onClick={onSubmit} size="large" variant="contained">
          Опубліковати
        </Button>
        <Button size="large">Відмінити</Button>
      </div>
    </Paper>
  );
};
