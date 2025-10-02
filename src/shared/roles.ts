export const ROLES = {
  PLATFORM_OWNER: 'platform_owner',
  CLIENT_SUPER_ADMIN: 'client_super_admin',
  CONDO_ADMIN: 'condo_admin',
  PROPERTY_MANAGER: 'property_manager',
  ACCOUNTANT: 'accountant',
  BOARD_MEMBER: 'board_member',
  OWNER: 'owner',
  TENANT: 'tenant',
  VENDOR: 'vendor',
  EMERGENCY_AGENT: 'emergency_agent',
  CONCIERGE: 'concierge',
  TECHNICIAN: 'technician',
  AUDITOR: 'auditor',
  INTEGRATION: 'integration'
} as const;

export type Role = typeof ROLES[keyof typeof ROLES];

export const ROLE_LABELS: Record<Role, string> = {
  [ROLES.PLATFORM_OWNER]: 'Platform Owner',
  [ROLES.CLIENT_SUPER_ADMIN]: 'Client Super-Admin',
  [ROLES.CONDO_ADMIN]: 'Condo Administrator',
  [ROLES.PROPERTY_MANAGER]: 'Property Manager',
  [ROLES.ACCOUNTANT]: 'Accountant',
  [ROLES.BOARD_MEMBER]: 'Board Member',
  [ROLES.OWNER]: 'Owner',
  [ROLES.TENANT]: 'Tenant',
  [ROLES.VENDOR]: 'Vendor / Service Provider',
  [ROLES.EMERGENCY_AGENT]: 'Emergency Agent',
  [ROLES.CONCIERGE]: 'Concierge / Front Desk',
  [ROLES.TECHNICIAN]: 'Building Technician',
  [ROLES.AUDITOR]: 'Read-Only Auditor',
  [ROLES.INTEGRATION]: 'Integration / Bot'
};

export const ACTIONS = {
  R: 'read',
  C: 'create',
  U: 'update',
  D: 'delete',
  X: 'export',
  A: 'approve'
} as const;

export type Action = typeof ACTIONS[keyof typeof ACTIONS];
export type ActionSet = Action[] | 'none';

export const SCOPES = {
  ORG: 'org',
  BUILDING: 'building',
  UNIT: 'unit',
  VENDOR: 'vendor',
  MIXED: 'mixed'
} as const;

export type Scope = typeof SCOPES[keyof typeof SCOPES];
