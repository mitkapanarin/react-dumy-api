import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'https://dummyapi.io/data/v1/',
  headers: {'app-id': '6419af82fdcaee83938f8c4d'}
});