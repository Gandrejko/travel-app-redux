import { useGetBookingsQuery } from 'api/api';
import { Loader } from 'components/loader/loader';
import { sortBookingsByDate } from 'helpers/sort-bookings-by-date';
import { FC } from "react";
import { BookingCard } from "components/booking-card/booking-card";
import { IBooking } from "interfaces/booking.interface";

import styles from "./style.module.css";

export const BookingsPage: FC = () => {
  const { data: bookings, isLoading } = useGetBookingsQuery();
  return (
    <main className={styles.bookingsPage}>
      <h1 className="visually-hidden">Travel App</h1>
      <ul className={styles.bookingsList}>
        {isLoading && <Loader />}
        {sortBookingsByDate(bookings)?.map((booking: IBooking) => (
          <BookingCard key={booking.id} {...booking} />
        ))}
      </ul>
    </main>
  );
};
