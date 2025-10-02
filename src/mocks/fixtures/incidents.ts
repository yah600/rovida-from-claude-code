export interface Incident {
  id: string;
  building_id: string;
  unit_id?: string;
  title: string;
  description: string;
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  created_by: string;
  created_at: string;
  category: string;
}

export const mockIncidents: Incident[] = [
  { id: 'inc_1', building_id: 'bld_tower_a', unit_id: 'unit_a101', title: 'Leaking faucet', description: 'Kitchen faucet dripping', status: 'open', priority: 'medium', created_by: 'usr_own_1', created_at: '2024-01-25T10:00:00Z', category: 'Plumbing' },
  { id: 'inc_2', building_id: 'bld_tower_a', title: 'Elevator malfunction', description: 'Elevator stuck on floor 5', status: 'in_progress', priority: 'urgent', created_by: 'usr_con_1', created_at: '2024-01-26T08:30:00Z', category: 'Emergency' }
];
