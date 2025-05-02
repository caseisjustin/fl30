import { getTeachers } from "@/api";
import { useQuery } from "@tanstack/react-query";

export function useTeachers() {
    return useQuery({
        queryFn: getTeachers,
        queryKey: ["Teachers"]
    })
}