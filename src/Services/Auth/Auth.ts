import { useMutation } from "@tanstack/react-query";
import { AxiosInstance } from "./AxiosInstance";

export type RegisterRequest = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type RegisterResponse = {
  accessToken: string;
  refreshToken: string;
};

export const useRegister = () => {
  return useMutation<RegisterResponse, Error, RegisterRequest>({
    mutationFn: async (data) => {
      const response = await AxiosInstance.post<RegisterResponse>(
        "auth/register",
        data,
      );

      return response.data;
    },
  });
};
