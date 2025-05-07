import React from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store/store';

interface Props {
  signOut: () => void;
}

const Dropdown: React.FC<Props> = ({ signOut }) => {
  const { userName } = useSelector((state: IRootState) => ({
    userName: state.auth.auth?.user.fullName || '',
  }));

  return (
    <ul
      data-test-id="header-profile-nav-list"
      className="profile-nav__list"
    >
      <li
        data-test-id="header-profile-nav-username"
        className="profile-nav__item profile-nav__username"
      >
        {userName}
      </li>
      <li className="profile-nav__item">
        <div
          data-test-id="header-profile-nav-sign-out"
          className="profile-nav__sign-out button"
          onClick={signOut}
        >
          Sign Out
        </div>
      </li>
    </ul>
  );
};

export default Dropdown;
