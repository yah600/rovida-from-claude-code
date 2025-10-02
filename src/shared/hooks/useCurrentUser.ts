import { useMemo } from 'react';
import type { Role } from '../roles';

export interface CurrentUser {
  id: string;
  email: string;
  name: string;
  role: Role;
  org_id: string;
  building_ids?: string[];
  unit_ids?: string[];
  vendor_id?: string;
}

const MOCK_USERS_KEY = 'pasta_mock_current_user';

export function useCurrentUser(): CurrentUser | null {
  const stored = localStorage.getItem(MOCK_USERS_KEY);
  return useMemo(() => {
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return null;
      }
    }
    return null;
  }, [stored]);
}

export function setCurrentUser(user: CurrentUser | null) {
  if (user) {
    localStorage.setItem(MOCK_USERS_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(MOCK_USERS_KEY);
  }
  window.dispatchEvent(new Event('storage'));
}
