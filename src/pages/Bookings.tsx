import { BookingCard } from "../components/BookingCard";
import { IBooking } from "../interfaces/booking.interface";

export interface IBookingsProps {
  bookings: IBooking[];
  deleteBooking: (id: string) => void;
}
export const Bookings: React.FC<IBookingsProps> = ({
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
