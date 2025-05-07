import React from 'react';
import Navigate from '../Navigate/Navigate';
import './header.css';
import Logo from '../Logo/Logo';
import { useLocation } from 'react-router-dom';
import { Routes } from '../../routes';

const Header: React.FC = () => {
  const location = useLocation();
  const isNavigateHidden = location.pathname === Routes.SignIn.path || location.pathname === Routes.SignUp.path;

  return (
    <header className="header">
      <div className="header__inner">
        <Logo />
        {!isNavigateHidden && <Navigate />}
      </div>
    </header>
  );
};

export default Header;
