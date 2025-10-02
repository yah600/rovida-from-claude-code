"use client";

import { useEffect, useState } from 'react';

type Role = 'admin' | 'owner' | 'tenant' | 'guest';

const useAuth = (requiredRole: Role): boolean => {
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    // Simulate fetching user role
    const fetchUserRole = async () => {
      const userRole = localStorage.getItem('userRole') as Role;
      if (userRole && userRole === requiredRole) {
        setHasAccess(true);
      }
    };

    fetchUserRole();
  }, [requiredRole]);

  return hasAccess;
};

export default useAuth;