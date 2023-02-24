import { useLocalStorage } from "./useLocalStorage";
import { defaultBooking } from "../constants/default-values";
import { IBooking } from "../interfaces/booking.interface";

export const useBookingList = (): [IBooking[], React.Dispatch<IBooking[]>] => {
  const [bookingList, setBookingList] = useLocalStorage<IBooking[]>(
    "booking",
    defaultBooking
  );
  return [bookingList, setBookingList];
};
