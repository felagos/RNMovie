import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
	children: JSX.Element | JSX.Element[]
}

export const Layout = ({ children }: Props) => {
	const { top } = useSafeAreaInsets();

	return (
		<View style={[styles.container, { marginTop: top + 20 }]}>
			<ScrollView>
				{children}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 5
	}
});
