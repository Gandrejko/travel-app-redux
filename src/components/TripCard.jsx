import { Link } from "react-router-dom";
import { TripDuration } from "./Trip/TripDuration";
import { TripPrice } from "./Trip/TripPrice";
import { TripLevel } from "./Trip/TripLevel";
import { TripTitle } from "./Trip/TripTitle";

export const TripCard = ({ id, title, price, level, image, duration }) => {
  return (
    <li data-test-id="trip-card" className="trip-card">
      <img data-test-id="trip-card-image" src={image} alt="trip image" />
      <div className="trip-card__content">
        <div className="trip-info">
          <TripTitle>{title}</TripTitle>
          <div className="trip-info__content">
            <TripDuration>{duration}</TripDuration>
            <TripLevel>{level}</TripLevel>
          </div>
        </div>
        <TripPrice>{price}</TripPrice>
      </div>
      <Link data-test-id="trip-card-link" to={`trip/:${id}`} className="button">
        Discover a trip
      </Link>
    </li>
  );
};
