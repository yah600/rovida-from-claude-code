import React, { ReactNode } from 'react';
import { useCurrentUser } from '../hooks/useCurrentUser';
import { hasPermission, type Module } from '../permissions';
import type { Role } from '../roles';

interface GuardProps {
  module: Module;
  actions?: string[];
  roles?: Role[];
  children: ReactNode;
  fallback?: ReactNode;
}

export function Guard({ module, actions = [], roles = [], children, fallback = null }: GuardProps) {
  const user = useCurrentUser();

  if (!user) return <>{fallback}</>;

  if (roles.length > 0 && !roles.includes(user.role)) {
    return <>{fallback}</>;
  }

  if (actions.length > 0) {
    const allowed = actions.every(act => hasPermission(user.role, module, act));
    if (!allowed) return <>{fallback}</>;
  }

  return <>{children}</>;
}
