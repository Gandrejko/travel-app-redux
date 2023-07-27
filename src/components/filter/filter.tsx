import { Dispatch, FC, SetStateAction } from "react";
import { Input } from "components/inputs/input/input";

import styles from "./style.module.css";

interface IFilterProps {
  search: string;
  level: string;
  duration: string;
  setSearch: Dispatch<SetStateAction<string>>;
  setLevel: Dispatch<SetStateAction<string>>;
  setDuration: Dispatch<SetStateAction<string>>;
}

export const Filter: FC<IFilterProps> = ({
  search,
  level,
  duration,
  setSearch,
  setLevel,
  setDuration,
}) => {
  return (
    <section className={styles.tripsFilter}>
      <h2 className="visually-hidden">Trips filter</h2>
      <form
        className={styles.form}
        autoComplete="off"
        onSubmit={(e) => e.preventDefault()}
      >
        <Input
          labelText="Search by name"
          name="search"
          type="search"
          value={search}
          placeholder="search by title"
          labelClassNames={styles.search}
          spanClassNames="visually-hidden"
          inputClassNames={styles.searchInput}
          data-test-id="filter-search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <label className="select">
          <span className="visually-hidden">Search by duration</span>
          <select
            data-test-id="filter-duration"
            name="duration"
            value={duration}
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
            value={level}
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
