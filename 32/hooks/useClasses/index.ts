import { getClasses } from "@/api";
import { useQuery } from "@tanstack/react-query";

export function useClasses() {
    return useQuery({
        queryFn: getClasses,
        queryKey: ["Classes"]
    })
}