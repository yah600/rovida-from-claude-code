export interface Organization {
  id: string;
  name: string;
  type: 'condo' | 'hoa' | 'multi';
  created_at: string;
}

export const mockOrganizations: Organization[] = [
  {
    id: 'org_acme',
    name: 'Acme Condo Corp',
    type: 'condo',
    created_at: '2023-01-15T00:00:00Z'
  }
];
