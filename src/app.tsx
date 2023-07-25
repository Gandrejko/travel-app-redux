import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { useMemo, useState } from "react";
import { defaultTrip as trips } from "./constants/default-values";
import { filterByDuration } from './helpers/filter-by-duration';
import { filterByLevel } from './helpers/filter-by-level';
import { filterBySearch } from './helpers/filter-by-search';
import { sortBookingsByDate } from './helpers/sort-bookings-by-date';
import { useBookingList } from './hooks/use-booking-list';
import { BookingsPage } from './pages/bookings-page';
import { MainPage } from './pages/main-page';
import { SignInPage } from './pages/sign-in-page';
import { SignUpPage } from './pages/sign-up-page';
import { TripPage } from './pages/trip-page';
import { TRIP_ROUTE_PATTERN } from "./routes";
import { IBooking } from "./interfaces/booking.interface";
import { IFilterTrips } from "./interfaces/filter-trips.interface";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [bookings, setBookings] = useBookingList();

  const [search, setSearch] = useState("");
  const [duration, setDuration] = useState("");
  const [level, setLevel] = useState("");

  const filterTrips = ({
    search = undefined,
    duration = undefined,
    level = undefined,
  }: IFilterTrips): void => {
    if (search !== undefined) {
      setSearch(search);
    }
    if (duration !== undefined) {
      setDuration(duration);
    }
    if (level !== undefined) {
      setLevel(level);
    }
  };

  const filteredTrips = useMemo(() => {
    let newTrips = trips;
    if (search) {
      newTrips = filterBySearch(trips, search);
    }
    if (duration) {
      newTrips = filterByDuration(newTrips, duration);
    }
    if (level) {
      newTrips = filterByLevel(newTrips, level);
    }

    return newTrips;
  }, [search, duration, level]);

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
      <Header isLogin={isLogin} />
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <MainPage
                trips={filteredTrips}
                filterTrips={filterTrips}
                level={level}
                duration={duration}
                search={search}
                setIsLogin={setIsLogin}
              />
            }
          />
          <Route
            path="bookings"
            element={
              <BookingsPage bookings={bookings} deleteBooking={deleteBooking} />
            }
          />
          <Route path="sign-in" element={<SignInPage setIsLogin={setIsLogin} />} />
          <Route path="sign-up" element={<SignUpPage setIsLogin={setIsLogin} />} />
          <Route
            path={TRIP_ROUTE_PATTERN}
            element={<TripPage trips={filteredTrips} addBooking={addBooking} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
