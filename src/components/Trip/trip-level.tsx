import { FC } from "react";
import { ITripLevel } from "../../interfaces/trip.interface";

export const TripLevel: FC<ITripLevel> = ({ children }) => {
  return (
    <span data-test-id="trip-details-level" className="trip-info__level">
      {children}
    </span>
  );
};
