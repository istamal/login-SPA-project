import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Input, Button } from 'antd';

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    onSubmit: (values, { setErrors }) => {
      console.log({ user: values });
      axios.post('https://conduit.productionready.io/api/users', { user: values })
        .then((response) => {
          console.log(response);
          // Установить в стейт имя пользователя и Перейти на главную страницу
        })
        .catch((error) => {
          console.log(error.response.data);
          setErrors(error.response.data.errors);
        });
    },
  });

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = formik;

  return (
    <form
      className="form"
      onSubmit={handleSubmit}
    >
      <div className="margin-bottom">
        <Input
          name="email"
          placeholder="E-mail"
          label="E-mail"
          type="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && (<div className="error">{errors.email}</div>)}
      </div>
      <div className="margin-bottom">
        <Input.Password
          name="password"
          placeholder="Пароль"
          label="Password"
          type="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && (<div className="error">{errors.password}</div>)}
      </div>
      <div className="margin-bottom">
        <Input
          placeholder="Имя Пользователя"
          name="username"
          label="Nickname"
          value={values.username}
          onChange={handleChange}
        />
        {errors.username && (<div className="error">{errors.username}</div>)}
      </div>
      <Button className="left-margin" type="primary" htmlType="submit">
        Register
      </Button>
      <Link to="/login">Войти</Link>
    </form>
  );
};

export default Signup;
