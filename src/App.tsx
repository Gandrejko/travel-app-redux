import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Main } from "./pages/Main";
import { Bookings } from "./pages/Bookings";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Trip } from "./pages/Trip";
import { useMemo, useState } from "react";
import { defaultTrip as trips } from "./constants/default-values";
import { filterByDuration } from "./helpers/filterByDuration";
import { filterByLevel } from "./helpers/filterByLevel";
import { filterBySearch } from "./helpers/filterBySearch";
import { sortBookingsByDate } from "./helpers/sortBookingsByDate";
import { TRIP_ROUTE_PATTERN } from "./routes";
import { useBookingList } from "./hooks/useBookingList";
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
              <Main
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
              <Bookings bookings={bookings} deleteBooking={deleteBooking} />
            }
          />
          <Route path="sign-in" element={<SignIn setIsLogin={setIsLogin} />} />
          <Route path="sign-up" element={<SignUp setIsLogin={setIsLogin} />} />
          <Route
            path={TRIP_ROUTE_PATTERN}
            element={<Trip trips={filteredTrips} addBooking={addBooking} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
