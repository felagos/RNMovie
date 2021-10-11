import React from "react";
import { Layout } from "../components/Layout";
import { Loader } from "../components/Loader";
import { MoviePoster } from "../components/MoviePoster";
import { useMovies } from "../hooks/useMovies";

export const HomeScreen = () => {

	const { movies, isLoading } = useMovies();

	if (isLoading) return <Loader />;

	return (
		<Layout>
			<MoviePoster movie={movies[0]} />
		</Layout>
	);
};
