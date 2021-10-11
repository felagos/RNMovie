import React from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { Movie } from "../models/movie.model";
import { MoviePoster } from "./MoviePoster";

interface Props {
	movies: Movie[]
}

interface ItemCarousel {
	item: Movie;
	index: number;
}

export const CarouselMovies = ({ movies }: Props) => {
	const { width } = useWindowDimensions();

	const renderItem = ({ item }: ItemCarousel) => <MoviePoster movie={item} />;

	return (
		<View style={styles.container}>
			<Carousel data={movies} renderItem={renderItem} sliderWidth={width} itemWidth={300} />
		</View>
	);
};


const styles = StyleSheet.create({
	container: {
		height: 440
	}
})

