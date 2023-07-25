import { FC } from "react";
import { ITripDuration } from "../../interfaces/trip.interface";

export const TripDuration: FC<ITripDuration> = ({ children }) => {
  return (
    <span data-test-id="trip-details-duration" className="trip-info__duration">
      <strong>{children}</strong> days
    </span>
  );
};
