import { FC } from "react";
import { ITripDuration } from "interfaces/trip.interface";

import styles from "../style.module.css";

export const TripDuration: FC<ITripDuration> = ({ children }) => {
  return (
    <span
      data-test-id="trip-details-duration"
      className={styles.tripInfoDuration}
    >
      <strong>{children}</strong> days
    </span>
  );
};
