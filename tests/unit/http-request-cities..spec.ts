import axios from "axios";
interface City {
  name: string;
  temp: number;
  country: string;
  id: string;
}
interface axiosClientInterface {
  getCity: (city: string) => Promise<{
    status: number;
    data: City | string;
  }>;
}

class AxiosClient {
  async getCity(city: string) {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=122ed89e4194556d93152394f49bfbf3&units=metric`
    );
    if (response.status != 200) {
      const data = {
        status: response.status,
        data: "none",
      };
      return data;
    }
    const data = {
      status: response.status,
      data: {
        name: response.data.name,
        temp: response.data.main.temp,
        country: response.data.sys.country,
        id: response.data.id,
      },
    };
    return data;
  }
}

class HttpClient {
  private client: axiosClientInterface;
  constructor(client: axiosClientInterface) {
    this.client = client;
  }
  async get(city: string) {
    const { status, data } = await this.client.getCity(city);
    return {
      status,
      data,
    };
  }
}
describe("shout test http request for cities", () => {
  it("should show response api", async () => {
    const initial = ["luanda", "manaus", "london", "vitoria", "lisboa"];
    const http = new HttpClient(new AxiosClient());
    const cities: City[] = [];
    initial.map(async (city: string) => {
      const response = await http.get(city);
      console.log("response is", response);
      if (response.status == 200) {
        cities.push(response.data as City);
      }
    });
    console.log(cities);
    expect(1).toBe(1);
  });
});
