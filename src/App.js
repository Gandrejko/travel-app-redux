import {Routes, Route} from "react-router-dom";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Main} from "./pages/Main";
import {Bookings} from "./pages/Bookings";
import {SignIn} from "./pages/SignIn";
import {SignUp} from "./pages/SignUp";
import {Trip} from "./pages/Trip";
import {useState} from "react";
import tripsJSON from './assets/data/trips.json';
import bookingsJSON from './assets/data/bookings.json';

function App() {
	const [trips, setTrips] = useState(tripsJSON);
	const [bookings, setBookings] = useState(bookingsJSON);

	const addBooking = (tripId) => {
		setBookings(prevState => {
			const tripDetails = trips.find(trip => trip.id === tripId);
			/*const newBooking = {
				id: "ee3be8e7-648f-4fce-bdb5-ba0c7cb38c55",
				userId: "1dd97a12-848f-4a1d-8a7d-34a2132fca94",
				tripId: "4c7564ad-fafc-4641-a692-55a683de7fbe",
				guests: 1,
				date: "2024-09-03T14:37:00.049Z",
				trip: {
					title: "Scotland",
					duration: 8,
					price: 2145
				},
				totalPrice: 2145,
				createdAt: "2022-05-22T17:44:56.660Z"
			};*/
		})
	}

	const deleteBooking = (bookingId) => {
		setBookings(bookings.filter(booking => booking.id !== bookingId))
	}

	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path='/' element={<Main trips={trips} />} />
				<Route path='/bookings' element={<Bookings bookings={bookings} deleteBooking={deleteBooking} />} />
				<Route path='/sign-in' element={<SignIn />} />
				<Route path='/sign-up' element={<SignUp />} />
				<Route path="/trip/:tripId" element={<Trip trips={trips} />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
