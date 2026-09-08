import axios from "axios";
import { useAuthStore } from "./AuthState";

export const AxiosInstance = axios.create({
  baseURL: "https://localhost:5001/",
  headers: {
    "Content-Type": "application/json",
  },
});

/*
 * ================================
 * Request Interceptor
 * ================================
 *
 * Attach the current Access Token
 * to every API request.
 */
AxiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = useAuthStore.getState().accessToken;

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

/*
 * ================================
 * Response Interceptor
 * ================================
 *
 * If the Access Token expires and
 * the API returns 401:
 *
 * 1. Get Refresh Token
 * 2. Request a new Access Token
 * 3. Store the new tokens
 * 4. Retry the original request
 */
AxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error) => {
    const originalRequest = error.config;

    /*
     * Only try to refresh when:
     *
     * - Response is 401
     * - Request hasn't already been retried
     * - Request exists
     */
    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const refreshToken = useAuthStore.getState().refreshToken;

        /*
         * No Refresh Token available
         */
        if (!refreshToken) {
          throw new Error("Refresh token is missing.");
        }

        /*
         * Use plain axios here instead of
         * AxiosInstance to avoid triggering
         * the response interceptor again.
         */
        const response = await axios.post(
          "https://localhost:5001/auth/refresh",
          {
            refreshToken,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
          response.data;

        /*
         * Update Zustand + localStorage
         */
        useAuthStore.getState().setTokens({
          accessToken: newAccessToken,
          refreshToken: newRefreshToken,
        });

        /*
         * Update Authorization header
         * of the original failed request.
         */
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        /*
         * Retry original request
         */
        return AxiosInstance(originalRequest);
      } catch (refreshError) {
        /*
         * Refresh failed.
         *
         * Clear authentication state
         * and send user to login.
         */
        useAuthStore.getState().clearTokens();

        window.location.href = "/login";

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);
