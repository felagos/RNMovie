import React from "react";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen";
import { DetailScreen } from "../screens/DetailScreen";

enum StackScreens {
	HOME = "HomeScreen",
	DETAIL = "DetailScreen"
}

const Stack = createStackNavigator();

const screenOptions: StackNavigationOptions = {
	headerShown: false,
	cardStyle: {
		backgroundColor: "white"
	}
};

export const StackNavigation = () => {
	
	return(
		<Stack.Navigator screenOptions={screenOptions}>
			<Stack.Screen name={StackScreens.HOME} component={HomeScreen} />
			<Stack.Screen name={StackScreens.DETAIL} component={DetailScreen} />
		</Stack.Navigator>
	);

};