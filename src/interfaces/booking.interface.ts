import { ITrip } from './trip.interface';

export interface IBooking {
  id: string;
  userId: string;
  tripId: string;
  guests: number;
  date: string;
  trip: Pick<ITrip, 'title' | 'duration' | 'price'>;
  totalPrice: number;
  createdAt: string;
}
