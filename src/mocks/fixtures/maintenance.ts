export interface WorkOrder {
  id: string;
  building_id: string;
  title: string;
  status: 'open' | 'assigned' | 'in_progress' | 'completed' | 'closed';
  priority: 'low' | 'medium' | 'high';
  assigned_to?: string;
  vendor_id?: string;
  created_at: string;
}

export const mockWorkOrders: WorkOrder[] = [
  { id: 'wo_1', building_id: 'bld_tower_a', title: 'HVAC Annual Service', status: 'assigned', priority: 'medium', vendor_id: 'ven_hvac', created_at: '2024-01-20T09:00:00Z' },
  { id: 'wo_2', building_id: 'bld_tower_a', title: 'Lobby Light Replacement', status: 'completed', priority: 'low', assigned_to: 'usr_tech_1', created_at: '2024-01-15T14:00:00Z' }
];
