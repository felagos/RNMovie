import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StackNavigation } from './navigation/StackNavigation'

export const App = () => {
	return (
		<NavigationContainer>
			<StackNavigation />
		</NavigationContainer>
	)
}
