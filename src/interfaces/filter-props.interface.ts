import { IFilterTrips } from "./filter-trips.interface";
export interface IFilterProps {
  search: string;
  level: string;
  duration: string;
  filterTrips: ({ search, level, duration }: IFilterTrips) => void;
}
