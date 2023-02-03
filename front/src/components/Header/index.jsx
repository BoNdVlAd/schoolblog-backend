import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import Container from '@mui/material/Container';
import { useSelector } from 'react-redux';
import { logout, selectIsAuth } from '../../redux/slices/auth';
import Tabs from '@mui/material/Tabs';
import LinkTab from '@mui/material/Tab';
import { useDispatch } from 'react-redux';
import { setCategoryId } from '../../redux/slices/filterSlice';

export const Header = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);

  const isAuth = useSelector(selectIsAuth);
  const categories = [
    'про мене',
    'сертифікати',
    'класне керівництво',
    'дистанційне навчання',
    'зно',
    'виступи',
  ];

  const onClickLogout = () => {
    if (window.confirm('Are you sure you want to log out')) {
      dispatch(logout());
      window.localStorage.removeItem('token');
    }
  };

  const handleChange = (id) => {
    console.log('++++++' + id);
    dispatch(setCategoryId(id));
  };
  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <Link className={styles.logo} to="/">
            <div>блог вчителя математики</div>
          </Link>
          <div className={styles.buttons}>
            {isAuth ? (
              <>
                <Link className={styles.decor} to="/add-post">
                  <Button className={styles.out} variant="outlined">
                    Додати пост
                  </Button>
                </Link>

                <Button onClick={onClickLogout} variant="outlined" color="error">
                  Вийти
                </Button>
              </>
            ) : (
              <>
                <Link className={styles.decor} to="/login">
                  <Button variant="contained">Я вчитель</Button>
                </Link>
              </>
            )}
          </div>
        </div>
        <div className={styles.categories}>
          {categories.map((e, index) => {
            return (
              <Link
                key={index}
                className={styles.decor}
                onClick={() => handleChange(index)}
                to={'/'}>
                <Button className={categoryId === index ? styles.active : ''}>
                  <span className={styles.categ}>{e}</span>
                </Button>
              </Link>
            );
          })}
        </div>
      </Container>
    </div>
  );
};
