import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TripDesc from '../Components/TripDesc/TripDesc';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, IRootState } from '../store/store';
import { trip as tripFromServer } from '../store/actions';
import { DataStatus, DataPlaceholder } from '../common/enums/enums';
import Placeholder from '../Components/Placeholder/Placeholder';
import Loader from '../Components/Loader/Loader';

const TripDetailsPage: React.FC = () => {
  const { tripId } = useParams();

  const { trip, status } = useSelector((state: IRootState) => ({
    trip: state.trip.trip,
    status: state.trip.status,
  }));
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(tripFromServer.getTrip(tripId));
  }, [dispatch, tripId]);

  if (status === DataStatus.PENDING) {
    return <Loader />;
  }

  if (!trip) {
    return <Placeholder text={DataPlaceholder.NO_TRIP} />;
  }

  return (
    <section className="trip-page">
      <h1 className="visually-hidden">Travel App</h1>
      <TripDesc trip={trip} />
    </section>
  );
};

export default TripDetailsPage;
