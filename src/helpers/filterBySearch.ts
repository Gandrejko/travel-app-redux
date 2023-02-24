import { ITrip } from "../interfaces/trip.interface";

export const filterBySearch = (trips: ITrip[], search: string) => {
  return trips.filter(
    (trip) => trip.title.toLowerCase().search(search.toLowerCase()) > -1 // but contains is better)
  );
};
