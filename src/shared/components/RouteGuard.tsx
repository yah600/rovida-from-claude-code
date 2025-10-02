import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useCurrentUser } from '../hooks/useCurrentUser';
import { hasPermission, type Module } from '../permissions';
import type { Role } from '../roles';

interface RouteGuardProps {
  module: Module;
  action?: string;
  roles?: Role[];
  children: ReactNode;
}

export function RouteGuard({ module, action = 'read', roles = [], children }: RouteGuardProps) {
  const user = useCurrentUser();

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  if (roles.length > 0 && !roles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  if (!hasPermission(user.role, module, action)) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}
