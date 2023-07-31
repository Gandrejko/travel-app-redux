import { useGetAuthenticatedUserQuery, useGetTripsQuery } from 'api/api';
import { filterByDuration } from "helpers/filter-by-duration";
import { filterByLevel } from "helpers/filter-by-level";
import { filterBySearch } from "helpers/filter-by-search";
import { FC, useMemo, useState } from "react";
import { Filter } from "components/filter/filter";
import { Trips } from "components/trips/trips";
import { useNavigate } from 'react-router-dom';

export const MainPage: FC = () => {
  const navigate = useNavigate();
  const { isError } = useGetAuthenticatedUserQuery('');
  const { data: trips } = useGetTripsQuery();
  const [search, setSearch] = useState("");
  const [duration, setDuration] = useState("");
  const [level, setLevel] = useState("");

  if(isError) {
    navigate('/sign-in');
  }

  const filteredTrips = useMemo(() => {
    let newTrips = trips || [];
    if (search) {
      newTrips = filterBySearch(newTrips, search);
    }
    if (duration) {
      newTrips = filterByDuration(newTrips, duration);
    }
    if (level) {
      newTrips = filterByLevel(newTrips, level);
    }
    return newTrips;
  }, [search, duration, level, trips]);

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
