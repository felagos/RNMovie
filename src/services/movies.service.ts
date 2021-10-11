import axios from "../axios/axios.interceptor";
import { MovieDetail } from "../models/movie-detail.model";
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

export const getTopRatedMovies = async () => {
	const { data } = await axios.get<ResponseMovie>(`${BASE_URL}/top_rated`);
	return data;
}

export const getDetailMovie = async (id: number) => {
	const { data } = await axios.get<MovieDetail>(`${BASE_URL}/${id}`);
	return data;
}