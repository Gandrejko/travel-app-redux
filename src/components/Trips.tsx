import { TripCard } from "./TripCard";
import { ITrip } from "../interfaces/trip.interface";

interface ITrips {
  trips: ITrip[];
}

export const Trips: React.FC<ITrips> = ({ trips }) => {
  return (
    <section className="trips">
      <h2 className="visually-hidden">Trips List</h2>
      <ul className="trip-list">
        {trips.map((trip) => (
          <TripCard key={trip.id} {...trip} />
        ))}
      </ul>
    </section>
  );
};
