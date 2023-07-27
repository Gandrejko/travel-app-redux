import { defaultTrip as trips } from "constants/default-values";
import { filterByDuration } from "helpers/filter-by-duration";
import { filterByLevel } from "helpers/filter-by-level";
import { filterBySearch } from "helpers/filter-by-search";
import { Dispatch, FC, useEffect, useMemo, useState } from "react";
import { Filter } from "components/filter/filter";
import { Trips } from "components/trips/trips";

interface IMainPageProps {
  setIsLogin: Dispatch<boolean>;
}

export const MainPage: FC<IMainPageProps> = ({ setIsLogin }) => {
  const [search, setSearch] = useState("");
  const [duration, setDuration] = useState("");
  const [level, setLevel] = useState("");

  const filteredTrips = useMemo(() => {
    let newTrips = trips;
    if (search) {
      newTrips = filterBySearch(trips, search);
    }
    if (duration) {
      newTrips = filterByDuration(newTrips, duration);
    }
    if (level) {
      newTrips = filterByLevel(newTrips, level);
    }
    return newTrips;
  }, [search, duration, level]);

  useEffect(() => {
    setIsLogin(true);
  }, []);

  return (
    <main>
      <h1 className="visually-hidden">Travel App</h1>
      <Filter
        search={search}
        level={level}
        duration={duration}
        setSearch={setSearch}
        setLevel={setLevel}
        setDuration={setDuration}
      />
      <Trips trips={filteredTrips} />
    </main>
  );
};
