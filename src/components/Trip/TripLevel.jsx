export const TripLevel = ({ children }) => {
  return (
    <span data-test-id="trip-details-level" className="trip-info__level">
      {children}
    </span>
  );
};
