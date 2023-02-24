import { ITripDuration } from "./trip.interface";

export const TripDuration: React.FC<ITripDuration> = ({ children }) => {
  return (
    <span data-test-id="trip-details-duration" className="trip-info__duration">
      <strong>{children}</strong> days
    </span>
  );
};
