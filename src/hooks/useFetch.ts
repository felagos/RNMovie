import { useQuery } from "react-query"

export const useFetch = <T>(key: string, fetch: () => Promise<T>) => {
	const { data, isLoading } = useQuery<any>(key, fetch);
	const response = data as T

	return { data: response, isLoading };
}