import { useGetTripsQuery } from 'api/api';
import { Loader } from 'components/loader/loader';
import { filterByDuration } from "helpers/filter-by-duration";
import { filterByLevel } from "helpers/filter-by-level";
import { filterBySearch } from "helpers/filter-by-search";
import { useAppSelector } from 'hooks/redux';
import { FC, useMemo, useState } from "react";
import { Filter } from "components/filter/filter";
import { Trips } from "components/trips/trips";
import { useNavigate } from 'react-router-dom';

export const MainPage: FC = () => {
  const navigate = useNavigate();
  const token = useAppSelector(state => state.auth.token);
  if(token === undefined) {
    navigate('/sign-in');
  }
  const { data: trips, isLoading } = useGetTripsQuery();
  const [search, setSearch] = useState("");
  const [duration, setDuration] = useState("");
  const [level, setLevel] = useState("");

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
      {isLoading && <Loader />}
      {trips && <Trips trips={filteredTrips} />}
    </main>
  );
};
