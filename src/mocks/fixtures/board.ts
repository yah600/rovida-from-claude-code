export interface Meeting {
  id: string;
  org_id: string;
  title: string;
  scheduled_at: string;
  status: 'scheduled' | 'in_progress' | 'completed';
  attendees: string[];
}

export interface Vote {
  id: string;
  meeting_id?: string;
  title: string;
  description: string;
  status: 'open' | 'closed';
  ends_at: string;
  yes_count: number;
  no_count: number;
}

export const mockMeetings: Meeting[] = [
  { id: 'mtg_1', org_id: 'org_acme', title: 'January Board Meeting', scheduled_at: '2024-01-20T18:00:00Z', status: 'completed', attendees: ['usr_bm_1', 'usr_csa_1'] },
  { id: 'mtg_2', org_id: 'org_acme', title: 'February Board Meeting', scheduled_at: '2024-02-17T18:00:00Z', status: 'scheduled', attendees: ['usr_bm_1'] }
];

export const mockVotes: Vote[] = [
  { id: 'vote_1', meeting_id: 'mtg_1', title: 'Approve 2024 Budget', description: 'Vote to approve annual budget', status: 'closed', ends_at: '2024-01-27T23:59:00Z', yes_count: 8, no_count: 1 }
];
