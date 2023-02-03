import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Post } from '../components/Post';
import { Index } from '../components/AddComment';
import { CommentsBlock } from '../components/CommentsBlock';
import axios from '../axios';
import { useDispatch, useSelector } from 'react-redux';

export const FullPost = () => {
  const [data, setData] = React.useState();
  const [isLoading, setLoading] = React.useState(true);
  const { id } = useParams();
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  let postsSHOW = '';
  let postsSHOW1 = '';
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
    axios
      .get(postsSHOW)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        alert('Ошибка при получении статьи');
      });
  }, []);

  if (isLoading) {
    return <Post isLoading={isLoading} isFullPost />;
  }
  return (
    <>
      <Post
        id={data._id}
        title={data.title}
        imageUrl={data.imageUrl ? `http://localhost:4444${data.imageUrl}` : ''}
        imageUrlAll={data.imageUrlAll}
        user={data.user}
        createdAt={data.createdAt}
        viewsCount={data.viewsCount}
        commentsCount={3}
        tags={data.tags}
        avatarUrl={data.avatarUrl}
        //isLoading={true}
        isEditable={data?._id === data.user._id}
        isFullPost>
        <p>
          <ReactMarkdown children={data.text} />
        </p>
      </Post>
      {/* <CommentsBlock
        items={[
          {
            user: {
              fullName: 'Вася Пупкин',
              avatarUrl: 'https://mui.com/static/images/avatar/1.jpg',
            },
            text: 'Это тестовый комментарий 555555',
          },
          {
            user: {
              fullName: 'Иван Иванов',
              avatarUrl: 'https://mui.com/static/images/avatar/2.jpg',
            },
            text: 'When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top',
          },
        ]}
        isLoading={false}>
        <Index />
      </CommentsBlock> */}
    </>
  );
};
