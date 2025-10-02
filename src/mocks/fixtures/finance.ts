export interface Statement {
  id: string;
  unit_id: string;
  period: string;
  amount_due: number;
  status: 'paid' | 'pending' | 'overdue';
}

export interface Bill {
  id: string;
  org_id: string;
  vendor: string;
  amount: number;
  due_date: string;
  status: 'draft' | 'pending' | 'approved' | 'paid';
  category: string;
}

export const mockStatements: Statement[] = [
  { id: 'stmt_1', unit_id: 'unit_a101', period: '2024-01', amount_due: 450, status: 'paid' },
  { id: 'stmt_2', unit_id: 'unit_a101', period: '2024-02', amount_due: 450, status: 'pending' },
  { id: 'stmt_3', unit_id: 'unit_a102', period: '2024-01', amount_due: 380, status: 'paid' }
];

export const mockBills: Bill[] = [
  { id: 'bill_1', org_id: 'org_acme', vendor: 'HVAC Inc', amount: 2500, due_date: '2024-02-15', status: 'approved', category: 'Maintenance' },
  { id: 'bill_2', org_id: 'org_acme', vendor: 'Property Insurance Co', amount: 12000, due_date: '2024-03-01', status: 'pending', category: 'Insurance' }
];
