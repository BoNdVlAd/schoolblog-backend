import React from 'react';
import clsx from 'clsx';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Post.module.scss';
import { UserInfo } from '../UserInfo';
import { PostSkeleton } from './Skeleton';
import { fetchRemovePost } from '../../redux/slices/posts';
import { fetchRemoveSchoolPost, fetchSchoolPosts } from '../../redux/slices/schoolposts';
import { fetchRemovePost4 } from '../../redux/slices/posts4';
import { fetchRemovePost3 } from '../../redux/slices/posts3';
import { fetchRemovePost2 } from '../../redux/slices/posts2';
import { fetchRemovePost1 } from '../../redux/slices/posts1';

export const Post = ({
  id,
  title,
  createdAt,
  imageUrl,
  user,
  imageUrlAll,
  viewsCount,
  commentsCount,
  tags,
  children,
  isFullPost,
  isLoading,
  isEditable,
}) => {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  console.log('categoryId' + categoryId);
  if (isLoading) {
    return <PostSkeleton />;
  }

  const onClickRemove = () => {
    if (window.confirm('Are you sure you want to delete the article')) {
      if (categoryId === 0) {
        dispatch(fetchRemovePost(id));
      } else if (categoryId === 1) {
        dispatch(fetchRemoveSchoolPost(id));
      } else if (categoryId === 2) {
        dispatch(fetchRemovePost1(id));
      } else if (categoryId === 3) {
        dispatch(fetchRemovePost2(id));
      } else if (categoryId === 4) {
        dispatch(fetchRemovePost3(id));
      } else if (categoryId === 5) {
        dispatch(fetchRemovePost4(id));
      }
    }
  };
  console.log('----------------------imageUrlAll--------------------');
  console.log(imageUrlAll);

  return (
    <Link className={styles.link} to={`/posts/${id}`}>
      <div className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>
        {isEditable && (
          <div className={styles.editButtons}>
            <Link to={`/posts/${id}/edit`}>
              {/* <Link to={`${categoryId === 0 ? `/posts/${id}` : `/schoolposts/${id}`}`}> */}
              <IconButton color="primary">
                <EditIcon />
              </IconButton>
            </Link>
            <IconButton onClick={onClickRemove} color="secondary">
              <DeleteIcon />
            </IconButton>
          </div>
        )}
        {imageUrlAll && (
          <>
            <div className={clsx(styles.wrap, { [styles.wrapFull]: isFullPost })}>
              {imageUrlAll[0] && (
                <img
                  className={clsx(styles.image, { [styles.imageFull]: isFullPost })}
                  src={`http://localhost:4444${imageUrlAll[0]}`}
                  alt={title}
                />
              )}
              {imageUrlAll[1] && (
                <img
                  className={clsx(styles.image, { [styles.imageFull]: isFullPost })}
                  src={`http://localhost:4444${imageUrlAll[1]}`}
                  alt={title}
                />
              )}
              {imageUrlAll[2] && (
                <img
                  className={clsx(styles.image, { [styles.imageFull]: isFullPost })}
                  src={`http://localhost:4444${imageUrlAll[2]}`}
                  alt={title}
                />
              )}
              {imageUrlAll[3] && (
                <img
                  className={clsx(styles.image, { [styles.imageFull]: isFullPost })}
                  src={`http://localhost:4444${imageUrlAll[3]}`}
                  alt={title}
                />
              )}

              {imageUrlAll[4] && (
                <img
                  className={clsx(styles.image, { [styles.imageFull]: isFullPost })}
                  src={`http://localhost:4444${imageUrlAll[4]}`}
                  alt={title}
                />
              )}

              {imageUrlAll[5] && (
                <img
                  className={clsx(styles.image, { [styles.imageFull]: isFullPost })}
                  src={`http://localhost:4444${imageUrlAll[5]}`}
                  alt={title}
                />
              )}
              {imageUrlAll[6] && (
                <img
                  className={clsx(styles.image, { [styles.imageFull]: isFullPost })}
                  src={`http://localhost:4444${imageUrlAll[6]}`}
                  alt={title}
                />
              )}
              {imageUrlAll[7] && (
                <img
                  className={clsx(styles.image, { [styles.imageFull]: isFullPost })}
                  src={`http://localhost:4444${imageUrlAll[7]}`}
                  alt={title}
                />
              )}
              {imageUrlAll[8] && (
                <img
                  className={clsx(styles.image, { [styles.imageFull]: isFullPost })}
                  src={`http://localhost:4444${imageUrlAll[8]}`}
                  alt={title}
                />
              )}
            </div>
          </>
        )}

        <div className={styles.wrapper}>
          <UserInfo {...user} additionalText={createdAt} />
          <div className={styles.indention}>
            <h2 className={clsx(styles.title, { [styles.titleFull]: isFullPost })}>
              {isFullPost ? (
                title
              ) : (
                // <Link to={`${categoryId === 0 ? `/posts/${id}` : `/schoolposts/${id}`}`}>
                <Link to={`/posts/${id}`}>{title}</Link>
              )}
            </h2>
            {children && <div className={styles.content}>{children}</div>}
            <ul className={styles.postDetails}>
              <li key="uniqueId1">
                <EyeIcon />
                <span>{viewsCount}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
};
