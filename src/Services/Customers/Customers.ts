import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "../Auth/AxiosInstance";

// ========================================
// Customer
// ========================================

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

// ========================================
// Customers Response
// ========================================

export type CustomersResponse = {
  items: Customer[];
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  links: unknown;
};

// ========================================
// Customer Query Parameters
// ========================================

export type CustomerQueryParameters = {
  page: number;
  pageSize: number;
  search?: string;
};

// ========================================
// Get Customers
// ========================================

export const useCustomers = (parameters: CustomerQueryParameters) => {
  return useQuery<CustomersResponse, Error>({
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

// ========================================
// Get Customer By Id
// ========================================

export const useCustomer = (id: string | undefined) => {
  return useQuery<Customer, Error>({
    queryKey: ["customer", id],

    queryFn: async () => {
      const response = await AxiosInstance.get<Customer>(`/customers/${id}`);

      return response.data;
    },

    enabled: !!id,
  });
};
