import React from "react";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen";
import { DetailScreen } from "../screens/DetailScreen";
import { StackParamList, StackScreens } from "../models/stack.model";

const Stack = createStackNavigator<StackParamList>();

const screenOptions: StackNavigationOptions = {
	headerShown: false
};

export const StackNavigation = () => {
	
	return(
		<Stack.Navigator screenOptions={screenOptions}>
			<Stack.Screen name={StackScreens.HOME} component={HomeScreen} />
			<Stack.Screen name={StackScreens.DETAIL} component={DetailScreen} />
		</Stack.Navigator>
	);

};