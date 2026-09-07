import { create } from "zustand";

type AuthState = {
  accessToken: string | null;
  refreshToken: string | null;

  setTokens: (tokens: { accessToken: string; refreshToken: string }) => void;

  clearTokens: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: localStorage.getItem("accessToken"),
  refreshToken: localStorage.getItem("refreshToken"),

  setTokens: ({ accessToken, refreshToken }) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    set({
      accessToken,
      refreshToken,
    });
  },

  clearTokens: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    set({
      accessToken: null,
      refreshToken: null,
    });
  },
}));
