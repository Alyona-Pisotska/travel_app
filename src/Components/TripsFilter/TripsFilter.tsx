import React from 'react';
import './tripsFilter.css';
import { SearchInput } from '../Inputs/Inputs';
import { SelectDuration, SelectLevel } from '../Selects/Selects';

type Props = {
  inputValue: string,
  onValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  durationFilterValue: string,
  onDurationFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
  levelFilterValue: string,
  onLevelFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
};

const TripsFilter: React.FC<Props> = ({
  inputValue,
  onValueChange,
  durationFilterValue,
  onDurationFilterChange,
  levelFilterValue,
  onLevelFilterChange,
}) => {
  return (
    <section className="trips-filter">
      <h2 className="visually-hidden">Trips filter</h2>
      <form className="trips-filter__form" autoComplete="off">
        <SearchInput value={inputValue} onValueChange={onValueChange} />
        <SelectDuration value={durationFilterValue} onChange={onDurationFilterChange} />
        <SelectLevel value={levelFilterValue} onChange={onLevelFilterChange} />
      </form>
    </section>
  );
};

export default TripsFilter;
