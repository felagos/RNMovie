import React from "react";
import { CarouselMovies } from "../components/CarouselMovies";
import { Layout } from "../components/Layout";
import { Loader } from "../components/Loader";
import { useMovies } from "../hooks/useMovies";

export const HomeScreen = () => {

	const { movies, isLoading } = useMovies();

	if (isLoading) return <Loader />;

	return (
		<Layout>
			<CarouselMovies movies={movies} />
		</Layout>
	);
};
