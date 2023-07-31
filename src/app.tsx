import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "components/header/header";
import { Footer } from "components/footer/footer";
import { sortBookingsByDate } from "helpers/sort-bookings-by-date";
import { useBookingList } from "hooks/use-booking-list";
import { BookingsPage } from "pages/bookings-page/bookings-page";
import { MainPage } from "pages/main-page";
import { SignInPage } from "pages/sign-in-page/sign-in-page";
import { SignUpPage } from "pages/sign-up-page/sign-up-page";
import { TripPage } from "pages/trip-page/trip-page";
import { TRIP_ROUTE_PATTERN } from "routes";
import { IBooking } from "interfaces/booking.interface";

function App() {
  const [bookings, setBookings] = useBookingList();
  const addBooking = (newBooking: IBooking) => {
    setBookings(sortBookingsByDate([...bookings, newBooking]));
  };

  const deleteBooking = (bookingId: string) => {
    const newBookings = bookings.filter((booking) => booking.id !== bookingId);
    const sortedBookings = sortBookingsByDate(newBookings);
    setBookings(sortedBookings);
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<MainPage />} />
          <Route
            path="bookings"
            element={
              <BookingsPage bookings={bookings} deleteBooking={deleteBooking} />
            }
          />
          <Route
            path="sign-in"
            element={<SignInPage />}
          />
          <Route
            path="sign-up"
            element={<SignUpPage />}
          />
          <Route
            path={TRIP_ROUTE_PATTERN}
            element={<TripPage addBooking={addBooking} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
