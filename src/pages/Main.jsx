import { useEffect } from "react";
import { Filter } from "../components/Filter";
import { Trips } from "../components/Trips";

export const Main = ({ trips, ...props }) => {
  useEffect(() => {
    props.filterTrips({ search: "", level: "", duration: "" });
  }, []);

  return (
    <main>
      <h1 className="visually-hidden">Travel App</h1>
      <Filter {...props} />
      <Trips trips={trips} />
    </main>
  );
};
