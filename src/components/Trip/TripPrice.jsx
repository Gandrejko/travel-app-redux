export const TripPrice = ({ children }) => {
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
