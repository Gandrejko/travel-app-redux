import { FC } from "react";
import { ITripPrice } from "interfaces/trip.interface";

import styles from "../style.module.css";

export const TripPrice: FC<ITripPrice> = ({ children }) => {
  return (
    <div>
      <span>Price</span>
      <strong
        data-test-id="trip-details-price-value"
        className={styles.tripPriceValue}
      >
        {children} $
      </strong>
    </div>
  );
};
