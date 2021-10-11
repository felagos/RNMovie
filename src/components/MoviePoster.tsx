import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Movie } from "../models/movie.model";
import { BASE_URL_IMAGE } from "@env";

interface Props {
	movie: Movie,
	width?: number;
	height?: number;
}

export const MoviePoster = ({ movie, width = 300, height = 420 }: Props) => {

	const getImagePoster = () => `${BASE_URL_IMAGE}${movie.poster_path}`;

	return (
		<View style={{ height, width }}>
			<View style={styles.imageCover}>
				<Image source={{ uri: getImagePoster() }} style={styles.image} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
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
