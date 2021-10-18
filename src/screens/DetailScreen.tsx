import React from "react";
import { View, Text, Image, StyleSheet, Dimensions, ActivityIndicator } from "react-native";
import { StackParamList, StackScreens } from "../models/stack.model";
import { RouteProp, useRoute } from "@react-navigation/core";
import { getImagePoster } from "../utils/utils";
import { ScrollView } from "react-native-gesture-handler";
import { useMovieDetail } from "../hooks/useMovieDetail";
import { MovieDetails } from "../components/MovieDetails";


type StackProps = RouteProp<StackParamList, StackScreens.DETAIL>;

export const DetailScreen = () => {
	const { params: movie } = useRoute<StackProps>();
	const { detail, credits, isLoading } = useMovieDetail(movie.id);

	const renderMovieDetail = () => {
		if (isLoading) return <ActivityIndicator size="large" color="gray" style={styles.activityIndicator} />
		return <MovieDetails detail={detail} cast={credits.cast} />
	}

	return (
		<ScrollView>
			<View style={styles.imageIontainer}>

				<View style={styles.imageBorder}>
					<Image source={{ uri: getImagePoster(movie.poster_path) }} style={styles.posterImage} />
				</View>

			</View>

			<View style={styles.margenContainer}>
				<Text style={styles.subtitle}>{movie.original_title}</Text>
				<Text style={styles.title}>{movie.title}</Text>
			</View>

			<View style={styles.margenContainer}>
				{renderMovieDetail()}
			</View>

		</ScrollView>
	);
};

const styles = StyleSheet.create({
	imageIontainer: {
		width: "100%",
		height: Dimensions.get("screen").height * 0.7,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.24,
		shadowRadius: 7,
		elevation: 9,
	},
	posterImage: {
		flex: 1
	},
	margenContainer: {
		marginHorizontal: 20,
		marginTop: 20
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#000000"
	},
	subtitle: {
		fontSize: 18,
		opacity: 0.8
	},
	imageBorder: {
		flex: 1,
		overflow: "hidden",
		borderBottomLeftRadius: 25,
		borderBottomRightRadius: 25,
	},
	activityIndicator: {
		marginTop: 20,
	}
});