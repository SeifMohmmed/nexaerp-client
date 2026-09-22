import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "../Auth/AxiosInstance";

export type Customer = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  taxId: string;
};

export type CustomersResponse = {
  items: Customer[];
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
};

export type CustomerQueryParameters = {
  page: number;
  pageSize: number;
  search?: string;
};

export const useCustomers = (parameters: CustomerQueryParameters) => {
  return useQuery({
    queryKey: ["customers", parameters],

    queryFn: async () => {
      const response = await AxiosInstance.get<CustomersResponse>(
        "/customers",
        {
          params: {
            page: parameters.page,
            pageSize: parameters.pageSize,
            q: parameters.search || undefined,
          },
        },
      );

      return response.data;
    },
  });
};
