export interface Announcement {
  id: string;
  org_id: string;
  building_id?: string;
  title: string;
  body: string;
  created_by: string;
  created_at: string;
  audience: 'all' | 'owners' | 'tenants' | 'board' | 'staff';
}

export const mockAnnouncements: Announcement[] = [
  { id: 'ann_1', org_id: 'org_acme', building_id: 'bld_tower_a', title: 'Pool Maintenance Schedule', body: 'Pool will be closed Feb 1-3 for maintenance.', created_by: 'usr_pm_1', created_at: '2024-01-20T10:00:00Z', audience: 'all' },
  { id: 'ann_2', org_id: 'org_acme', title: 'Board Meeting Reminder', body: 'Next meeting is Feb 17 at 6pm.', created_by: 'usr_bm_1', created_at: '2024-02-01T09:00:00Z', audience: 'owners' }
];
