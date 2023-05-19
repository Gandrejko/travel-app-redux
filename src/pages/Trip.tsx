import { useParams } from "react-router-dom";
import { useState } from "react";
import { TripTitle } from "../components/Trip/TripTitle";
import { TripDuration } from "../components/Trip/TripDuration";
import { TripLevel } from "../components/Trip/TripLevel";
import { TripPrice } from "../components/Trip/TripPrice";
import { stringifyDate } from "../helpers/stringifyDate";
import { ITrip } from "../interfaces/trip.interface";
import { IBooking } from "../interfaces/booking.interface";
import { v4 } from 'uuid';

interface ITripProps {
  trips: ITrip[];
  addBooking: (booking: IBooking) => void;
}

export const Trip: React.FC<ITripProps> = ({ trips, addBooking }) => {
  const { tripId } = useParams();

  const card = trips.find((trip) => trip.id === tripId) || trips[0];
  const { description, duration, id, image, level, price, title } = card;

  const [modalHide, setModalHide] = useState(true);
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);
  const [date, setDate] = useState<string>();
  const [userId, setUserId] = useState("1dd97a12-848f-4a1d-8a7d-34a2132fca94");

  const changeInput = (value: number) => {
    let newValue;
    if (value > 10) {
      newValue = 10;
    }
    else if (value < 0) {
      newValue = 0;
    }
    else {
      newValue = value;
    }

    setNumberOfGuests(newValue);
    setTotalPrice(newValue * price);
  };

  const createBooking = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const dateInFuture =
      date && new Date(date).getTime() > new Date().getTime();
    if (!numberOfGuests || !date || !dateInFuture) {
      return;
    }
    const newBooking = {
      id: v4(),
      userId: userId,
      tripId: id,
      guests: numberOfGuests,
      date: date,
      trip: {
        title: title,
        duration: duration,
        price: price,
      },
      totalPrice: totalPrice,
      createdAt: stringifyDate(new Date()),
    };
    addBooking(newBooking);
    setModalHide(true);
  };
  return (
    <>
      <main className="trip-page">
        <h1 className="visually-hidden">Travel App</h1>
        <div className="trip">
          <img
            data-test-id="trip-details-image"
            src={image}
            className="trip__img"
            alt="trip image"
          />
          <div className="trip__content">
            <div className="trip-info">
              <TripTitle>{title}</TripTitle>
              <div className="trip-info__content">
                <TripDuration>{duration}</TripDuration>
                <TripLevel>{level}</TripLevel>
              </div>
            </div>
            <div
              data-test-id="trip-details-description"
              className="trip__description"
            >
              {description}
            </div>
            <TripPrice>{price}</TripPrice>
            <button
              data-test-id="trip-details-button"
              className="trip__button button"
              onClick={() => setModalHide(false)}
            >
              Book a trip
            </button>
          </div>
        </div>
      </main>
      <div hidden={modalHide}>
        <div className="modal">
          <div data-test-id="book-trip-popup" className="book-trip-popup">
            <button
              data-test-id="book-trip-popup-close"
              className="book-trip-popup__close"
              onClick={() => setModalHide(true)}
            >
              ×
            </button>
            <form
              className="book-trip-popup__form"
              autoComplete="off"
              onSubmit={createBooking}
            >
              <div className="trip-info">
                <h3
                  data-test-id="book-trip-popup-title"
                  className="trip-info__title"
                >
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
              <label className="input">
                <span className="input__heading">Date</span>
                <input
                  data-test-id="book-trip-popup-date"
                  name="date"
                  type="date"
                  required
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setDate(e.target.value)
                  }
                />
              </label>
              <label className="input">
                <span className="input__heading">Number of guests</span>
                <input
                  data-test-id="book-trip-popup-guests"
                  name="guests"
                  type="number"
                  min="1"
                  max="10"
                  value={numberOfGuests}
                  required
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    changeInput(+e.target.value)
                  }
                />
              </label>
              <span className="book-trip-popup__total">
                Total:
                <output
                  data-test-id="book-trip-popup-total-value"
                  className="book-trip-popup__total-value"
                >
                  {totalPrice}$
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
      </div>
    </>
  );
};
