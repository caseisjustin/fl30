import { useQuery } from "@tanstack/react-query"
import { getAllProducts } from "../api"

export const useProducts = (params) => {
    return useQuery({
        queryFn: () => getAllProducts(params),
        queryKey: ['products', params],
        enabled: !!params?.category
    })
}