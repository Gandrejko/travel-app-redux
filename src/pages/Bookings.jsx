import { BookingCard } from "../components/BookingCard";

export const Bookings = ({ bookings, deleteBooking }) => {
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
