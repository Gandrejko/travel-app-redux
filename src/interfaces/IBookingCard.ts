import { IBooking } from "./booking.interface";

export interface IBookingCard extends IBooking {
  onClick: (id: string) => void;
}
