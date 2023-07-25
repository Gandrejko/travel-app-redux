export interface ITrip {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: number;
  price: number;
  image: string;
  createdAt: string;
}

export interface ITripDuration {
  children: number;
}

export interface ITripLevel {
  children: string;
}

export interface ITripPrice {
  children: number;
}

export interface ITripTitle {
  children: string;
}
