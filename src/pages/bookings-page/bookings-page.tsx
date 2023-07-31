import { useGetBookingsQuery } from 'api/api';
import { sortBookingsByDate } from 'helpers/sort-bookings-by-date';
import { FC } from "react";
import { BookingCard } from "components/booking-card/booking-card";
import { IBooking } from "interfaces/booking.interface";

import styles from "./style.module.css";

export const BookingsPage: FC = () => {
  const { data: bookings } = useGetBookingsQuery();
  return (
    <main className={styles.bookingsPage}>
      <h1 className="visually-hidden">Travel App</h1>
      <ul className={styles.bookingsList}>
        {sortBookingsByDate(bookings)?.map((booking: IBooking) => (
          <BookingCard key={booking.id} {...booking} />
        ))}
      </ul>
    </main>
  );
};
