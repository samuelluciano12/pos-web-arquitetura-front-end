import axios from "axios";

const http = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  timeout: 10000
});

export const getCharacters = async (page) => {
  const response = await http.get(`/character?page=${page}`);
  return response.data;
};

export const getCharacter = async (id) => {
  const response = await http.get(`/character/${id}`);
  return response.data;
};

export default http;

export const getEpisode = async (id) => {
  const response = await http.get(`/episode/${id}`);
  return response.data;
};

export const getEpisodes = async (page) => {
  const response = await http.get(`/episode?page=${page}`);
  return response.data;
};

export const getLocations = async (page) => {
  const response = await http.get(`/location?page=${page}`);
  return response.data;
};

export const getLocation = async (id) => {
  const response = await http.get(`/location/${id}`);
  return response.data;
};

export const CharEpisode = async (url) => {
  const response = await axios.create(url);
  return response.data;
};
