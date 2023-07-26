import { FC } from "react";
import { ITripLevel } from "interfaces/trip.interface";

import styles from "../style.module.css";

export const TripLevel: FC<ITripLevel> = ({ children }) => {
  return (
    <span data-test-id="trip-details-level" className={styles.tripInfoLevel}>
      {children}
    </span>
  );
};
