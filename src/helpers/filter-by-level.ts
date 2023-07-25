import { ITrip } from "interfaces/trip.interface";

export const filterByLevel = (trips: ITrip[], level: string) => {
  return trips.filter((trip) => trip.level === level);
};
