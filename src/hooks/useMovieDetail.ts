import { useQueries } from "react-query";
import { MovieCredits } from "../models/movie-credits.model";
import { MovieDetail } from "../models/movie-detail.model";
import { getMovieCredits, getMovieDetail } from "../services/movies.service";

export const useMovieDetail = (id: number) => {

	const results = useQueries([
		{ queryKey: ["fetchDetail", id], queryFn: () => getMovieDetail(id) },
		{ queryKey: "fetchCredits", queryFn: () => getMovieCredits(id) }
	]);

	const isLoading = results.some(item => item.isLoading);
	const hasError = results.some(item => item.error);
	const [detail, credits] = results.map(item => item.data);

	return {
		detail: detail as MovieDetail,
		credits: credits as MovieCredits,
		isLoading,
		hasError
	};
};