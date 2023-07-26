import { FC } from "react";
import { BookingCard } from "components/booking-card/booking-card";
import { IBooking } from "interfaces/booking.interface";

import styles from "./style.module.css";

export interface IBookingsPageProps {
  bookings: IBooking[];
  deleteBooking: (id: string) => void;
}

export const BookingsPage: FC<IBookingsPageProps> = ({
  bookings,
  deleteBooking,
}) => {
  return (
    <main className={styles.bookingsPage}>
      <h1 className="visually-hidden">Travel App</h1>
      <ul className={styles.bookingsList}>
        {bookings.map((booking) => (
          <BookingCard key={booking.id} {...booking} onClick={deleteBooking} />
        ))}
      </ul>
    </main>
  );
};
