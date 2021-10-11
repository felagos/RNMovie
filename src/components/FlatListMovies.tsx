import React from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import { ItemList } from '../models/item-list.model'
import { Movie } from '../models/movie.model'
import { MoviePoster } from './MoviePoster'

interface Props {
	movies: Movie[],
	horizontal?: boolean
}

export const FlatListMovies = ({ movies, horizontal = false }: Props) => {

	const renderItem = ({ item }: ItemList) => (
		<View style={styles.imagePoster}>
			<MoviePoster movie={item} width={140} height={200} />
		</View>
	);

	const keyGenerator = ({ id }: Movie) => id.toString();

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Popular Movies</Text>
			<FlatList data={movies}
				renderItem={renderItem}
				keyExtractor={keyGenerator}
				horizontal={horizontal}
				showsHorizontalScrollIndicator={false} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		height: 230
	},
	title: {
		fontSize: 20,
		fontWeight: "bold"
	},
	imagePoster: {
		marginHorizontal: 5
	}
})
