import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigation } from "./navigation/StackNavigation";
import { QueryClient, QueryClientProvider } from "react-query";
import { GradientProvider } from "./context/GradientContext";

export const App = () => {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<NavigationContainer>
				<GradientProvider>
					<StackNavigation />
				</GradientProvider>
			</NavigationContainer>
		</QueryClientProvider>
	);
};
