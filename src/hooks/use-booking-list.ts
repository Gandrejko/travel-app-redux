import { Dispatch } from "react";
import { useLocalStorage } from "./use-local-storage";
import { defaultBooking } from "../constants/default-values";
import { IBooking } from "../interfaces/booking.interface";

export const useBookingList = (): [IBooking[], Dispatch<IBooking[]>] => {
  const [bookingList, setBookingList] = useLocalStorage<IBooking[]>(
    "booking",
    defaultBooking
  );
  return [bookingList, setBookingList];
};
