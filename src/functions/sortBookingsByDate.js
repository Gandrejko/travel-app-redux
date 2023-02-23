export const sortBookingsByDate = (bookings) => {
  return bookings.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
};
