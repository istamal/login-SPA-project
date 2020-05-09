import React from 'react';
import { Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, withRouter } from 'react-router-dom';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import * as actions from './actions';

const actionCreators = {
  auth: actions.auth,
  addUser: actions.addUser,
};

const mapStateToProps = (state) => ({
  isAuth: state.isAuth,
  errorMsg: state.errorMsg,
});

const Login = (props) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: false,
    },
    onSubmit: (values) => {
      props.addUser(values);
      setTimeout(() => props.history.replace('/'), 1000);
    },
  });

  return (
    <form
      name="normal_login"
      className="form"
      onSubmit={formik.handleSubmit}
    >
      <Input
        className="margin-bottom"
        name="email"
        prefix={<UserOutlined className="site-form-item-icon" />}
        placeholder="E-mail"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <div className="margin-bottom">
        <Input
          name="password"
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {props.errorMsg && (<div className="error">{props.errorMsg}</div>)}
      </div>
      <Button type="primary" htmlType="submit" className="left-margin">
        Войти
      </Button>
      <Link to="/signup" className="left-margin">Регистрация!</Link>
      {formik.errors.loginError && <div>email or password is invalid</div>}
    </form>
  );
};

const LoginContainerComponent = withRouter(Login);

export default connect(mapStateToProps, actionCreators)(LoginContainerComponent);
