import React from 'react';
import RegisterForm from '../containers/auth/RegisterForm';
import AuthTemplate from '../components/auth/AuthTemplate';

function RegisterPage() {
  return (
    <AuthTemplate>
      <RegisterForm />
    </AuthTemplate>
  )
}

export default RegisterPage;