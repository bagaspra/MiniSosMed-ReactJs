import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ email, name, password }));

    navigate('/');
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <RegisterInput register={onRegister} />
    </div>
  );
}

export default RegisterPage;
