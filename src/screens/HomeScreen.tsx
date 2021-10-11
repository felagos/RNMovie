import React from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Loader } from '../components/Loader'
import { MoviePoster } from '../components/MoviePoster'
import { useFetch } from '../hooks/useFetch'
import { ResponseMovie } from '../models/movie.model'
import { getMoviesNowPlaying } from '../services/movies.service'

export const HomeScreen = () => {
	const { top } = useSafeAreaInsets()

	const { data, isLoading } = useFetch("moviesNowPlaying", getMoviesNowPlaying)
	if (isLoading) return <Loader />

	const { results: movies } = data

	return (
		<View style={{ marginTop: top }}>
			<MoviePoster movie={movies[0]} />
		</View>
	)
}
