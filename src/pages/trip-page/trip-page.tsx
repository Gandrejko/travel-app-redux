import { useGetTripByIdQuery } from 'api/api';
import { useParams } from "react-router-dom";
import { ChangeEvent, FC, SyntheticEvent, useState } from "react";
import { Input } from "components/inputs/input/input";
import { stringifyDate } from "helpers/stringify-date";
import { IBooking } from "interfaces/booking.interface";
import { v4 } from "uuid";

import styles from "./style.module.css";

interface ITripPageProps {
  addBooking: (booking: IBooking) => void;
}

export const TripPage: FC<ITripPageProps> = ({ addBooking }) => {
  const { tripId } = useParams();
  const { data: trip } = useGetTripByIdQuery(tripId);
  const { description, duration, id, image, level, price, title } = trip || {};

  const [modalHide, setModalHide] = useState(true);
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price || 0);
  const [date, setDate] = useState<string>();
  const [userId] = useState("1dd97a12-848f-4a1d-8a7d-34a2132fca94");

  const changeInput = (value: number) => {
    let newValue;
    if (value > 10) {
      newValue = 10;
    } else if (value < 0) {
      newValue = 0;
    } else {
      newValue = value;
    }

    setNumberOfGuests(newValue);
    setTotalPrice(newValue * price);
  };

  const createBooking = (e: SyntheticEvent) => {
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
      <main className={styles.tripPage}>
        <h1 className="visually-hidden">Travel App</h1>
        <div className={styles.trip}>
          <img
            data-test-id="trip-details-image"
            src={image}
            className={styles.tripImg}
            alt="trip"
          />
          <div className={styles.tripContent}>
            <div className={styles.tripInfo}>
              <h3
                data-test-id="trip-details-title"
                className="trip-info__title"
              >
                Iceland
              </h3>
              <div className={styles.tripInfoContent}>
                <span
                  data-test-id="trip-details-duration"
                  className={styles.tripInfoDuration}
                >
                  <strong>{duration}</strong> days
                </span>
                <span
                  data-test-id="trip-details-level"
                  className={styles.tripInfoLevel}
                >
                  {level}
                </span>
              </div>
            </div>
            <div
              data-test-id="trip-details-description"
              className={styles.tripDescription}
            >
              {description}
            </div>
            <div>
              <span>Price</span>
              <strong
                data-test-id="trip-details-price-value"
                className={styles.tripPriceValue}
              >
                {price} $
              </strong>
            </div>
            <button
              data-test-id="trip-details-button"
              className={`${styles.tripButton} button`}
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
              <div className={styles.tripInfo}>
                <h3
                  data-test-id="book-trip-popup-title"
                  className={styles.tripInfoTitle}
                >
                  {title}
                </h3>
                <div className={styles.tripInfoContent}>
                  <span
                    data-test-id="book-trip-popup-duration"
                    className={styles.tripInfoDuration}
                  >
                    <strong>{duration}</strong> days
                  </span>
                  <span
                    data-test-id="book-trip-popup-level"
                    className={styles.tripInfoLevel}
                  >
                    {level}
                  </span>
                </div>
              </div>
              <Input
                data-test-id="book-trip-popup-date"
                name="date"
                type="date"
                required
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setDate(e.target.value)
                }
                spanClassNames="input__heading"
              />
              <Input
                data-test-id="book-trip-popup-guests"
                name="guests"
                type="number"
                min="1"
                max="10"
                value={numberOfGuests}
                required
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  changeInput(+e.target.value)
                }
                spanClassNames="input__heading"
              />
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
