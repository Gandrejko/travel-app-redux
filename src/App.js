import { Routes, Route } from "react-router-dom";
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

function App() {
  const [trips, setTrips] = useState(tripsJSON);
  const [bookings, setBookings] = useState(bookingsJSON);

  const addBooking = (newBooking) => {
    setBookings((prevState) => {
      prevState.push(newBooking);
      return prevState;
    });
  };

  const deleteBooking = (bookingId) => {
    setBookings(bookings.filter((booking) => booking.id !== bookingId));
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main trips={trips} />} />
        <Route
          path="/bookings"
          element={
            <Bookings bookings={bookings} deleteBooking={deleteBooking} />
          }
        />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/trip/:tripId"
          element={<Trip trips={trips} addBooking={addBooking} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
