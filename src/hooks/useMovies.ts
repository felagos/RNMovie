import { useQuery } from "react-query";
import { getMoviesNowPlaying } from "../services/movies.service";

export const useMovies = () => {
	const { data, isLoading } = useQuery("fetMovies", getMoviesNowPlaying);
	const movies = data?.results ?? [];

	return { movies, isLoading };
};