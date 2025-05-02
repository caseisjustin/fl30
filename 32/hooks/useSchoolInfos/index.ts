import { getSchoolInfos } from "@/api";
import { useQuery } from "@tanstack/react-query";

export function useSchoolInfos() {
    return useQuery({
        queryFn: getSchoolInfos,
        queryKey: ["SchoolInfos"]
    })
}