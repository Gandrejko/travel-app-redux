import { useParams } from "react-router-dom";
import { useState } from "react";

export const Trip = ({ trips }) => {
  const { tripId } = useParams();
  const formattedTripId = tripId.slice(1, tripId.length);
  const { createdAt, description, duration, id, image, level, price, title } =
    trips.find((trip) => trip.id === formattedTripId);

  const [modalHide, setModalHide] = useState(true);
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);

  const changeInput = (value) => {
    let newValue;
    if (value > 10) newValue = 10;
    else if (value < 0) newValue = 0;
    else newValue = value;

    setNumberOfGuests(newValue);
    setTotalPrice(newValue * price);
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
              <h3
                data-test-id="trip-details-title"
                className="trip-info__title"
              >
                {title}
              </h3>
              <div className="trip-info__content">
                <span
                  data-test-id="trip-details-duration"
                  className="trip-info__duration"
                >
                  <strong>{duration}</strong> days
                </span>
                <span
                  data-test-id="trip-details-level"
                  className="trip-info__level"
                >
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
                {price} $
              </strong>
            </div>
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
            <form className="book-trip-popup__form" autoComplete="off">
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
                  onChange={(e) => changeInput(e.target.value)}
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
