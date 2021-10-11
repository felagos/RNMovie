import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Movie } from "../models/movie.model";
import { BASE_URL_IMAGE } from "@env";

interface Props {
	movie: Movie
}

export const MoviePoster = ({ movie }: Props) => {

	const getImagePoster = (poster: string) => `${BASE_URL_IMAGE}${movie.poster_path}`;

	return (
		<View style={styles.container}>
			<View style={styles.imageCover}>
				<Image source={{ uri: getImagePoster(movie.poster_path) }} style={styles.image} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: 300,
		height: 420
	},
	imageCover: {
		flex: 1,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.24,
		shadowRadius: 3.84,
		elevation: 10
	},
	image: {
		flex: 1,
		borderRadius: 18
	}
});
