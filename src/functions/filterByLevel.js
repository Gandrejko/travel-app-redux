export const filterByLevel = (trips, level) => {
  return trips.filter((trip) => trip.level === level);
};
