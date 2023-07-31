import { useDeleteBookingMutation } from 'api/api';
import { FC } from "react";
import { IBooking } from "interfaces/booking.interface";

import styles from "./style.module.css";

export const BookingCard: FC<IBooking> = ({
  id,
  guests,
  date,
  trip: { title },
  totalPrice,
}) => {
  const [bookingMut] = useDeleteBookingMutation();
  const deleteBooking = async () => {
    await bookingMut(id);
  };
  return (
    <li data-test-id="booking" className={styles.booking}>
      <h3 data-test-id="booking-title" className={styles.bookingTitle}>
        {title}
      </h3>
      <span data-test-id="booking-guests">{guests} guests</span>
      <span data-test-id="booking-date">
        {date.match(/\d\d\d\d-\d\d-\d\d/)}
      </span>
      <span data-test-id="booking-total">{totalPrice} $</span>
      <button
        data-test-id="booking-cancel"
        className={styles.bookingCancel}
        title="Cancel booking"
        onClick={deleteBooking}
      >
        <span className="visually-hidden">Cancel booking</span>×
      </button>
    </li>
  );
};
