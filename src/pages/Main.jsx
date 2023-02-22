import { Filter } from "../components/Filter";
import { Trips } from "../components/Trips";
import { useEffect } from "react";

export const Main = ({ trips, setIsLogin }) => {
  useEffect(() => {
    setIsLogin(true);
  }, []);
  return (
    <main>
      <h1 className="visually-hidden">Travel App</h1>
      <Filter />
      <Trips trips={trips} />
    </main>
  );
};
