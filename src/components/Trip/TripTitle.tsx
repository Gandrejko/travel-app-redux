import { ITripTitle } from "./trip.interface";

export const TripTitle: React.FC<ITripTitle> = ({ children }) => {
  return (
    <h3 data-test-id="trip-details-title" className="trip-info__title">
      {children}
    </h3>
  );
};
