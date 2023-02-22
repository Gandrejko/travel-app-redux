import { Filter } from "../components/Filter";
import { Trips } from "../components/Trips";
import { useEffect } from "react";

export const Main = ({ trips, setIsLogin, filterTrips }) => {
  useEffect(() => {
    setIsLogin(true);
  }, []);
  return (
    <main>
      <h1 className="visually-hidden">Travel App</h1>
      <Filter filterTrips={filterTrips} />
      <Trips trips={trips} />
    </main>
  );
};
