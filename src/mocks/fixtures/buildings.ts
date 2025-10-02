export interface Building {
  id: string;
  org_id: string;
  name: string;
  address: string;
  units_count: number;
}

export const mockBuildings: Building[] = [
  {
    id: 'bld_tower_a',
    org_id: 'org_acme',
    name: 'Tower A',
    address: '123 Main St, City',
    units_count: 120
  },
  {
    id: 'bld_tower_b',
    org_id: 'org_acme',
    name: 'Tower B',
    address: '125 Main St, City',
    units_count: 100
  }
];
