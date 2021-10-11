import { Movie } from "./movie.model";

export enum StackScreens {
	HOME = "HomeScreen",
	DETAIL = "DetailScreen"
}

export type StackParamList = {
	HomeScreen: undefined;
	DetailScreen: Movie;
}