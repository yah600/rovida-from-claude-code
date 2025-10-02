export interface Document {
  id: string;
  org_id: string;
  building_id?: string;
  title: string;
  category: 'insurance' | 'financial' | 'legal' | 'board' | 'maintenance' | 'tenant' | 'other';
  uploaded_by: string;
  uploaded_at: string;
  size_kb: number;
  shared_with: 'public' | 'board' | 'owners' | 'staff' | 'private';
}

export const mockDocuments: Document[] = [
  { id: 'doc_1', org_id: 'org_acme', building_id: 'bld_tower_a', title: 'Insurance Policy 2024.pdf', category: 'insurance', uploaded_by: 'usr_ca_1', uploaded_at: '2024-01-10T10:00:00Z', size_kb: 2400, shared_with: 'board' },
  { id: 'doc_2', org_id: 'org_acme', title: 'Annual Budget 2024.xlsx', category: 'financial', uploaded_by: 'usr_acc_1', uploaded_at: '2024-01-05T09:00:00Z', size_kb: 180, shared_with: 'board' },
  { id: 'doc_3', org_id: 'org_acme', building_id: 'bld_tower_a', title: 'Board Meeting Minutes Jan 2024.pdf', category: 'board', uploaded_by: 'usr_bm_1', uploaded_at: '2024-01-20T14:30:00Z', size_kb: 120, shared_with: 'public' },
  { id: 'doc_4', org_id: 'org_acme', building_id: 'bld_tower_a', title: 'Elevator Maintenance Contract.pdf', category: 'maintenance', uploaded_by: 'usr_pm_1', uploaded_at: '2023-11-15T11:00:00Z', size_kb: 340, shared_with: 'staff' }
];
