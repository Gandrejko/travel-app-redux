export const filterBySearch = (trips, search) => {
  return trips.filter(
    (trip) => trip.title.toLowerCase().contains(search.toLowerCase())
  );
};
