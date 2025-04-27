export type itineraryData = {
  destination: string;
  start_date: string;
  end_date: string;
  budget: number;
  intrests: string[];
};
export type TravelPlan = {
  day: string;
  location: {
    longitude: number;
    latitude: number;
  };
  city: string;
  description: string;
};
export interface ItienraryResponse {
  message: TravelPlan[];
  status: Number;
}
export interface LocationData {
  id: number;
  lat: number;
  lng: number;
  title: string;
  description: string;
  show: boolean;
}
