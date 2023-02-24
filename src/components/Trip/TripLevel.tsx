import { ITripLevel } from "./trip.interface";

export const TripLevel: React.FC<ITripLevel> = ({ children }) => {
  return (
    <span data-test-id="trip-details-level" className="trip-info__level">
      {children}
    </span>
  );
};
