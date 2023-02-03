import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import styles from './YouTube.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Post } from '../../components';
import { TagsBlock } from '../../components';
import { CommentsBlock } from '../../components';
import { fetchSchoolPosts, fetchSchoolTags } from '../../redux/slices/schoolposts';

export const YouTube = () => {
  const dispatch = useDispatch();
  const { schoolposts, tags } = useSelector((state) => state.schoolposts);
  const userData = useSelector((state) => state.auth.data);

  const isPostsLoading = schoolposts.status === 'loading';
  const isTagsLoading = tags.status === 'loading';
  React.useEffect(() => {
    dispatch(fetchSchoolPosts());
    // dispatch(fetchSchoolTags());
  }, []);
  let schoolpost = [];
  schoolposts.items.forEach((element) => {
    schoolpost.push(element);
  });
  schoolpost = schoolpost.reverse();

  return (
    <>
      <div className={styles.title}>Дистанційне навчання</div>
      <Grid container spacing={4}>
        <Grid xs={12} item>
          {(isPostsLoading ? [...Array(1)] : schoolpost).map((obj, index) =>
            isPostsLoading ? (
              <Post key={index} isLoading={true} />
            ) : (
              <Post
                id={obj._id}
                title={obj.title}
                imageUrl={obj.imageUrl ? `http://localhost:4444${obj.imageUrl}` : ''}
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
      </Grid>
    </>
  );
};
