import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Cast } from "../models/movie-credits.model";
import { MovieDetail } from "../models/movie-detail.model";
import { formatCurrency } from "../utils/currency.util";
import { ListCast } from "./ListCast";

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
		<View>
			<View style={styles.container}>
				<View style={styles.rowContainer}>
					<Icon name="star-outline" color="grey" size={16} />
					<Text style={styles.stars}>{detail.vote_average}</Text>
					{renderGenres()}
				</View>
			</View>

			<View style={styles.section_detail}>
				<Text style={styles.title}>Historia</Text>
				<Text style={styles.detail}>{detail.overview}</Text>
			</View>

			<View style={styles.section_detail}>
				<Text style={styles.title}>Presupuesto</Text>
				<Text style={styles.detail}>{formatCurrency(detail.budget)}</Text>
			</View>

			<View style={styles.section_detail}>
				<Text style={styles.title}>Actores</Text>
				<ListCast cast={cast} />
			</View>

		</View>
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
	},
	stars: {
		marginLeft: 5
	},
	section_detail: {
		marginTop: 10,
	},
	title: {
		fontSize: 23,
		fontWeight: "bold",
	},
	detail: {
		marginTop: 10,
		fontSize: 16,
	}
})