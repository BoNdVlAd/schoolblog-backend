import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth, fetchRegister, selectIsAuth } from "../../redux/slices/auth";
import styles from "./Login.module.scss";
import { Navigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'

export const Registration = () => {

  const isAuth = useSelector(selectIsAuth)
  const dispatch = useDispatch();
  const { 
    register, 
    handleSubmit, 
    formState: {errors, isValid},
  } = useForm({
    defaultValues: {
      fullName: 'Vlad',
      email: 'test@gmail.com',
      password: '12345'
    },
    mode: 'onChange'
  })
  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values))
    if(!data.payload){
      return alert('Something went wrong')
    }
    if('token' in data.payload){
      window.localStorage.setItem('token', data.payload.token);
    }
  }

  if(isAuth){
    return <Navigate to="/" />
  }

  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Создание аккаунта
      </Typography>
      <div className={styles.avatar}>
        <Avatar sx={{ width: 100, height: 100 }} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField error={Boolean(errors.fullName?.message)}
        type="name"
        helperText={errors.fullName?.message}
        {...register('fullName', { required: 'Укажите полное имя'})} className={styles.field} label="Укажите полное имя" fullWidth />
      <TextField error={Boolean(errors.email?.message)}
        type="email"
        helperText={errors.email?.message}
        {...register('email', { required: 'Укажите почту'})} className={styles.field} label="E-Mail" fullWidth />
      <TextField error={Boolean(errors.password?.message)}
        type="password"
        helperText={errors.password?.message}
        {...register('password?', { required: 'Укажите пароль'})} className={styles.field} label="Укажите пароль" fullWidth />
      <Button disabled={!isValid} type='Submit' size="large" variant="contained" fullWidth>
        Создать аккаунт
      </Button>
      </form>
      
    </Paper>
  );
};
