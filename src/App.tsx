"use client";

import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';

const Home = () => {
  return <div>Home Page</div>;
};

const AdminPage = () => {
  const hasAccess = useAuth('admin');

  if (!hasAccess) {
    return <div>Unauthorized</div>;
  }

  return <div>Admin Page</div>;
};

const OwnerPage = () => {
  const hasAccess = useAuth('owner');

  if (!hasAccess) {
    return <div>Unauthorized</div>;
  }

  return <div>Owner Page</div>;
};

const TenantPage = () => {
  const hasAccess = useAuth('tenant');

  if (!hasAccess) {
    return <div>Unauthorized</div>;
  }

  return <div>Tenant Page</div>;
};

const GuestPage = () => {
  const hasAccess = useAuth('guest');

  if (!hasAccess) {
    return <div>Unauthorized</div>;
  }

  return <div>Guest Page</div>;
};

const App = () => {
  useEffect(() => {
    localStorage.setItem('userRole', 'admin'); // Set user role for demonstration
  }, []);

  return (
    <div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          {useAuth('admin') && <li><a href="/admin">Admin</a></li>}
          {useAuth('owner') && <li><a href="/owner">Owner</a></li>}
          {useAuth('tenant') && <li><a href="/tenant">Tenant</a></li>}
          {useAuth('guest') && <li><a href="/guest">Guest</a></li>}
        </ul>
      </nav>
      <main>
        <Home />
        <AdminPage />
        <OwnerPage />
        <TenantPage />
        <GuestPage />
      </main>
    </div>
  );
};

export default App;