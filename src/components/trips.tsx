import { FC } from "react";
import { ITrip } from "../interfaces/trip.interface";
import { TripCard } from "./trip-card";

interface ITrips {
  trips: ITrip[];
}

export const Trips: FC<ITrips> = ({ trips }) => {
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
