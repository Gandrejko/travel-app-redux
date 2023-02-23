import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Main } from "./pages/Main";
import { Bookings } from "./pages/Bookings";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Trip } from "./pages/Trip";
import { useMemo, useState } from "react";
import tripsJSON from "./assets/data/trips.json";
import bookingsJSON from "./assets/data/bookings.json";
import { filterByDuration } from "./functions/filterByDuration";
import { filterByLevel } from "./functions/filterByLevel";
import { filterBySearch } from "./functions/filterBySearch";
import { sortBookingsByDate } from "./functions/sortBookingsByDate";
import { TRIP_ROUTE_PATTERN } from "./routes";

const trips = tripsJSON;

function App() {
  const [bookings, setBookings] = useState(bookingsJSON);

  const [search, setSearch] = useState("");
  const [duration, setDuration] = useState("");
  const [level, setLevel] = useState("");

  const filterTrips = ({
    search = undefined,
    duration = undefined,
    level = undefined,
  }) => {
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

  const addBooking = (newBooking) => {
    setBookings((prevState) => {
      // dont't mutate the new state
      return sortBookingsByDate([...prevState, newBooking]);
    });
  };

  const deleteBooking = (bookingId) => {
    setBookings((prevState) => {
      const newBookings = prevState.filter(
        (booking) => booking.id !== bookingId
      );
      return sortBookingsByDate(newBookings);
    });
  };

  return (
    <div className="App">
      <Header />
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
              />
            }
          />
          <Route
            path="bookings"
            element={
              <Bookings bookings={bookings} deleteBooking={deleteBooking} />
            }
          />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
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
