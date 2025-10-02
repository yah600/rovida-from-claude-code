# Rovida — Property/Condo Operations Platform (Frontend)

**Production-grade frontend** for property/condo operations with full RBAC, Liquid Glass UI, and 20 functional modules.

## Features

- ✅ **14 Roles** with granular permissions (Platform Owner → Tenant/Vendor)
- ✅ **30+ Modules** covering Finance, Maintenance, Board, Documents, Communications, Analytics, Integrations
- ✅ **Liquid Glass Theme** — clean glass panels, blur, depth, accessible contrast
- ✅ **RBAC Guards** on routes + components (read/create/update/delete/export/approve)
- ✅ **Mock Data Toggle** — single env var, zero network calls
- ✅ **Export Controls** — CSV/PDF (FE-only) with audit prompts
- ✅ **Responsive** — mobile-friendly grid, Tailwind utilities
- ✅ **i18n Ready** — react-i18next
- ✅ **Validation/Formatters** — date, currency, phone, etc.

## Quick Start

```bash
npm install
npm run dev              # http://localhost:5173
npm run build            # production build
```

## Mock Toggle

Edit `.env.development`:
```
VITE_MOCKS_ENABLED=true  # (default)
```

All data from `/src/mocks/fixtures/*`. To switch users: open Settings → User Switcher (dev only).

## Roles & Permissions

**14 Roles:**
- Platform Owner (super-admin, cross-org)
- Client Super-Admin (org owner)
- Condo Administrator (building admin)
- Property Manager
- Accountant
- Board Member
- Owner
- Tenant
- Vendor/Service Provider
- Emergency Agent
- Concierge/Front Desk
- Building Technician
- Read-Only Auditor
- Integration/Bot

**Permissions Matrix** at `/src/shared/permissions.ts` — action sets (R/C/U/D/X/A) per module × role.

## Modules

1. **Financial** — Statements, Bills, Deposits, Ledger, Late Fees, Reconciliation, Reports
2. **Documents** — Registry, Inbox, shared docs with category filters
3. **Rules & Violations** — Catalog, tickets, approvals
4. **Requests & Amenities** — Bookings, common areas
5. **Insurance & Claims** — Policies, claims tracking
6. **Maintenance** — Calendar, Assets, Work Orders, Tasks, Agenda (XLSX)
7. **Announcements** — Mass comms with audience scoping
8. **Board/Meetings/Votes** — Governance, meeting minutes, voting
9. **Architectural Changes** — Requests, approvals
10. **Purchase Orders** — Vendor POs, approvals
11. **Mobile** — (UI responsive; no native app)
12. **Reporting/Analytics** — Charts, dashboards
13. **Amenities/Resources** — (see #4)
14. **Meeting/Voting Mgmt** — (see #8)
15. **Owner/Tenant Mgmt** — Leases, statements, unit info
16. **Automation/Efficiency** — Workflows
17. **Compliance** — Audit logs
18. **Messaging/Engagement** — (see #7)
19. **Security & Access** — Visitor logs, settings
20. **Integrations** — Platform Owner/Client Super only

## Tech Stack

- **Vite** + React 18 + TypeScript
- **React Router 6**
- **Radix UI** + **shadcn/ui**
- **TailwindCSS** (Liquid Glass theme)
- **TanStack Table/Query**
- **date-fns**, **zod**, **react-hook-form**, **i18next**

## Structure

```
/src
  /shared
    roles.ts, permissions.ts
    /hooks         — useCurrentUser, usePermissions
    /components    — Guard, RouteGuard, ExportButton
    /utils         — validation, formatters, export (CSV/PDF)
  /mocks
    config.ts
    /fixtures      — users, orgs, buildings, documents, finance, incidents, maintenance, board, announcements
    /adapters      — selectors
  /pages           — all routes (Dashboard, Finance, Maintenance, Board, Documents, Comms, Settings, etc.)
  /components
    /layout        — AppShell, Topbar, Sidebar
    /ui            — shadcn primitives
  /styles
    liquid-glass.css
```

## RBAC Usage

**Route Guards:**
```tsx
<Route path="/emergency" element={<RouteGuard module={MODULES.EMERGENCY}><Emergency /></RouteGuard>} />
```

**Component Guards:**
```tsx
<Guard module={MODULES.BILLS} actions={['export']}>
  <ExportButton ... />
</Guard>
```

**Hooks:**
```tsx
const { canCreate, canExport } = usePermissions(MODULES.BILLS);
```

## Export Controls

`ExportButton` component shows audit banner before CSV export. Only visible to roles with `export` permission on that module.

```tsx
<ExportButton module={MODULES.BILLS} data={mockBills} filename="bills" />
```

## Liquid Glass Theme

**Classes:**
- `.glass-panel`, `.glass-panel-sm`, `.glass-panel-lg`
- Tailwind: `shadow-glass`, `backdrop-blur-glass`, `bg-glass-gradient`

**Elevation:**
- `.elevation-1` through `.elevation-4` (z-index layers)

**Focus Rings:**
- `.focus-ring`, `.focus-ring-inset` (accessible, high-contrast)

## License

Proprietary. All rights reserved.

---

**Generated with [Claude Code](https://claude.com/claude-code)**
