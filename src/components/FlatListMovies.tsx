import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { ItemList } from "../models/item-list.model";
import { Movie } from "../models/movie.model";
import { MoviePoster } from "./MoviePoster";

interface Props {
	title: string;
	movies: Movie[],
	horizontal?: boolean
}

export const FlatListMovies = ({ title, movies, horizontal = false }: Props) => {

	const renderItem = ({ item }: ItemList) => (
		<View style={styles.imagePoster}>
			<MoviePoster movie={item} width={140} height={200} />
		</View>
	);

	const keyGenerator = ({ id }: Movie) => id.toString();

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<FlatList data={movies}
				renderItem={renderItem}
				keyExtractor={keyGenerator}
				horizontal={horizontal}
				showsHorizontalScrollIndicator={false} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 260,
		marginTop: 10
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		marginLeft: 10,
		marginBottom: 5
	},
	imagePoster: {
		marginHorizontal: 5
	}
});
