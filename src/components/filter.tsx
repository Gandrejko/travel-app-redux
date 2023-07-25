import { FC } from 'react';
import { IFilterProps } from "../interfaces/filter-props.interface";

export const Filter: FC<IFilterProps> = ({
  filterTrips,
  search,
  level,
  duration,
}) => {
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
            onChange={(e) => filterTrips({ search: e.target.value })}
          />
        </label>
        <label className="select">
          <span className="visually-hidden">Search by duration</span>
          <select
            data-test-id="filter-duration"
            name="duration"
            value={duration}
            onChange={(e) => filterTrips({ duration: e.target.value })}
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
            value={level}
            data-test-id="filter-level"
            name="level"
            onChange={(e) => filterTrips({ level: e.target.value })}
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
