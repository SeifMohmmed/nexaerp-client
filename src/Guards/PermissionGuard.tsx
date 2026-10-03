import type { ReactNode } from "react";
import { useAuthStore } from "../features/auth/services/AuthState";
import AccessDenied from "../pages/AccessDenied/AccessDenied";

type PermissionGuardProps = {
  permission: string;
  children: ReactNode;
};

const PermissionGuard = ({ permission, children }: PermissionGuardProps) => {
  const hasPermission = useAuthStore((state) => state.hasPermission);

  if (!hasPermission(permission)) {
    return <AccessDenied />;
  }

  return <>{children}</>;
};

export default PermissionGuard;

//t
