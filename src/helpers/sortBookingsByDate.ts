import { IBooking } from "../interfaces/booking.interface";

export const sortBookingsByDate = (bookings: IBooking[]): IBooking[] => {
  // it's a good form not to mutate input
  return [...bookings].sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
};
