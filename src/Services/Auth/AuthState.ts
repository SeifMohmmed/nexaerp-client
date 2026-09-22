import { create } from "zustand";
import { getRolesFromToken } from "./jwt";

type AuthState = {
  accessToken: string | null;
  refreshToken: string | null;

  roles: string[];
  permissions: string[];

  isAuthenticated: boolean;

  setTokens: (tokens: { accessToken: string; refreshToken: string }) => void;

  setPermissions: (permissions: string[]) => void;

  hasRole: (role: string) => boolean;
  hasPermission: (permission: string) => boolean;

  logout: () => void;
};

export const useAuthStore = create<AuthState>((set, get) => ({
  accessToken: localStorage.getItem("accessToken"),
  refreshToken: localStorage.getItem("refreshToken"),

  roles: [],
  permissions: [],

  isAuthenticated: !!localStorage.getItem("accessToken"),

  setTokens: ({ accessToken, refreshToken }) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    const roles = getRolesFromToken(accessToken);

    set({
      accessToken,
      refreshToken,
      roles,
      isAuthenticated: true,
    });
  },

  setPermissions: (permissions) => {
    set({
      permissions,
    });
  },

  hasRole: (role) => {
    return get().roles.includes(role);
  },

  hasPermission: (permission) => {
    return get().permissions.includes(permission);
  },

  logout: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    set({
      accessToken: null,
      refreshToken: null,
      roles: [],
      permissions: [],
      isAuthenticated: false,
    });
  },
}));
