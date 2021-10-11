import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigation } from "./navigation/StackNavigation";
import { QueryClient, QueryClientProvider } from "react-query";

export const App = () => {
	const queryClient = new QueryClient();
	
	return (
		<QueryClientProvider client={queryClient}>
			<NavigationContainer>
				<StackNavigation />
			</NavigationContainer>
		</QueryClientProvider>
	);
};
