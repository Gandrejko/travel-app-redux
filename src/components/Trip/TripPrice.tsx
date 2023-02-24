import { ITripPrice } from "./trip.interface";

export const TripPrice: React.FC<ITripPrice> = ({ children }) => {
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
