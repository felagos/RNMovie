import { BASE_URL_IMAGE } from "@env";
import ImageColors from "react-native-image-colors";
import { IOSImageColors } from "react-native-image-colors/lib/typescript/types";

export const getImagePoster = (poster: string) => `${BASE_URL_IMAGE}${poster}`;

export const getColors = async (uri: string) => {
	const colors = await ImageColors.getColors(getImagePoster(uri), {});

	let primary = null;
	let secondary = null;

	if (colors.platform === "android") {
		primary = colors.dominant;
		secondary = colors.average;
	}
	else {
		primary = (colors as IOSImageColors).primary;
		secondary = (colors as IOSImageColors).primary;
	}

	return { primary, secondary };

}