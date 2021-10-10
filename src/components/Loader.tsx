import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

export const Loader = () => (
	<View style={styles.loader}>
		<ActivityIndicator color="red" size={100} />
	</View>
)

const styles = StyleSheet.create({
	loader: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})
