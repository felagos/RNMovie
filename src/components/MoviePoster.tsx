import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Movie } from "../models/movie.model";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList, StackScreens } from "../models/stack.model";
import { getImagePoster } from "../utils/utils";

interface Props {
	movie: Movie,
	width?: number;
	height?: number;
}

type StackProps = StackNavigationProp<StackParamList, StackScreens.HOME>;

export const MoviePoster = ({ movie, width = 300, height = 420 }: Props) => {
	const navigation = useNavigation<StackProps>();

	const goToDetail = () => navigation.navigate(StackScreens.DETAIL, movie);

	return (
		<TouchableOpacity activeOpacity={0.7} style={{ height, width }} onPress={goToDetail}>
			<View style={styles.imageCover}>
				<Image source={{ uri: getImagePoster(movie.poster_path) }} style={styles.image} />
			</View>
		</TouchableOpacity>
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
