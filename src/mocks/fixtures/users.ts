import { ROLES } from '@/shared/roles';
import type { CurrentUser } from '@/shared/hooks/useCurrentUser';

export const mockUsers: CurrentUser[] = [
  {
    id: 'usr_po_1',
    email: 'admin@synergair.com',
    name: 'Platform Admin',
    role: ROLES.PLATFORM_OWNER,
    org_id: '*'
  },
  {
    id: 'usr_csa_1',
    email: 'super@acmecondo.com',
    name: 'Client Super Admin',
    role: ROLES.CLIENT_SUPER_ADMIN,
    org_id: 'org_acme'
  },
  {
    id: 'usr_ca_1',
    email: 'admin@towers.com',
    name: 'Building Administrator',
    role: ROLES.CONDO_ADMIN,
    org_id: 'org_acme',
    building_ids: ['bld_tower_a']
  },
  {
    id: 'usr_pm_1',
    email: 'pm@towers.com',
    name: 'Property Manager',
    role: ROLES.PROPERTY_MANAGER,
    org_id: 'org_acme',
    building_ids: ['bld_tower_a', 'bld_tower_b']
  },
  {
    id: 'usr_acc_1',
    email: 'accountant@acmecondo.com',
    name: 'Finance Lead',
    role: ROLES.ACCOUNTANT,
    org_id: 'org_acme'
  },
  {
    id: 'usr_bm_1',
    email: 'board@towers.com',
    name: 'Board President',
    role: ROLES.BOARD_MEMBER,
    org_id: 'org_acme',
    building_ids: ['bld_tower_a']
  },
  {
    id: 'usr_own_1',
    email: 'owner@example.com',
    name: 'Unit Owner',
    role: ROLES.OWNER,
    org_id: 'org_acme',
    building_ids: ['bld_tower_a'],
    unit_ids: ['unit_a101']
  },
  {
    id: 'usr_ten_1',
    email: 'tenant@example.com',
    name: 'Unit Tenant',
    role: ROLES.TENANT,
    org_id: 'org_acme',
    building_ids: ['bld_tower_a'],
    unit_ids: ['unit_a102']
  },
  {
    id: 'usr_ven_1',
    email: 'vendor@hvac.com',
    name: 'HVAC Vendor',
    role: ROLES.VENDOR,
    org_id: 'org_acme',
    vendor_id: 'ven_hvac'
  },
  {
    id: 'usr_ea_1',
    email: 'oncall@towers.com',
    name: 'Emergency Agent',
    role: ROLES.EMERGENCY_AGENT,
    org_id: 'org_acme',
    building_ids: ['bld_tower_a', 'bld_tower_b']
  },
  {
    id: 'usr_con_1',
    email: 'concierge@towers.com',
    name: 'Concierge Desk',
    role: ROLES.CONCIERGE,
    org_id: 'org_acme',
    building_ids: ['bld_tower_a']
  },
  {
    id: 'usr_tech_1',
    email: 'tech@towers.com',
    name: 'Building Technician',
    role: ROLES.TECHNICIAN,
    org_id: 'org_acme',
    building_ids: ['bld_tower_a']
  }
];
