import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "../Auth/AxiosInstance";

export type CategoryDto = {
  id: string;
  name: string | null;
};

export const useCategories = () => {
  return useQuery<CategoryDto[], Error>({
    queryKey: ["categories"],

    queryFn: async () => {
      const response = await AxiosInstance.get<CategoryDto[]>("/categories");

      return response.data;
    },
  });
};
