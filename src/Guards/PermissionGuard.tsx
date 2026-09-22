import type { ReactNode } from "react";
import { useAuthStore } from "../Services/Auth/AuthState";
import AccessDenied from "../features/pages/AccessDenied/AccessDenied";

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
