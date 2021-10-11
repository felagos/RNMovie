import { BASE_URL_IMAGE } from "@env";

export const getImagePoster = (poster: string) => `${BASE_URL_IMAGE}${poster}`;