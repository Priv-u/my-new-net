import React from 'react';
import s from './Login.module.css';
import { reduxForm, Field } from 'redux-form';
// import Field from 'redux-form/lib/Field';

const LoginForm = (props) => {
  // debugger;
  return (
    <form className={s.form} onSubmit={props.handleSubmit}>
      <div>
        <Field name={'login'} component={"input"} placeholder={'Login(Email)'} />
      </div>
      <div>
        <Field name={'password'} component={"input"} placeholder={'Password'} />
      </div>
      <div className={s.remember}>
        <Field name={'rememberMe'} component={"input"} type={"checkbox"} /> Remember me
      </div>
      <div>
        <button>LogIn</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)


const Login = (props) => {

  const onSubmit = (formData) => {
    console.log(formData);
  }
  return (
    <div className={s.login} >
      <h1>PLEASE LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div >
  )
}
//Откатился до этого момента
export default Login;