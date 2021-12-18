import React from "react";
import { CarouselMovies } from "../components/CarouselMovies";
import { FlatListMovies } from "../components/FlatListMovies";
import { GradientView } from "../components/GradientView";
import { Layout } from "../components/Layout";
import { Loader } from "../components/Loader";
import { useMovies } from "../hooks/useMovies";
import { getImagePoster } from "../utils/utils";
import ImageColors from 'react-native-image-colors'

export const HomeScreen = () => {

	const { nowPlaying, popular, upcoming, topRated, isLoading } = useMovies();

	const handleChangeCarrousel = async (index: number) => {
		const movie = nowPlaying[index];
		const img = getImagePoster(movie.poster_path);

		const result = await ImageColors.getColors(img, {})

		console.log(result)
	}

	if (isLoading) return <Loader />;

	return (
		<GradientView>
			<Layout>
				<CarouselMovies movies={nowPlaying} handleChange={handleChangeCarrousel} />
				<FlatListMovies title="Popular Movies" movies={popular} horizontal />
				<FlatListMovies title="Upcoming Movies" movies={upcoming} horizontal />
				<FlatListMovies title="Top Rated Movies" movies={topRated} horizontal />
			</Layout>
		</GradientView>
	);
};
