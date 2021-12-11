import React from "react";
import { CarouselMovies } from "../components/CarouselMovies";
import { FlatListMovies } from "../components/FlatListMovies";
import { GradientView } from "../components/GradientView";
import { Layout } from "../components/Layout";
import { Loader } from "../components/Loader";
import { useMovies } from "../hooks/useMovies";

export const HomeScreen = () => {

	const { nowPlaying, popular, upcoming, topRated, isLoading } = useMovies();

	if (isLoading) return <Loader />;

	return (
		<GradientView>
			<Layout>
				<CarouselMovies movies={nowPlaying} />
				<FlatListMovies title="Popular Movies" movies={popular} horizontal />
				<FlatListMovies title="Upcoming Movies" movies={upcoming} horizontal />
				<FlatListMovies title="Top Rated Movies" movies={topRated} horizontal />
			</Layout>
		</GradientView>
	);
};
