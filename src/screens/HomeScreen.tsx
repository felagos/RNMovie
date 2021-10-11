import React from "react";
import { CarouselMovies } from "../components/CarouselMovies";
import { FlatListMovies } from "../components/FlatListMovies";
import { Layout } from "../components/Layout";
import { Loader } from "../components/Loader";
import { useMovies } from "../hooks/useMovies";

export const HomeScreen = () => {

	const { movies, isLoading } = useMovies();

	if (isLoading) return <Loader />;

	return (
		<Layout>
			<CarouselMovies movies={movies} />
			<FlatListMovies title="Popular Movies" movies={movies} horizontal />
		</Layout>
	);
};
