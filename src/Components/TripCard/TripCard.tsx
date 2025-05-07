import React from 'react';
import './tripCard.css';
import { Trip } from '../../types/Trip';
import { useNavigate } from 'react-router-dom';
import { TripDetailsRoute } from '../../routes';

interface Props {
  trip: Trip;
}

const TripCard: React.FC<Props> = ({ trip }) => {
  const { id, title, image, duration, level, price } = trip;
  const navigate = useNavigate();
  const toTripDetailsPage = () => navigate(`${TripDetailsRoute.root}/${id}`);

  return (
    <li data-test-id="trip-card" className="trip-card">
      <img
        data-test-id="trip-card-image"
        src={image}
        alt="trip"
      />
      <div className="trip-card__content">
        <div className="trip-info">
          <h3 data-test-id="trip-card-title" className="trip-info__title">
            {title}
          </h3>

          <div className="trip-info__content">
            <span
              data-test-id="trip-card-duration"
              className="trip-info__duration"
            >
              <strong>{duration}</strong> days
            </span>
            <span data-test-id="trip-card-level" className="trip-info__level">
              {level}
            </span>
          </div>
        </div>
        <div className="trip-price">
          <span>Price</span>
          <strong
            data-test-id="trip-card-price-value"
            className="trip-price__value"
          >
            {`${price} $`}
          </strong>
        </div>
      </div>
      <button
        data-test-id="trip-card-link"
        className="button"
        onClick={toTripDetailsPage}
      >
        Discover a trip
      </button>
    </li>
  );
};

export default TripCard;
