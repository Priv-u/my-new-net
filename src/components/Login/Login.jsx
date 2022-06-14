import React from 'react';
import s from './Login.module.css';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required } from './../../utils/validators/validators';
import { connect } from 'react-redux';
import { userlogin } from '../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';



const LoginForm = (props) => {

  // debugger;
  return (
    <form className={s.form} onSubmit={props.handleSubmit}>
      <div className={s.inputLogin}>
        <Field name={'login'} component={Input} placeholder={'Login(Email)'} validate={[required]} />
      </div>
      <div className={s.inputPassword}>
        <Field name={'password'} component={Input} placeholder={'Password'} type="password" validate={[required]} />
      </div>
      <div className={s.remember}>
        <Field name={'rememberMe'} component="input" type="checkbox" /> Запомнить меня
      </div>
      <div className={s.buttonLogin}>
        <button  >LogIn</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)


const Login = (props) => {
  debugger;
  const onSubmit = (formData) => {
    props.userlogin(formData.login, formData.password, formData.rememberMe);
  }

  if (props.isAuth) {
    return <Navigate to={'/profile'} />
  }

  return (
    <div className={s.login} >
      <h1>PLEASE LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div >
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})
//Откатился до этого момента
export default connect(mapStateToProps, { userlogin })(Login);