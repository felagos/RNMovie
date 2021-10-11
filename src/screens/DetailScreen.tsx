import React from "react";
import { View, Text } from "react-native";
import { StackParamList, StackScreens } from "../models/stack.model";
import { RouteProp, useRoute } from "@react-navigation/core";

type StackProps = RouteProp<StackParamList, StackScreens.DETAIL>;

export const DetailScreen = () => {
	const { params: movie } = useRoute<StackProps>();

	return (
		<View>
			<Text></Text>
		</View>
	);
};

