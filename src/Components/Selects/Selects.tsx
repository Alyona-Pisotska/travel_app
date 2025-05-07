import React from 'react';
import './select.css';

type Props = {
  value: string,
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
};

export const SelectDuration: React.FC<Props> = ({ value, onChange }) => {
  return (
    <label className="select">
      <span className="visually-hidden">Search by duration</span>
      <select
        value={value}
        onChange={onChange}
        data-test-id="filter-duration"
        name="duration"
      >
        <option value="">duration</option>
        <option value="0_x_5">&lt; 5 days</option>
        <option value="5_x_10">&lt; 10 days</option>
        <option value="10_x">&ge; 10 days</option>
      </select>
    </label>
  );
};

export const SelectLevel: React.FC<Props> = ({ value, onChange }) => {
  return (
    <label className="select">
      <span className="visually-hidden">Search by level</span>
      <select
        value={value}
        onChange={onChange}
        data-test-id="filter-level"
        name="level"
      >
        <option value="">level</option>
        <option value="easy">easy</option>
        <option value="moderate">moderate</option>
        <option value="difficult">difficult</option>
      </select>
    </label>
  );
};
