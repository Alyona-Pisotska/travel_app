import React, { useCallback, useState } from 'react';
import './modal.css';
import { Trip } from '../../types/Trip';
import { DateInput, GuestsInput } from '../Inputs/Inputs';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, IRootState } from '../../store/store';
import { bookings as bookingsActionCreator } from '../../store/actions';

interface Props {
  trip: Trip;
  closeModal: () => void;
}

const Modal: React.FC<Props> = ({ trip, closeModal }) => {
  const { userId } = useSelector((state: IRootState) => ({
    userId: state.auth.auth?.user.id || '',
  }));
  const { title, duration, level, price, id } = trip;
  const [guestsCount, setGuestsCount] = useState('1');
  const totalPrice = +guestsCount * price;
  const [date, setDate] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const onChangeGuestsCount = (event: React.ChangeEvent<HTMLInputElement>) => setGuestsCount(event.target.value);
  const onChangeDateValue = (event: React.ChangeEvent<HTMLInputElement>) => setDate(event.target.value);

  const handleBookingSave = useCallback((id: string, userId: string, guestsCount: number, date: string) => {
    dispatch(bookingsActionCreator.createBooking({
      tripId: id,
      userId,
      guests: guestsCount,
      date,
    }));
  }, [dispatch]);

  const createBooking = (event: React.FormEvent) => {
    event.preventDefault();
    handleBookingSave(id, userId, +guestsCount, date);
    closeModal();
  };

  return (
    <div className="modal">
      <div data-test-id="book-trip-popup" className="book-trip-popup">
        <button
          data-test-id="book-trip-popup-close"
          className="book-trip-popup__close"
          onClick={closeModal}
        >
          ×
        </button>

        <form
          className="book-trip-popup__form"
          autoComplete="off"
          onSubmit={createBooking}
        >
          <div className="trip-info">
            <h3 data-test-id="book-trip-popup-title" className="trip-info__title">
              {title}
            </h3>

            <div className="trip-info__content">
              <span
                data-test-id="book-trip-popup-duration"
                className="trip-info__duration"
              >
                <strong>{duration}</strong> days
              </span>
              <span
                data-test-id="book-trip-popup-level"
                className="trip-info__level"
              >
                {level}
              </span>
            </div>
          </div>

          <DateInput value={date} onValueChange={onChangeDateValue} />
          <GuestsInput value={guestsCount} onValueChange={onChangeGuestsCount} />

          <span className="book-trip-popup__total">
            Total:
            <output
              data-test-id="book-trip-popup-total-value"
              className="book-trip-popup__total-value"
            >
              {`${totalPrice} $`}
            </output>
          </span>

          <button
            data-test-id="book-trip-popup-submit"
            className="button"
            type="submit"
          >
            Book a trip
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
