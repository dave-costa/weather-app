import { axiosClientInterface } from "@/core/interfaces";

export class HttpClient {
  private client: axiosClientInterface;
  constructor(client: axiosClientInterface) {
    this.client = client;
  }
  async get(city: string) {
    try {
      const { status, data } = await this.client.getCity(city);
      return {
        status,
        data,
      };
    } catch (error) {
      throw new Error("City not found");
    }
  }
}
