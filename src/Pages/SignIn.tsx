import React, { useCallback, useEffect, useState } from 'react';
import { EmailInput, PasswordInput } from '../Components/Inputs/Inputs';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../routes';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, IRootState } from '../store/store';
import { auth as authActionCreator } from '../store/actions';
import { DataStatus } from '../common/enums/app/data-status.enum';
import { LocalStorageKey } from '../common/enums/storage/local-storage.enum';
import Loader from '../Components/Loader/Loader';

const SignIn: React.FC = () => {
  const { auth, status } = useSelector((state: IRootState) => ({
    auth: state.auth.auth,
    status: state.auth.status,
  }));

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const toSignUpPage = () => navigate(Routes.SignUp.path);
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const onEmailValueChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmailValue(event.target.value);
  const onPasswordValueChange = (event: React.ChangeEvent<HTMLInputElement>) => setPasswordValue(event.target.value);

  const handleLogin = useCallback((email: string, password: string) => {
    dispatch(authActionCreator.loginUser({
      email,
      password,
    }));
  }, [dispatch]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleLogin(emailValue, passwordValue);
  };

  useEffect(() => {
    if (auth?.token) {
      localStorage.setItem(LocalStorageKey.TOKEN, auth.token);
      navigate(Routes.HomePage.path);
    }
  }, [auth, navigate]);

  if (status === DataStatus.PENDING) {
    return <Loader />;
  }

  return (
    <section className="sign-in-page">
      <h1 className="visually-hidden">Travel App</h1>
      <form className="sign-in-form" autoComplete="off" onSubmit={handleSubmit}>
        <h2 className="sign-in-form__title">Sign In</h2>

        <EmailInput value={emailValue} onValueChange={onEmailValueChange} />
        <PasswordInput value={passwordValue} onValueChange={onPasswordValueChange} />

        <button data-test-id="auth-submit" className="button" type="submit">
          Sign In
        </button>
      </form>
      <span>
        Don't have an account?&nbsp;
        <span
          data-test-id="auth-sign-up-link"
          className="sign-in-form__link link"
          onClick={toSignUpPage}
        >
          Sign Up
        </span>
      </span>
    </section>
  );
};

export default SignIn;
