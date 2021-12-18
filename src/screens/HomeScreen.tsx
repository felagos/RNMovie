import React, { useContext, useEffect } from "react";
import { CarouselMovies } from "../components/CarouselMovies";
import { FlatListMovies } from "../components/FlatListMovies";
import { GradientLayout } from "../components/GradientLayout";
import { Layout } from "../components/Layout";
import { Loader } from "../components/Loader";
import { GradientContext } from "../context/GradientContext";
import { useMovies } from "../hooks/useMovies";
import { getColors } from "../utils/image.util";

export const HomeScreen = () => {
	const { nowPlaying, popular, upcoming, topRated, isLoading } = useMovies();
	const { setMainColors } = useContext(GradientContext);

	useEffect(() => {
		if (nowPlaying.length > 0) {
			getPosterColors();
		}
	}, [nowPlaying])

	const handleChangeCarrousel = (index: number) => {
		getPosterColors(index)
	}

	const getPosterColors = async (index: number = 0) => {
		const movie = nowPlaying[index];
		const { primary = "white", secondary = "white" } = await getColors(movie.poster_path);

		setMainColors({ primary, secondary });
	}

	if (isLoading) return <Loader />;

	return (
		<GradientLayout>
			<Layout>
				<CarouselMovies movies={nowPlaying} handleChange={handleChangeCarrousel} />
				<FlatListMovies title="Popular Movies" movies={popular} horizontal />
				<FlatListMovies title="Upcoming Movies" movies={upcoming} horizontal />
				<FlatListMovies title="Top Rated Movies" movies={topRated} horizontal />
			</Layout>
		</GradientLayout>
	);
};
