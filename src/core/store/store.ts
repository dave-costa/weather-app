import { defineStore } from "pinia";
import { AxiosClient } from "../services/drivers/axios";
import { HttpClient } from "../services/http/getCity";

// u;seStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useCitiesStore = defineStore("userCity", {
  state: () => {
    return {
      cities: [],
      error: false,
    };
  },
  getters: {
    getCities(state) {
      return state.cities;
    },
  },
  actions: {
    async setCities() {
      const http = new HttpClient(new AxiosClient());
      const initial = ["luanda", "manaus", "london", "vitoria", "lisboa"];
      initial.map(async (c) => {
        const data = await http.get(c);
        if (data.status == 200) {
          this.cities.push(data.data as never);
        }
      });
    },
    async addCities(city: string) {
      try {
        const http = new HttpClient(new AxiosClient());
        const data = await http.get(city);
        this.cities.push(data.data as never);
        this.error = false;
      } catch (error) {
        this.error = true;
      }
    },
  },
});
