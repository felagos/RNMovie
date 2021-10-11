import React from "react";
import { CarouselMovies } from "../components/CarouselMovies";
import { FlatListMovies } from "../components/FlatListMovies";
import { Layout } from "../components/Layout";
import { Loader } from "../components/Loader";
import { useMovies } from "../hooks/useMovies";

export const HomeScreen = () => {

	const { nowePlaying, popular, upcoming, topRated, isLoading } = useMovies();

	if (isLoading) return <Loader />;

	return (
		<Layout>
			<CarouselMovies movies={nowePlaying} />
			<FlatListMovies title="Popular Movies" movies={popular} horizontal />
			<FlatListMovies title="Upcoming Movies" movies={upcoming} horizontal />
			<FlatListMovies title="Top Rated Movies" movies={topRated} horizontal />
		</Layout>
	);
};
