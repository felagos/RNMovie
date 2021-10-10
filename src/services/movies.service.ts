import axios from "../axios/axios.custom";
import { ResponseMovie } from "../models/movie.model";

export const getMoviesNowPlaying = () => {
	return axios.get<ResponseMovie>("movie/now_playing")
}