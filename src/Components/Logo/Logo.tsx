import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../routes';
import './logo.css';

const Logo = () => {
  const navigate = useNavigate();
  const toHomePage = () => navigate(Routes.HomePage.path);

  return (
    <div
      data-test-id="header-logo"
      className="header__logo link"
      onClick={toHomePage}
    >
      Travel App
    </div>
  );
};

export default Logo;
