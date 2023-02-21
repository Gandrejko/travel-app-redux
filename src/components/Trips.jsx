import {TripCard} from "./TripCard";

export const Trips = () => {
	return (
		<section className="trips">
			<h2 className="visually-hidden">Trips List</h2>
			<ul className="trip-list">
				<TripCard />
				<TripCard />
				<TripCard />
				<TripCard />
				<TripCard />
				<TripCard />
				<TripCard />
			</ul>
		</section>
	)
}