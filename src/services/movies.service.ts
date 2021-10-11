import axios from "../axios/axios.interceptor";
import { ResponseMovie } from "../models/movie.model";

const BASE_URL = "movie"

export const getMoviesNowPlaying = async () => {
	const { data } = await axios.get<ResponseMovie>(`${BASE_URL}/now_playing`);
	return data;
};

export const getPopularMovies = async () => {
	const { data } = await axios.get<ResponseMovie>(`${BASE_URL}/popular`);
	return data;
}

export const getUpcomingMopvies = async () => {
	const { data } = await axios.get<ResponseMovie>(`${BASE_URL}/upcoming`);
	return data;
}