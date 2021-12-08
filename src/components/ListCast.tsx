import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { Cast } from "../models/movie-credits.model";
import { CastItem } from "./CastItem";

interface Props {
	cast: Cast[]
}

export const ListCast = ({ cast }: Props) => (
	<FlatList data={cast}
		renderItem={({ item }) => <CastItem cast={item} />}
		keyExtractor={({ id }) => (Math.random() * id).toString()}
		horizontal
		showsHorizontalScrollIndicator={false}
		style={styles.list}
	/>
)

const styles = StyleSheet.create({
	list: {
		marginTop: 10,
		marginBottom: 10,
		height: 70
	}
});