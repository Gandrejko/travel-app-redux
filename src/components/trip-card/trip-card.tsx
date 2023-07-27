import { FC } from "react";
import { generatePath, Link } from "react-router-dom";
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
          <h3 data-test-id="trip-card-title" className={styles.tripInfoTitle}>
            {title}
          </h3>
          <div className={styles.tripInfoContent}>
            <span
              data-test-id="trip-card-duration"
              className={styles.tripInfoDuration}
            >
              <strong>{duration}</strong> days
            </span>
            <span
              data-test-id="trip-card-level"
              className={styles.tripInfoLevel}
            >
              {level}
            </span>
          </div>
        </div>
        <div>
          <span>Price</span>
          <strong
            data-test-id="trip-card-price-value"
            className={styles.tripPriceValue}
          >
            {price} $
          </strong>
        </div>
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
