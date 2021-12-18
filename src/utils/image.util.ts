import { BASE_URL_IMAGE } from "@env";
import ImageColors from "react-native-image-colors";

export const getImagePoster = (poster: string) => `${BASE_URL_IMAGE}${poster}`;

export const getColors = async (uri: string) => {
	return await ImageColors.getColors(getImagePoster(uri), {});
}