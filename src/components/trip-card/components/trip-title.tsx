import { FC } from "react";
import { ITripTitle } from "interfaces/trip.interface";

import styles from "../style.module.css";

export const TripTitle: FC<ITripTitle> = ({ children }) => {
  return (
    <h3 data-test-id="trip-details-title" className={styles.tripInfoTitle}>
      {children}
    </h3>
  );
};
