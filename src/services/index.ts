import axios, { AxiosPromise } from 'axios';

const url = 'https://api.pokemontcg.io/v2';

const axiosInstance = axios.create({
  baseURL: `${url}`,
  headers: {
    Authorization: 'X-Api-Key c7bb352b-46ee-433d-b7ea-b51591f72148',
  },
});

const get = (endpoint: string): AxiosPromise => axiosInstance.get(endpoint);

export const api = {
  get,
};
