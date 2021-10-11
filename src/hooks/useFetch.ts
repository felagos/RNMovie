import { useQuery, QueryKey } from "react-query";

export const useFetch = <T>(key: QueryKey, fetch: () => Promise<T>) => {
	const { data, isLoading } = useQuery<T>(key, fetch);
	const response = data as T;

	return { data: response, isLoading };
};