import React, { useCallback } from 'react';
import './navigate.css';
import bookingIcon from '../../assets/images/briefcase.svg';
import userIcon from '../../assets/images/user.svg';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../routes';
import Dropdown from '../Dropdown/Dropdown';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { auth as authActionCreator } from '../../store/actions';

const Navigate: React.FC = () => {
  const navigate = useNavigate();
  const toBookingPage = () => navigate(Routes.Booking.path);
  const dispatch = useDispatch<AppDispatch>();
  const signOut = useCallback(() => {
    dispatch(authActionCreator.logoutUser());
  }, [dispatch]);

  return (
    <nav data-test-id="header-nav" className="header__nav">
      <ul className="nav-header__list">
        <li className="nav-header__item" title="Bookings">
          <div
            data-test-id="header-bookings-link"
            className="nav-header__inner"
            onClick={toBookingPage}
          >
            <span className="visually-hidden">Bookings</span>
            <img
              src={bookingIcon}
              alt="icon"
              className="link"
            />
          </div>
        </li>
        <li className="nav-header__item" title="Profile">
          <div
            data-test-id="header-profile-nav"
            className="nav-header__inner profile-nav"
          >
            <span className="visually-hidden">Profile</span>
            <img src={userIcon.toString()} alt="profile icon"/>

            <Dropdown signOut={signOut} />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navigate;
