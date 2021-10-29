import { useQueries } from "react-query";
import { ResponseMovie } from "../models/movie.model";
import { getMoviesNowPlaying, getPopularMovies, getTopRatedMovies, getUpcomingMopvies } from "../services/movies.service";

export const useMovies = () => {
	const results = useQueries([
		{ queryKey: "fetchNowPlaying", queryFn: getMoviesNowPlaying },
		{ queryKey: "fetchPpular", queryFn: getPopularMovies },
		{ queryKey: "fetchUpcoming", queryFn: getUpcomingMopvies },
		{ queryKey: "fetchTopRated", queryFn: getTopRatedMovies },
	])

	const isLoading = results.some(item => item.isLoading)
	const hasError = results.some(item => item.error)
	const [nowPlaying, popular, upcoming, topRated] = results.map(item => {
		const data = item.data as ResponseMovie
		return data?.results ?? [];
	})

	return { nowPlaying, popular, upcoming, topRated, isLoading, hasError };

};