export const TripDuration = ({ children }) => {
  return (
    <span data-test-id="trip-details-duration" className="trip-info__duration">
      <strong>{children}</strong> days
    </span>
  );
};
