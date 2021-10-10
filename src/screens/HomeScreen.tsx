import React from 'react'
import { View, Text } from 'react-native'
import { useQuery } from 'react-query'
import { getMoviesNowPlaying } from '../services/movies.service'

export const HomeScreen = () => {

	const { data } = useQuery("moviesNowPlaying", getMoviesNowPlaying)

	return (
		<View>
			<Text></Text>
		</View>
	)
}

