export const sortBookingsByDate = (bookings) => {
  // it's a good form not to mutate input
  return [...bookings].sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
};
