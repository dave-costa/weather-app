import axios from "axios";
export class AxiosClient {
  async getCity(city: string) {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=122ed89e4194556d93152394f49bfbf3&units=metric`
      );
      const data_api = await response.data;
      const data = {
        status: response.status,
        data: {
          name: data_api.name,
          temp: data_api.main.temp,
          country: data_api.sys.country,
          id: data_api.id,
        },
      };
      return data;
    } catch (error) {
      throw new Error("City not found.");
    }
  }
}
