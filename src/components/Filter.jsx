import { useEffect, useState } from "react";

export const Filter = ({ filterTrips }) => {
  const [search, setSearch] = useState("");
  const [duration, setDuration] = useState("");
  const [level, setLevel] = useState("");
  useEffect(() => {
    filterTrips({ search, duration, level });
  }, [search, duration, level]);
  return (
    <section className="trips-filter">
      <h2 className="visually-hidden">Trips filter</h2>
      <form
        className="trips-filter__form"
        autoComplete="off"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="trips-filter__search input">
          <span className="visually-hidden">Search by name</span>
          <input
            data-test-id="filter-search"
            name="search"
            type="search"
            value={search}
            placeholder="search by title"
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        <label className="select">
          <span className="visually-hidden">Search by duration</span>
          <select
            data-test-id="filter-duration"
            name="duration"
            onChange={(e) => setDuration(e.target.value)}
          >
            <option value="">duration</option>
            <option value="0_x_5">&lt; 5 days</option>
            <option value="5_x_10">&lt; 10 days</option>
            <option value="10_x">&ge; 10 days</option>
          </select>
        </label>
        <label className="select">
          <span className="visually-hidden">Search by level</span>
          <select
            data-test-id="filter-level"
            name="level"
            onChange={(e) => setLevel(e.target.value)}
          >
            <option value="">level</option>
            <option value="easy">easy</option>
            <option value="moderate">moderate</option>
            <option value="difficult">difficult</option>
          </select>
        </label>
      </form>
    </section>
  );
};
