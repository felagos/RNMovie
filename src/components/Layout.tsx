import React from "react"
import { View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

interface Props {
	children: JSX.Element
}

export const Layout = ({ children }: Props) => {
	const { top } = useSafeAreaInsets()

	return (
		<View style={{ marginTop: top }}>
			{children}
		</View>
	)
}
