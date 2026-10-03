import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "../../../services/AxiosInstance";

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
// Add Customer Request
// ========================================

export type AddCustomerRequest = {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  taxId: string;
};

// ========================================
// Update Customer Request
// ========================================
export type UpdateCustomerRequest = {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  taxId: string;
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

// ========================================
// Add Customer
// ========================================
export const useAddCustomer = () => {
  return useMutation<Customer, Error, AddCustomerRequest>({
    mutationFn: async (data) => {
      const response = await AxiosInstance.post<Customer>("/customers", data);

      return response.data;
    },
  });
};

// ========================================
// Update Customer
// ========================================
export const useUpdateCustomer = () => {
  return useMutation<void, Error, { id: string; data: UpdateCustomerRequest }>({
    mutationFn: async ({ id, data }) => {
      await AxiosInstance.put(`/customers/${id}`, data);
    },
  });
};

// ========================================
// Delete Customer
// ========================================
export const useDeleteCustomer = () => {
  return useMutation<void, Error, string>({
    mutationFn: async (id) => {
      await AxiosInstance.delete(`/customers/${id}`);
    },
  });
};
