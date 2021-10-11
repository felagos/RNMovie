import React from 'react'
import { useQuery } from 'react-query'
import { Layout } from '../components/Layout'
import { Loader } from '../components/Loader'
import { MoviePoster } from '../components/MoviePoster'
import { getMoviesNowPlaying } from '../services/movies.service'

export const HomeScreen = () => {

	const { data, isLoading } = useQuery("moviesNowPlaying", getMoviesNowPlaying)
	const movies = data?.results ?? []

	if (isLoading) return <Loader />

	return (
		<Layout>
			<MoviePoster movie={movies[0]} />
		</Layout>
	)
}
