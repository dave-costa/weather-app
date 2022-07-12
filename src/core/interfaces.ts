export interface City {
  name: string;
  temp: number;
  country: string;
  id: string;
}
export interface axiosClientInterface {
  getCity: (city: string) => Promise<{
    status: number;
    data: City | string;
  }>;
}
