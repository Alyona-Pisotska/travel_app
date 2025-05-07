import React, { useCallback, useEffect, useState } from 'react';
import { EmailInput, FullNameInput, PasswordInput } from '../Components/Inputs/Inputs';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../routes';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, IRootState } from '../store/store';
import { auth as authActionCreator } from '../store/actions';
import { DataStatus, LocalStorageKey } from '../common/enums/enums';
import Loader from '../Components/Loader/Loader';

const SignUp: React.FC = () => {
  const { auth, status } = useSelector((state: IRootState) => ({
    auth: state.auth.auth,
    status: state.auth.status,
  }));
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const toSignInPage = () => navigate(Routes.SignIn.path);
  const [fullNameValue, setFullNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const onFullNameValueChange = (event: React.ChangeEvent<HTMLInputElement>) => setFullNameValue(event.target.value);
  const onEmailValueChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmailValue(event.target.value);
  const onPasswordValueChange = (event: React.ChangeEvent<HTMLInputElement>) => setPasswordValue(event.target.value);

  const handleAuthSave = useCallback((fullName: string, email: string, password: string) => {
    dispatch(authActionCreator.registerUser({
      fullName,
      email,
      password,
    }));
  }, [dispatch]);

  const clearForm = () => {
    setFullNameValue('');
    setEmailValue('');
    setPasswordValue('');
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleAuthSave(fullNameValue, emailValue, passwordValue);
    clearForm();
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
    <section className="sign-up-page">
      <h1 className="visually-hidden">Travel App</h1>
      <form
        className="sign-up-form"
        autoComplete="off"
        method="POST"
        onSubmit={handleSubmit}
      >
        <h2 className="sign-up-form__title">Sign Up</h2>

        <FullNameInput value={fullNameValue} onValueChange={onFullNameValueChange} />
        <EmailInput value={emailValue} onValueChange={onEmailValueChange} />
        <PasswordInput value={passwordValue} onValueChange={onPasswordValueChange} />

        <button
          data-test-id="auth-submit"
          className="button"
          type="submit"
        >
          Sign Up
        </button>
      </form>

      <span>
        Already have an account?&nbsp;
        <span
          data-test-id="auth-sign-in-link"
          className="sign-up-form__link link"
          onClick={toSignInPage}
        >
          Sign In
        </span>
      </span>
    </section>
  );
};

export default SignUp;
