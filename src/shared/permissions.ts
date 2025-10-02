import { ROLES, ACTIONS, SCOPES, type Role, type ActionSet, type Scope } from './roles';

const { R, C, U, D, X, A } = ACTIONS;
const {
  PLATFORM_OWNER: PO,
  CLIENT_SUPER_ADMIN: CSA,
  CONDO_ADMIN: CA,
  PROPERTY_MANAGER: PM,
  ACCOUNTANT: ACC,
  BOARD_MEMBER: BM,
  OWNER: OWN,
  TENANT: TEN,
  VENDOR: VEN,
  EMERGENCY_AGENT: EA,
  CONCIERGE: CON,
  TECHNICIAN: TECH,
  AUDITOR: AUD,
  INTEGRATION: INT
} = ROLES;

export const MODULES = {
  DASHBOARD: 'dashboard',
  INCIDENTS: 'incidents',
  EMERGENCY: 'emergency',
  MAINTENANCE: 'maintenance',
  MAINTENANCE_AGENDA: 'maintenance_agenda',
  STATEMENTS: 'statements',
  BILLS: 'bills',
  DEPOSITS: 'deposits',
  LEDGER: 'ledger',
  LATE_FEES: 'late_fees',
  RECONCILIATION: 'reconciliation',
  FINANCE_REPORTS: 'finance_reports',
  BOARD: 'board',
  MEETINGS: 'meetings',
  VOTES: 'votes',
  DOCUMENTS: 'documents',
  COMMS: 'comms',
  INTEGRATIONS: 'integrations',
  ANALYTICS: 'analytics',
  SETTINGS_ORG: 'settings_org',
  SETTINGS_BUILDINGS: 'settings_buildings',
  SETTINGS_USERS: 'settings_users',
  SETTINGS_AUDIT: 'settings_audit',
  PROFILE: 'profile',
  RULES: 'rules',
  VIOLATIONS: 'violations',
  INSURANCE: 'insurance',
  AMENITIES: 'amenities',
  TENANCY: 'tenancy',
  ARCHITECTURAL: 'architectural',
  PURCHASE_ORDERS: 'purchase_orders',
  AUTOMATIONS: 'automations'
} as const;

export type Module = typeof MODULES[keyof typeof MODULES];

export const permissions: Record<Module, Record<Role, ActionSet>> = {
  [MODULES.DASHBOARD]: {
    [PO]: [R, X], [CSA]: [R, X], [CA]: [R], [PM]: [R],
    [ACC]: [R], [BM]: [R], [OWN]: [R], [TEN]: [R],
    [VEN]: [R], [EA]: [R], [CON]: [R], [TECH]: [R],
    [AUD]: [R], [INT]: 'none'
  },
  [MODULES.INCIDENTS]: {
    [PO]: [R, C, U, D, A], [CSA]: [R, C, U, D, A], [CA]: [R, C, U, D, A], [PM]: [R, C, U, D, A],
    [ACC]: [R], [BM]: [R], [OWN]: [R, C, U], [TEN]: [R, C, U],
    [VEN]: [R], [EA]: [R, A], [CON]: [R, C, U], [TECH]: [R, C, U],
    [AUD]: 'none', [INT]: 'none'
  },
  [MODULES.EMERGENCY]: {
    [PO]: [R, A], [CSA]: [R, A], [CA]: [R, A], [PM]: [R, A],
    [ACC]: 'none', [BM]: 'none', [OWN]: 'none', [TEN]: 'none',
    [VEN]: 'none', [EA]: [R, A], [CON]: [R], [TECH]: 'none',
    [AUD]: 'none', [INT]: 'none'
  },
  [MODULES.MAINTENANCE]: {
    [PO]: [R, C, U, D, A], [CSA]: [R, C, U, D, A], [CA]: [R, C, U, D, A], [PM]: [R, C, U, D, A],
    [ACC]: [R], [BM]: [R], [OWN]: [R], [TEN]: [R],
    [VEN]: [R, U], [EA]: [R], [CON]: [R, C], [TECH]: [R, C, U],
    [AUD]: 'none', [INT]: 'none'
  },
  [MODULES.MAINTENANCE_AGENDA]: {
    [PO]: [R, C, U, D, A], [CSA]: [R, C, U, D, A], [CA]: [R, C, U, D, A], [PM]: [R, C, U, D, A],
    [ACC]: 'none', [BM]: 'none', [OWN]: 'none', [TEN]: 'none',
    [VEN]: 'none', [EA]: 'none', [CON]: 'none', [TECH]: 'none',
    [AUD]: 'none', [INT]: 'none'
  },
  [MODULES.STATEMENTS]: {
    [PO]: [R, X], [CSA]: [R, X], [CA]: [R], [PM]: [R],
    [ACC]: [R, X], [BM]: 'none', [OWN]: [R, X], [TEN]: [R, X],
    [VEN]: 'none', [EA]: 'none', [CON]: 'none', [TECH]: 'none',
    [AUD]: [R, X], [INT]: 'none'
  },
  [MODULES.BILLS]: {
    [PO]: [R, C, U, D, X, A], [CSA]: [R, A], [CA]: [R], [PM]: [R],
    [ACC]: [R, C, U, D, X, A], [BM]: 'none', [OWN]: 'none', [TEN]: 'none',
    [VEN]: [R], [EA]: 'none', [CON]: 'none', [TECH]: 'none',
    [AUD]: [R, X], [INT]: 'none'
  },
  [MODULES.DEPOSITS]: {
    [PO]: [R, C, U, D, X], [CSA]: [R, X], [CA]: [R], [PM]: [R],
    [ACC]: [R, C, U, D, X], [BM]: 'none', [OWN]: 'none', [TEN]: 'none',
    [VEN]: 'none', [EA]: 'none', [CON]: 'none', [TECH]: 'none',
    [AUD]: [R, X], [INT]: 'none'
  },
  [MODULES.LEDGER]: {
    [PO]: [R, X], [CSA]: [R, X], [CA]: 'none', [PM]: 'none',
    [ACC]: [R, X], [BM]: [R], [OWN]: 'none', [TEN]: 'none',
    [VEN]: 'none', [EA]: 'none', [CON]: 'none', [TECH]: 'none',
    [AUD]: [R, X], [INT]: 'none'
  },
  [MODULES.LATE_FEES]: {
    [PO]: [R, C, U, A], [CSA]: [R, A], [CA]: 'none', [PM]: 'none',
    [ACC]: [R, C, U, A], [BM]: 'none', [OWN]: 'none', [TEN]: 'none',
    [VEN]: 'none', [EA]: 'none', [CON]: 'none', [TECH]: 'none',
    [AUD]: 'none', [INT]: 'none'
  },
  [MODULES.RECONCILIATION]: {
    [PO]: [R, X], [CSA]: [R, X], [CA]: 'none', [PM]: 'none',
    [ACC]: [R, C, U, X], [BM]: 'none', [OWN]: 'none', [TEN]: 'none',
    [VEN]: 'none', [EA]: 'none', [CON]: 'none', [TECH]: 'none',
    [AUD]: 'none', [INT]: 'none'
  },
  [MODULES.FINANCE_REPORTS]: {
    [PO]: [R, X], [CSA]: [R, X], [CA]: [R], [PM]: [R],
    [ACC]: [R, X], [BM]: [R, X], [OWN]: 'none', [TEN]: 'none',
    [VEN]: 'none', [EA]: 'none', [CON]: 'none', [TECH]: 'none',
    [AUD]: [R, X], [INT]: 'none'
  },
  [MODULES.BOARD]: {
    [PO]: [R, C, U, D, A], [CSA]: [R, C, U, D, A], [CA]: [R, C, U], [PM]: [R, C, U],
    [ACC]: [R], [BM]: [R, C, U, A], [OWN]: [R], [TEN]: 'none',
    [VEN]: 'none', [EA]: 'none', [CON]: 'none', [TECH]: 'none',
    [AUD]: 'none', [INT]: 'none'
  },
  [MODULES.MEETINGS]: {
    [PO]: [R, C, U, D, A], [CSA]: [R, C, U, D, A], [CA]: [R, C, U], [PM]: [R, C, U],
    [ACC]: [R], [BM]: [R, C, U, A], [OWN]: [R], [TEN]: 'none',
    [VEN]: 'none', [EA]: 'none', [CON]: 'none', [TECH]: 'none',
    [AUD]: 'none', [INT]: 'none'
  },
  [MODULES.VOTES]: {
    [PO]: [R, C, U, D, A], [CSA]: [R, C, U, D, A], [CA]: [R, C, U], [PM]: [R, C, U],
    [ACC]: 'none', [BM]: [R, C, U, A], [OWN]: [R, U], [TEN]: 'none',
    [VEN]: 'none', [EA]: 'none', [CON]: 'none', [TECH]: 'none',
    [AUD]: 'none', [INT]: 'none'
  },
  [MODULES.DOCUMENTS]: {
    [PO]: [R, C, U, D, X], [CSA]: [R, C, U, D, X], [CA]: [R, C, U, D, X], [PM]: [R, C, U, D, X],
    [ACC]: [R, C, X], [BM]: [R, X], [OWN]: [R, X], [TEN]: [R, X],
    [VEN]: [R], [EA]: [R], [CON]: [R], [TECH]: [R],
    [AUD]: [R, X], [INT]: 'none'
  },
  [MODULES.COMMS]: {
    [PO]: [R, C, U, D, A], [CSA]: [R, C, U, D, A], [CA]: [R, C, U, D, A], [PM]: [R, C, U, D, A],
    [ACC]: [R, C], [BM]: [R], [OWN]: [R], [TEN]: [R],
    [VEN]: [R], [EA]: [R], [CON]: [R], [TECH]: [R],
    [AUD]: 'none', [INT]: 'none'
  },
  [MODULES.INTEGRATIONS]: {
    [PO]: [R, C, U, D, A], [CSA]: [R, C, U, D, A], [CA]: [R], [PM]: [R],
    [ACC]: 'none', [BM]: 'none', [OWN]: 'none', [TEN]: 'none',
    [VEN]: 'none', [EA]: 'none', [CON]: 'none', [TECH]: 'none',
    [AUD]: 'none', [INT]: 'none'
  },
  [MODULES.ANALYTICS]: {
    [PO]: [R, X], [CSA]: [R, X], [CA]: [R], [PM]: [R],
    [ACC]: [R, X], [BM]: [R], [OWN]: 'none', [TEN]: 'none',
    [VEN]: 'none', [EA]: 'none', [CON]: 'none', [TECH]: 'none',
    [AUD]: 'none', [INT]: 'none'
  },
  [MODULES.SETTINGS_ORG]: {
    [PO]: [R, C, U, D], [CSA]: [R, U], [CA]: 'none', [PM]: 'none',
    [ACC]: 'none', [BM]: 'none', [OWN]: 'none', [TEN]: 'none',
    [VEN]: 'none', [EA]: 'none', [CON]: 'none', [TECH]: 'none',
    [AUD]: 'none', [INT]: 'none'
  },
  [MODULES.SETTINGS_BUILDINGS]: {
    [PO]: [R, C, U, D], [CSA]: [R, C, U, D], [CA]: [R, U], [PM]: [R, U],
    [ACC]: 'none', [BM]: 'none', [OWN]: 'none', [TEN]: 'none',
    [VEN]: 'none', [EA]: 'none', [CON]: 'none', [TECH]: 'none',
    [AUD]: 'none', [INT]: 'none'
  },
  [MODULES.SETTINGS_USERS]: {
    [PO]: [R, C, U, D], [CSA]: [R, C, U, D], [CA]: [R, C, U], [PM]: [R],
    [ACC]: 'none', [BM]: 'none', [OWN]: 'none', [TEN]: 'none',
    [VEN]: 'none', [EA]: 'none', [CON]: 'none', [TECH]: 'none',
    [AUD]: 'none', [INT]: 'none'
  },
  [MODULES.SETTINGS_AUDIT]: {
    [PO]: [R, X], [CSA]: [R, X], [CA]: 'none', [PM]: 'none',
    [ACC]: 'none', [BM]: 'none', [OWN]: 'none', [TEN]: 'none',
    [VEN]: 'none', [EA]: 'none', [CON]: 'none', [TECH]: 'none',
    [AUD]: [R, X], [INT]: 'none'
  },
  [MODULES.PROFILE]: {
    [PO]: [R, U], [CSA]: [R, U], [CA]: [R, U], [PM]: [R, U],
    [ACC]: [R, U], [BM]: [R, U], [OWN]: [R, U], [TEN]: [R, U],
    [VEN]: [R, U], [EA]: [R, U], [CON]: [R, U], [TECH]: [R, U],
    [AUD]: [R, U], [INT]: 'none'
  },
  [MODULES.RULES]: {
    [PO]: [R, C, U, D], [CSA]: [R, C, U, D], [CA]: [R, C, U, D], [PM]: [R, C, U, D],
    [ACC]: 'none', [BM]: [R], [OWN]: [R], [TEN]: [R],
    [VEN]: 'none', [EA]: 'none', [CON]: [R], [TECH]: [R],
    [AUD]: 'none', [INT]: 'none'
  },
  [MODULES.VIOLATIONS]: {
    [PO]: [R, C, U, D, A], [CSA]: [R, C, U, D, A], [CA]: [R, C, U, D, A], [PM]: [R, C, U, D, A],
    [ACC]: 'none', [BM]: [R], [OWN]: [R, U], [TEN]: [R, U],
    [VEN]: 'none', [EA]: 'none', [CON]: [R, C], [TECH]: 'none',
    [AUD]: 'none', [INT]: 'none'
  },
  [MODULES.INSURANCE]: {
    [PO]: [R, C, U, D, X], [CSA]: [R, C, U, D, X], [CA]: [R, C, U, X], [PM]: [R, C, U, X],
    [ACC]: [R, X], [BM]: [R], [OWN]: 'none', [TEN]: 'none',
    [VEN]: 'none', [EA]: 'none', [CON]: 'none', [TECH]: 'none',
    [AUD]: 'none', [INT]: 'none'
  },
  [MODULES.AMENITIES]: {
    [PO]: [R, C, U, D], [CSA]: [R, C, U, D], [CA]: [R, C, U, D], [PM]: [R, C, U, D],
    [ACC]: 'none', [BM]: [R], [OWN]: [R, C], [TEN]: [R, C],
    [VEN]: 'none', [EA]: 'none', [CON]: [R, C, U, A], [TECH]: [R],
    [AUD]: 'none', [INT]: 'none'
  },
  [MODULES.TENANCY]: {
    [PO]: [R, C, U, D, X], [CSA]: [R, C, U, D, X], [CA]: [R, C, U, D, X], [PM]: [R, C, U, D, X],
    [ACC]: [R, X], [BM]: 'none', [OWN]: [R, X], [TEN]: [R, X],
    [VEN]: 'none', [EA]: 'none', [CON]: 'none', [TECH]: 'none',
    [AUD]: [R, X], [INT]: 'none'
  },
  [MODULES.ARCHITECTURAL]: {
    [PO]: [R, C, U, D, A], [CSA]: [R, C, U, D, A], [CA]: [R, C, U, A], [PM]: [R, C, U, A],
    [ACC]: 'none', [BM]: [R, A], [OWN]: [R, C, U], [TEN]: [R],
    [VEN]: 'none', [EA]: 'none', [CON]: 'none', [TECH]: 'none',
    [AUD]: 'none', [INT]: 'none'
  },
  [MODULES.PURCHASE_ORDERS]: {
    [PO]: [R, C, U, D, A, X], [CSA]: [R, C, U, D, A, X], [CA]: [R, C, U, A], [PM]: [R, C, U, A],
    [ACC]: [R, C, U, A, X], [BM]: 'none', [OWN]: 'none', [TEN]: 'none',
    [VEN]: [R], [EA]: 'none', [CON]: 'none', [TECH]: [R],
    [AUD]: [R, X], [INT]: 'none'
  },
  [MODULES.AUTOMATIONS]: {
    [PO]: [R, C, U, D, A], [CSA]: [R, C, U, D, A], [CA]: [R], [PM]: [R],
    [ACC]: 'none', [BM]: 'none', [OWN]: 'none', [TEN]: 'none',
    [VEN]: 'none', [EA]: 'none', [CON]: 'none', [TECH]: 'none',
    [AUD]: 'none', [INT]: 'none'
  }
};

export const scopes: Record<Module, Scope> = {
  [MODULES.DASHBOARD]: SCOPES.MIXED,
  [MODULES.INCIDENTS]: SCOPES.MIXED,
  [MODULES.EMERGENCY]: SCOPES.BUILDING,
  [MODULES.MAINTENANCE]: SCOPES.BUILDING,
  [MODULES.MAINTENANCE_AGENDA]: SCOPES.BUILDING,
  [MODULES.STATEMENTS]: SCOPES.UNIT,
  [MODULES.BILLS]: SCOPES.ORG,
  [MODULES.DEPOSITS]: SCOPES.ORG,
  [MODULES.LEDGER]: SCOPES.ORG,
  [MODULES.LATE_FEES]: SCOPES.ORG,
  [MODULES.RECONCILIATION]: SCOPES.ORG,
  [MODULES.FINANCE_REPORTS]: SCOPES.ORG,
  [MODULES.BOARD]: SCOPES.ORG,
  [MODULES.MEETINGS]: SCOPES.ORG,
  [MODULES.VOTES]: SCOPES.ORG,
  [MODULES.DOCUMENTS]: SCOPES.MIXED,
  [MODULES.COMMS]: SCOPES.MIXED,
  [MODULES.INTEGRATIONS]: SCOPES.ORG,
  [MODULES.ANALYTICS]: SCOPES.ORG,
  [MODULES.SETTINGS_ORG]: SCOPES.ORG,
  [MODULES.SETTINGS_BUILDINGS]: SCOPES.ORG,
  [MODULES.SETTINGS_USERS]: SCOPES.ORG,
  [MODULES.SETTINGS_AUDIT]: SCOPES.ORG,
  [MODULES.PROFILE]: SCOPES.UNIT,
  [MODULES.RULES]: SCOPES.BUILDING,
  [MODULES.VIOLATIONS]: SCOPES.BUILDING,
  [MODULES.INSURANCE]: SCOPES.ORG,
  [MODULES.AMENITIES]: SCOPES.BUILDING,
  [MODULES.TENANCY]: SCOPES.UNIT,
  [MODULES.ARCHITECTURAL]: SCOPES.BUILDING,
  [MODULES.PURCHASE_ORDERS]: SCOPES.ORG,
  [MODULES.AUTOMATIONS]: SCOPES.ORG
};

export function hasPermission(
  userRole: Role,
  module: Module,
  action: string
): boolean {
  const acts = permissions[module]?.[userRole];
  if (acts === 'none') return false;
  if (!acts) return false;
  return acts.includes(action as any);
}

export function getModuleActions(userRole: Role, module: Module): string[] {
  const acts = permissions[module]?.[userRole];
  if (acts === 'none' || !acts) return [];
  return acts;
}
