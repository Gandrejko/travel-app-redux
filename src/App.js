import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Main } from "./pages/Main";
import { Bookings } from "./pages/Bookings";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Trip } from "./pages/Trip";
import { useState } from "react";
import tripsJSON from "./assets/data/trips.json";
import bookingsJSON from "./assets/data/bookings.json";
import { filterByDuration } from "./functions/filterByDuration";
import { filterByLevel } from "./functions/filterByLevel";
import { filterBySearch } from "./functions/filterBySearch";
import { sortBookingsByDate } from "./functions/sortBookingsByDate";

function App() {
  const trips = tripsJSON;
  const [filteredTrips, setFilteredTrips] = useState(trips);
  const [bookings, setBookings] = useState(bookingsJSON);
  const [isLogin, setIsLogin] = useState(true);

  const filterTrips = ({ search = "", duration = "", level = "" }) => {
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

    setFilteredTrips(newTrips);
  };

  const addBooking = (newBooking) => {
    setBookings((prevState) => {
      prevState.push(newBooking);
      return sortBookingsByDate(prevState);
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
      <Header isLogin={isLogin} />
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <Main
                trips={filteredTrips}
                setIsLogin={setIsLogin}
                filterTrips={filterTrips}
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
            path="trip/:tripId"
            element={<Trip trips={filteredTrips} addBooking={addBooking} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
          }/>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
