import { FC } from 'react';
import { ITripTitle } from '../../interfaces/trip.interface';

export const TripTitle: FC<ITripTitle> = ({ children }) => {
  return (
    <h3 data-test-id="trip-details-title" className="trip-info__title">
      {children}
    </h3>
  );
};
