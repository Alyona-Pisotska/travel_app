import React, { useEffect, useMemo, useState } from 'react';
import TripsFilter from '../Components/TripsFilter/TripsFilter';
import TripList from '../Components/TripList/TripList';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, IRootState } from '../store/store';
import { trips as tripsFromServer } from '../store/actions';
import { DataStatus } from '../common/enums/app/data-status.enum';
import Loader from '../Components/Loader/Loader';

const HomePage: React.FC = () => {
  const { trips, status } = useSelector((state: IRootState) => ({
    trips: state.trips.trips,
    status: state.trips.status,
  }));
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(tripsFromServer.getTrips({}));
  }, [dispatch]);

  const [query, setQuery] = useState('');
  const [durationFilter, setDurationFilter] = useState('');
  const [levelFilter, setLevelFilter] = useState('');

  const onQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => setQuery(event.target.value.toLowerCase());
  const onDurationFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => setDurationFilter(event.target.value);
  const onLevelFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => setLevelFilter(event.target.value);

  const durationValues = durationFilter.split('_');
  const dFrom = durationValues.length > 1 ? +(durationValues[0]) : NaN;
  const dTo = durationValues.length > 1 ? +(durationValues[durationValues.length - 1]) : NaN;

  const getVisibleTrips = () => {
    if (!trips) {
      return [];
    }
    return [...trips].filter(
      trip => trip.title.toLowerCase().includes(query)
        && (!levelFilter || trip.level === levelFilter)
        && (isNaN(dFrom) || trip.duration >= dFrom)
        && (isNaN(dTo) || trip.duration < dTo),
    );
  };

  const visibleTrips = useMemo(getVisibleTrips, [trips, query, levelFilter, dFrom, dTo]);

  if (status === DataStatus.PENDING) {
    return <Loader />;
  }

  return (
    <>
      <TripsFilter
        inputValue={query}
        onValueChange={onQueryChange}
        durationFilterValue={durationFilter}
        onDurationFilterChange={onDurationFilterChange}
        levelFilterValue={levelFilter}
        onLevelFilterChange={onLevelFilterChange}
      />
      <TripList trips={visibleTrips} />
    </>
  );
};

export default HomePage;
