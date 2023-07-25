import { FC } from "react";
import { ITripPrice } from "../../interfaces/trip.interface";

export const TripPrice: FC<ITripPrice> = ({ children }) => {
  return (
    <div className="trip-price">
      <span>Price</span>
      <strong
        data-test-id="trip-details-price-value"
        className="trip-price__value"
      >
        {children} $
      </strong>
    </div>
  );
};
