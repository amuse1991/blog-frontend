import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm } from "../../modules/auth";
import AuthForm from "../../components/auth/AuthForm";

const LoginForm = () => {
  const dispatch = useDispatch();
  const {form} = useSelector(state=>({
    form:state.auth.login
  }))

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {value, name} = e.target;
    dispatch(
      changeField({
        form:"login",
        key: name,
        value
      })
    )
  }

  const onSubmit = (e:React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
  }

  // 컴포넌트가 처음 렌더링 될 때 form 초기화
  useEffect(()=>{
    dispatch(initializeForm("login"))
  },[dispatch])

  return (
    <AuthForm type="login" form={form} onChange={onChange} onSubmit={onSubmit} />
  )
}

export default LoginForm;