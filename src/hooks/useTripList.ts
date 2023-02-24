import { useLocalStorage } from "./useLocalStorage";
import { defaultTrip } from "../constants/default-values";
import { ITrip } from "../interfaces/trip.interface";

export const useTripList = (): [ITrip[], React.Dispatch<ITrip[]>] => {
  const [tripList, setTripList] = useLocalStorage<ITrip[]>("trip", defaultTrip);
  return [tripList, setTripList];
};
