import React, { useRef } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import styles from './YouTube/YouTube.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Post } from '../components/Post';
import { TagsBlock } from '../components/TagsBlock';
import { CommentsBlock } from '../components/CommentsBlock';
import { fetchPosts, fetchTags } from '../redux/slices/posts';
import { fetchSchoolPosts, fetchSchoolTags } from '../redux/slices/schoolposts';
import { fetchPosts1, fetchTags1 } from '../redux/slices/posts1';
import { fetchPosts2, fetchTags2 } from '../redux/slices/posts2';
import { fetchPosts3, fetchTags3 } from '../redux/slices/posts3';
import { fetchPosts4, fetchTags4 } from '../redux/slices/posts4';
import BackToTopButton from '../components/BackToTopButton';

export const Home = ({ handleClick }) => {
  const categories = [
    'про мене',
    'сертифікати',
    'класне керівництво',
    'дистанційне навчання',
    'зно',
    'виступи',
  ];

  const handle = () => {
    handleClick();
  };

  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  const userData = useSelector((state) => state.auth.data);
  //------------------------------------------------------------------
  const { posts, tags } = useSelector((state) => state.posts);
  const isPostsLoading = posts.status === 'loading';
  const isTagsLoading = tags.status === 'loading';

  let post = [];
  posts.items.forEach((element) => {
    post.push(element);
  });
  React.useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchTags());
    console.log('Обнова');
  }, []);
  post = post.reverse();
  //------------------------------------------------------------------
  const { schoolposts, schooltags } = useSelector((state) => state.schoolposts);
  const isSchoolPostsLoading = schoolposts.status === 'loading';
  const isSchoolTagsLoading = tags.status === 'loading';

  let schoolpost = [];
  schoolposts.items.forEach((element) => {
    schoolpost.push(element);
  });
  React.useEffect(() => {
    dispatch(fetchSchoolPosts());
    // dispatch(fetchSchoolTags());
  }, []);

  schoolpost = schoolpost.reverse();
  //------------------------------------------------------------------
  const { posts1, tags1 } = useSelector((state) => state.posts1);
  const isPosts1Loading = posts1.status === 'loading';
  const isTags1Loading = tags1.status === 'loading';

  let post1 = [];
  posts1.items.forEach((element) => {
    post1.push(element);
  });
  React.useEffect(() => {
    dispatch(fetchPosts1());
    dispatch(fetchTags1());
    console.log('Обнова');
  }, []);
  post1 = post1.reverse();
  //------------------------------------------------------------------
  const { posts2, tags2 } = useSelector((state) => state.posts2);
  const isPosts2Loading = posts2.status === 'loading';
  const isTags2Loading = tags2.status === 'loading';

  let post2 = [];
  posts2.items.forEach((element) => {
    post2.push(element);
  });
  React.useEffect(() => {
    dispatch(fetchPosts2());
    dispatch(fetchTags2());
    console.log('Обнова');
  }, []);
  post2 = post2.reverse();

  //------------------------------------------------------------------
  const { posts3, tags3 } = useSelector((state) => state.posts3);
  const isPosts3Loading = posts3.status === 'loading';
  const isTags3Loading = tags3.status === 'loading';
  let post3 = [];
  posts3.items.forEach((element) => {
    post3.push(element);
  });
  React.useEffect(() => {
    dispatch(fetchPosts3());
    dispatch(fetchTags3());
    console.log('Обнова');
  }, []);
  post3 = post3.reverse();

  //------------------------------------------------------------------
  const { posts4, tags4 } = useSelector((state) => state.posts4);
  const isPosts4Loading = posts4.status === 'loading';
  const isTags4Loading = tags4.status === 'loading';

  let post4 = [];
  posts4.items.forEach((element) => {
    post4.push(element);
  });
  React.useEffect(() => {
    dispatch(fetchPosts4());
    dispatch(fetchTags4());
    console.log('Обнова');
  }, []);
  post4 = post4.reverse();

  //------------------------------------------------------------------

  let postsSHOW = [];
  postsSHOW = schoolpost;
  if (categoryId == 0) {
    postsSHOW = post;
  } else if (categoryId == 1) {
    postsSHOW = schoolpost;
  } else if (categoryId == 2) {
    postsSHOW = post1;
  } else if (categoryId == 3) {
    postsSHOW = post2;
  } else if (categoryId == 4) {
    postsSHOW = post3;
  } else if (categoryId == 5) {
    postsSHOW = post4;
  }
  postsSHOW.map((e) => {
    console.log('IMPORTANT---------------------');
    console.log(e.imageUrlAll);
    console.log(e.imageUrl);
  });

  return (
    <>
      <div className={styles.title}>{categories[categoryId]}</div>
      <Grid container spacing={4}>
        <Grid xs={12} item>
          {(isPostsLoading ? [...Array(1)] : postsSHOW).map((obj, index) =>
            isPostsLoading ? (
              <Post key={index} isLoading={true} />
            ) : (
              <Post
                id={obj._id}
                title={obj.title}
                imageUrl={obj.imageUrl ? `http://localhost:4444${obj.imageUrl}` : ''}
                imageUrlAll={obj.imageUrlAll}
                user={obj.user}
                createdAt={obj.createdAt}
                viewsCount={obj.viewsCount}
                commentsCount={3}
                tags={obj.tags}
                isEditable={userData?._id === obj.user._id}
              />
            ),
          )}
        </Grid>
        {/* <Grid xs={4} item>
          <TagsBlock
            items={tags.items}
            isLoading={isTagsLoading}
          />
          <CommentsBlock
            items={[
              {
                user: {
                  fullName: "Вася Пупкин",
                  avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
                },
                text: "Это тестовый комментарий",
              },
              {
                user: {
                  fullName: "Иван Иванов",
                  avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
                },
                text: "When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top",
              },
            ]}
            isLoading={false}
          />
        </Grid> */}
      </Grid>
      <BackToTopButton />
    </>
  );
};
