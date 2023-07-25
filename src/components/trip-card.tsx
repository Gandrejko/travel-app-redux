import { FC } from "react";
import { generatePath, Link } from "react-router-dom";
import { TripDuration } from "./trip/trip-duration";
import { TripPrice } from "./trip/trip-price";
import { TripLevel } from "./trip/trip-level";
import { TripTitle } from "./trip/trip-title";
import { TRIP_ROUTE_PATTERN } from "routes";
import { ITrip } from "interfaces/trip.interface";

export const TripCard: FC<ITrip> = ({
  id,
  title,
  price,
  level,
  image,
  duration,
}) => {
  return (
    <li data-test-id="trip-card" className="trip-card">
      <img data-test-id="trip-card-image" src={image} alt="trip" />
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
      <Link
        data-test-id="trip-card-link"
        to={generatePath(TRIP_ROUTE_PATTERN, { tripId: id })}
        className="button"
      >
        Discover a trip
      </Link>
    </li>
  );
};
