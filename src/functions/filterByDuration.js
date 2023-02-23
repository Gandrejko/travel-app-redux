export const filterByDuration = (trips, duration) => {
  let min = 0,
    max = Infinity;
  switch (duration) {
    case "0_x_5":
      min = 0;
      max = 5;
      break;
    case "5_x_10":
      min = 5;
      max = 10;
      break;
    case "10_x":
      min = 10;
      break;
  }
  return trips.filter((trip) => trip.duration >= min && trip.duration < max);
};
