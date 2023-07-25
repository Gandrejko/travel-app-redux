import { FC } from 'react';
import { BookingCard } from "../components/booking-card";
import { IBooking } from "../interfaces/booking.interface";

export interface IBookingsPageProps {
  bookings: IBooking[];
  deleteBooking: (id: string) => void;
}
export const BookingsPage: FC<IBookingsPageProps> = ({
  bookings,
  deleteBooking,
}) => {
  return (
    <main className="bookings-page">
      <h1 className="visually-hidden">Travel App</h1>
      <ul className="bookings__list">
        {bookings.map((booking) => (
          <BookingCard key={booking.id} {...booking} onClick={deleteBooking} />
        ))}
      </ul>
    </main>
  );
};
