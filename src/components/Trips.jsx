import {TripCard} from "./TripCard";

export const Trips = ({trips}) => {
	return (
		<section className="trips">
			<h2 className="visually-hidden">Trips List</h2>
			<ul className="trip-list">
				{trips.map((trip) => (
					<TripCard key={trip.id} {...trip} />
				))}
			</ul>
		</section>
	)
}