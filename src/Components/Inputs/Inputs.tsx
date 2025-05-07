import React from 'react';
import { dateFormat } from '../../helper/date';

type Props = {
  value: string,
  onValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
};

export const FullNameInput: React.FC<Props> = ({ value, onValueChange }) => {
  return (
    <label className="input">
      <span className="input__heading">Full name</span>
      <input
        value={value}
        onChange={onValueChange}
        data-test-id="auth-full-name"
        name="full-name"
        type="text"
        required
      />
    </label>
  );
};

export const EmailInput: React.FC<Props> = ({ value, onValueChange }) => {
  return (
    <label className="input">
      <span className="input__heading">Email</span>
      <input
        value={value}
        onChange={onValueChange}
        data-test-id="auth-email"
        name="email"
        type="email"
        required
      />
    </label>
  );
};

export const PasswordInput: React.FC<Props> = ({ value, onValueChange }) => {
  return (
    <label className="input">
      <span className="input__heading">Password</span>
      <input
        value={value}
        onChange={onValueChange}
        data-test-id="auth-password"
        name="password"
        type="password"
        autoComplete="new-password"
        minLength={3}
        maxLength={20}
        required
      />
    </label>
  );
};

export const SearchInput: React.FC<Props> = ({ value, onValueChange }) => {
  return (
    <label className="trips-filter__search input">
      <span className="visually-hidden">Search by name</span>
      <input
        value={value}
        onChange={onValueChange}
        data-test-id="filter-search"
        name="search"
        type="search"
        placeholder="search by title"
      />
    </label>
  );
};

export const DateInput: React.FC<Props> = ({ value, onValueChange }) => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  const tomorrow = dateFormat(date);

  return (
    <label className="input">
      <span className="input__heading">Date</span>
      <input
        value={value}
        onChange={onValueChange}
        data-test-id="book-trip-popup-date"
        name="date"
        type="date"
        min={tomorrow}
        required
      />
    </label>
  );
};

export const GuestsInput: React.FC<Props> = ({ value, onValueChange }) => {
  return (
    <label className="input">
      <span className="input__heading">Number of guests</span>
      <input
        value={value}
        onChange={onValueChange}
        data-test-id="book-trip-popup-guests"
        name="guests"
        type="number"
        min="1"
        max="10"
        required
      />
    </label>
  );
};
