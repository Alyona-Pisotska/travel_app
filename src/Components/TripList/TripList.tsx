import React from 'react';
import './tripList.css';
import { Trip } from '../../types/Trip';
import TripCard from '../TripCard/TripCard';

interface Props {
  trips: Trip[];
}

const TripList: React.FC<Props> = ({ trips }) => {
  return (
    <section className="trips">
      <h2 className="visually-hidden">Trips List</h2>
      <ul className="trip-list">
        {trips.map(trip => <TripCard key={trip.id} trip={trip} />)}
      </ul>
    </section>
  );
};

export default TripList;
