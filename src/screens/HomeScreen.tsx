import React from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useQuery } from 'react-query'
import { Loader } from '../components/Loader'
import { MoviePoster } from '../components/MoviePoster'
import { useFetch } from '../hooks/useFetch'
import { ResponseMovie } from '../models/movie.model'
import { getMoviesNowPlaying } from '../services/movies.service'

export const HomeScreen = () => {
	const { top } = useSafeAreaInsets()

	const { data, isLoading } = useQuery("moviesNowPlaying", getMoviesNowPlaying)
	const movies = data?.results ?? []

	if (isLoading) return <Loader />

	return (
		<View style={{ marginTop: top }}>
			<MoviePoster movie={movies[0]} />
		</View>
	)
}
