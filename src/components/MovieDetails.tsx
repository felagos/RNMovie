import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Cast } from "../models/movie-credits.model";
import { MovieDetail } from "../models/movie-detail.model";

interface Props {
	detail: MovieDetail;
	cast: Cast[];
}

export const MovieDetails = ({ detail, cast }: Props) => {

	const renderGenres = () => (
		<Text style={styles.genreContainer}>
			- {detail.genres.map(genre => genre.name).join(", ")}
		</Text>
	)
	
	return (
		<>
			<View style={styles.container}>
				<View style={styles.rowContainer}>
					<Icon name="star-outline" color="grey" size={16} />
					<Text>{detail.vote_average}</Text>
					{renderGenres()}
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 20
	},
	rowContainer: {
		flexDirection: "row",
	},
	genreContainer: {
		marginLeft: 5
	}
})