import { FC } from "react";
import { generatePath, Link } from "react-router-dom";
import { TripDuration } from "./components/trip-duration";
import { TripPrice } from "./components/trip-price";
import { TripLevel } from "./components/trip-level";
import { TripTitle } from "./components/trip-title";
import { TRIP_ROUTE_PATTERN } from "routes";
import { ITrip } from "interfaces/trip.interface";

import styles from "./style.module.css";

export const TripCard: FC<ITrip> = ({
  id,
  title,
  price,
  level,
  image,
  duration,
}) => {
  return (
    <li data-test-id="trip-card" className={styles.tripCard}>
      <img
        data-test-id="trip-card-image"
        src={image}
        alt="trip"
        className={styles.tripCardImg}
      />
      <div className={styles.tripCardContent}>
        <div className={styles.tripInfo}>
          <TripTitle>{title}</TripTitle>
          <div className={styles.tripInfoContent}>
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
