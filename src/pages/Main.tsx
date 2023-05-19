import { Dispatch, useEffect } from "react";
import { Filter } from "../components/Filter";
import { Trips } from "../components/Trips";
import { ITrip } from "../interfaces/trip.interface";
import { IFilterTrips } from "../interfaces/filter-trips.interface";

interface IMainProps {
  trips: ITrip[];
  search: string;
  level: string;
  duration: string;
  filterTrips: ({ search, level, duration }: IFilterTrips) => void;
  setIsLogin: Dispatch<boolean>;
}

export const Main: React.FC<IMainProps> = ({
  trips,
  filterTrips,
  search,
  level,
  duration,
  setIsLogin,
}) => {
  useEffect(() => {
    filterTrips({ search: "", level: "", duration: "" });
    setIsLogin(true);
  }, []);

  return (
    <main>
      <h1 className="visually-hidden">Travel App</h1>
      <Filter
        filterTrips={filterTrips}
        search={search}
        level={level}
        duration={duration}
      />
      <Trips trips={trips} />
    </main>
  );
};
