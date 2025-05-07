import React, { useState } from 'react';
import { Trip } from '../../types/Trip';
import './tripDesc.css';
import Modal from '../Modal/Modal';

interface Props {
  trip: Trip;
}

const TripDesc: React.FC<Props> = ({ trip }) => {
  const { title, image, duration, description, level, price } = trip;
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  return (
    <div className="trip">
      <img
        data-test-id="trip-details-image"
        src={image}
        className="trip__img"
        alt="trip"
      />
      <div className="trip__content">
        <div className="trip-info">
          <h3 data-test-id="trip-details-title" className="trip-info__title">
            {title}
          </h3>
          <div className="trip-info__content">
              <span
                data-test-id="trip-details-duration"
                className="trip-info__duration"
              >
                <strong>{duration}</strong> days
              </span>
            <span data-test-id="trip-details-level" className="trip-info__level">
                {level}
              </span>
          </div>
        </div>
        <div
          data-test-id="trip-details-description"
          className="trip__description"
        >
          {description}
        </div>
        <div className="trip-price">
          <span>Price</span>
          <strong
            data-test-id="trip-details-price-value"
            className="trip-price__value"
          >
            {`${price} $`}
          </strong>
        </div>
        <button
          data-test-id="trip-details-button"
          className="trip__button button"
          onClick={openModal}
        >
          Book a trip
        </button>
      </div>

      {isOpenModal && <Modal closeModal={closeModal} trip={trip} />}
    </div>
  );
};

export default TripDesc;
