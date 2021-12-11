import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

interface Props {
	children: JSX.Element | JSX.Element[];
}

export const GradientView = ({ children }: Props) => {
	return (
		<View style={styles.container}>
			<LinearGradient
				colors={['#084F6A', '#3b5998', 'white']}
				style={styles.linearGradient}
				start={{ x: 0.1, y: 0.1 }}
				end={{ x: 0.5, y: 0.7 }}>
				{children}
			</LinearGradient>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	linearGradient: {
		...StyleSheet.absoluteFillObject,
	}
});