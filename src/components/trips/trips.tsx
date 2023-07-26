import { FC } from "react";
import { ITrip } from "interfaces/trip.interface";
import { TripCard } from "components/trip-card/trip-card";

import styles from "./style.module.css";

interface ITrips {
  trips: ITrip[];
}

export const Trips: FC<ITrips> = ({ trips }) => {
  return (
    <section className={styles.trips}>
      <h2 className="visually-hidden">Trips List</h2>
      <ul className={styles.tripList}>
        {trips.map((trip) => (
          <TripCard key={trip.id} {...trip} />
        ))}
      </ul>
    </section>
  );
};
