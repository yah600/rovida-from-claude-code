import { useMemo } from 'react';
import { useCurrentUser } from './useCurrentUser';
import { hasPermission, getModuleActions, type Module } from '../permissions';
import { ACTIONS } from '../roles';

export function usePermissions(module: Module) {
  const user = useCurrentUser();

  return useMemo(() => {
    if (!user) {
      return {
        canRead: false,
        canCreate: false,
        canUpdate: false,
        canDelete: false,
        canExport: false,
        canApprove: false,
        actions: []
      };
    }

    const actions = getModuleActions(user.role, module);

    return {
      canRead: actions.includes(ACTIONS.R),
      canCreate: actions.includes(ACTIONS.C),
      canUpdate: actions.includes(ACTIONS.U),
      canDelete: actions.includes(ACTIONS.D),
      canExport: actions.includes(ACTIONS.X),
      canApprove: actions.includes(ACTIONS.A),
      actions
    };
  }, [user, module]);
}
