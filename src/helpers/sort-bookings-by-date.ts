import { IBooking } from "interfaces/booking.interface";

export const sortBookingsByDate = (bookings: IBooking[]): IBooking[] => {
  return [...bookings].sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
};
