import { format } from 'date-fns';

export interface DocumentActivity {
  id: string;
  documentId: string;
  timestamp: Date;
  user: string;
  action: 'viewed' | 'downloaded' | 'shared' | 'edited' | 'uploaded';
  details: string;
}

export const mockDocumentActivity: DocumentActivity[] = [
  {
    id: 'DA001',
    documentId: 'DOC001',
    timestamp: new Date('2024-03-28T11:00:00Z'),
    user: 'John Doe',
    action: 'viewed',
    details: 'Viewed Annual Budget 2024.',
  },
  {
    id: 'DA002',
    documentId: 'DOC001',
    timestamp: new Date('2024-03-28T11:15:00Z'),
    user: 'John Doe',
    action: 'shared',
    details: 'Shared Annual Budget 2024 with Jane Smith.',
  },
  {
    id: 'DA003',
    documentId: 'DOC002',
    timestamp: new Date('2024-03-27T10:00:00Z'),
    user: 'Property Manager',
    action: 'uploaded',
    details: 'Uploaded Building A Renovation Plan.',
  },
  {
    id: 'DA004',
    documentId: 'DOC001',
    timestamp: new Date('2024-03-26T14:00:00Z'),
    user: 'Jane Smith',
    action: 'downloaded',
    details: 'Downloaded Annual Budget 2024.',
  },
  {
    id: 'DA005',
    documentId: 'DOC003',
    timestamp: new Date('2024-03-25T09:00:00Z'),
    user: 'Admin Staff',
    action: 'edited',
    details: 'Updated Emergency Contact List.',
  },
];