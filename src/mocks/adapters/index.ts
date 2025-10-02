import { mockUsers } from '../fixtures/users';
import { mockOrganizations } from '../fixtures/organizations';
import { mockBuildings } from '../fixtures/buildings';

export const adapters = {
  getUsers: () => mockUsers,
  getUserById: (id: string) => mockUsers.find(u => u.id === id),
  getUserByEmail: (email: string) => mockUsers.find(u => u.email === email),
  getOrganizations: () => mockOrganizations,
  getBuildings: (org_id?: string) =>
    org_id ? mockBuildings.filter(b => b.org_id === org_id) : mockBuildings
};
