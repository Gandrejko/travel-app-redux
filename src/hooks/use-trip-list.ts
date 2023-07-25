import { Dispatch } from 'react';
import { useLocalStorage } from "./use-local-storage";
import { defaultTrip } from "../constants/default-values";
import { ITrip } from "../interfaces/trip.interface";

export const useTripList = (): [ITrip[], Dispatch<ITrip[]>] => {
  const [tripList, setTripList] = useLocalStorage<ITrip[]>("trip", defaultTrip);
  return [tripList, setTripList];
};
