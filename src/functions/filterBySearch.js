export const filterBySearch = (trips, search) => {
  return trips.filter(
    (trip) => trip.title.toLowerCase().search(search.toLowerCase()) > 0 // but contains is better)
  );
};
