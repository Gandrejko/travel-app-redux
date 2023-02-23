export const TripTitle = ({ children }) => {
  return (
    <h3 data-test-id="trip-details-title" className="trip-info__title">
      {children}
    </h3>
  );
};
