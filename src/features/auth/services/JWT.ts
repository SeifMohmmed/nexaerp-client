import { jwtDecode } from "jwt-decode";

type JwtPayload = {
  sub?: string;
  email?: string;

  role?: string | string[];

  exp?: number;
  iss?: string;
  aud?: string;
};

export const decodeAccessToken = (token: string) => {
  return jwtDecode<JwtPayload>(token);
};

export const getRolesFromToken = (token: string): string[] => {
  const payload = decodeAccessToken(token);

  if (!payload.role) {
    return [];
  }

  if (Array.isArray(payload.role)) {
    return payload.role;
  }

  return [payload.role];
};
