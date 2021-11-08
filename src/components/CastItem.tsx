import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Cast } from "../models/movie-credits.model";
import { getImagePoster } from "../utils/utils";

interface Props {
	cast: Cast;
}

export const CastItem = ({ cast }: Props) => {

	return (
		<View style={styles.container}>
			<Image style={styles.poster}
				source={{ uri: getImagePoster(cast.profile_path) }} />
			<View style={styles.actor_info}>
				<Text style={styles.actor_name}>{cast.name}</Text>
				<Text style={styles.actor_character}>{cast.character}</Text>
			</View>
		</View>
	);

};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor: "#fff",
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.24,
		shadowRadius: 7,
		elevation: 9
	},
	poster: {
		width: 50,
		height: 50,
		borderRadius: 10,
	},
	actor_name: {
		fontSize: 28,
		fontWeight: "bold",
	},
	actor_character: {
		fontSize: 16,
		opacity: 0.7
	},
	actor_info: {
		marginLeft: 10,
	}
});