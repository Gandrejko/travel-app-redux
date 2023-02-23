export const sortBookingsByDate = (bookings) => {
  return bookings.sort((a, b) => {
    console.log(new Date(a.date), new Date(b.date));
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
};
