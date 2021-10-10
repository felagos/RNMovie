import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { getMoviesNowPlaying } from '../services/movies.service'

export const HomeScreen = () => {

	useEffect(() => {
		getMoviesNowPlaying().then((movies) => {
			console.log(movies)
		})
	}, [])

	return (
		<View>
			<Text></Text>
		</View>
	)
}

