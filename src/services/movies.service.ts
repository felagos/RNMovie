import axios from "../axios/axios.custom";
import { ResponseMovie } from "../models/movie.model";

export const getMoviesNowPlaying = async () => {
	const { data } = await axios.get<ResponseMovie>("movie/now_playing");
	return data;
};