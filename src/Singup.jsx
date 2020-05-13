import React from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { Input, Button } from 'antd';
import { connect } from 'react-redux';
import * as actions from './actions';

const actionCreators = {
  addUser: actions.addUser,
};

const mapStateToProps = (state) => ({
  isAuth: state.isAuth,
  errorMsg: state.errorMsg,
});

const Signup = (props) => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      props.addUser(values, 'https://conduit.productionready.io/api/users');
      props.history.replace('/');
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

export default connect(mapStateToProps, actionCreators)(Signup);
