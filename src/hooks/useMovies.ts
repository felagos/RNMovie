import { useQueries } from "react-query";
import { ResponseMovie } from "../models/movie.model";
import { getMoviesNowPlaying, getPopularMovies, getUpcomingMopvies } from "../services/movies.service";

export const useMovies = () => {
	const results = useQueries([
		{ queryKey: "fetchNowPlaying", queryFn: getMoviesNowPlaying },
		{ queryKey: "fetchPpular", queryFn: getPopularMovies },
		{ queryKey: "fetchUpcoming", queryFn: getUpcomingMopvies },
	])

	const isLoading = results.some(item => item.isLoading)
	const hasError = results.some(item => item.error)
	const responses = results.map(item => {
		const data = item.data as ResponseMovie
		return data?.results ?? [];
	})

	const [nowePlaying, popular, upcoming] = responses;

	return { nowePlaying, popular, upcoming, isLoading, hasError };

};