import React from 'react';
import { mockUsers } from '@/mocks/fixtures/users';
import { useCurrentUser, setCurrentUser } from '@/shared/hooks/useCurrentUser';
import { ROLE_LABELS } from '@/shared/roles';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function UserSwitcher() {
  const current = useCurrentUser();

  return (
    <Card className="glass-panel">
      <CardHeader>
        <CardTitle>Mock User Switcher</CardTitle>
        <CardDescription>Switch between mock users to test RBAC (dev only)</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {mockUsers.map(u => (
          <Button
            key={u.id}
            variant={current?.id === u.id ? 'default' : 'outline'}
            className="w-full justify-start text-left"
            onClick={() => setCurrentUser(u)}
          >
            <div className="flex flex-col">
              <span className="font-semibold">{u.name}</span>
              <span className="text-xs opacity-70">{ROLE_LABELS[u.role]} · {u.email}</span>
            </div>
          </Button>
        ))}
        <Button variant="destructive" className="w-full" onClick={() => setCurrentUser(null)}>
          Logout
        </Button>
      </CardContent>
    </Card>
  );
}
