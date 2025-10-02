# PASTA Platform — Foundation

## Stack
- **Vite** + React 18 + TypeScript
- **React Router 6** for routing
- **Radix UI** + **shadcn/ui** primitives
- **TailwindCSS** + Liquid Glass theme
- **TanStack Table/Query**, date-fns, zod, react-hook-form
- **i18next** for i18n

## Mock Toggle
Set `VITE_MOCKS_ENABLED=true` in `.env.development` (default: enabled).
All data sourced from `/src/mocks/fixtures/*` via `/src/mocks/adapters/index.ts`.
Zero network calls.

## RBAC
- **Roles**: `/src/shared/roles.ts` — 14 roles (Platform Owner → Tenant/Vendor/…)
- **Permissions**: `/src/shared/permissions.ts` — module × role → action set (R/C/U/D/X/A)
- **Guards**: `<Guard module={…} actions={[…]} roles={[…]} />` — conditional rendering
- **Hooks**: `useCurrentUser()`, `usePermissions(module)`

Current user stored in `localStorage` (`pasta_mock_current_user`). Toggle user via `setCurrentUser(mockUsers[i])` in console or Settings UI (to be added).

## Liquid Glass Theme
- **Tailwind config**: `glass-sm/glass/glass-lg` shadows, `glass` blur, gradient backgrounds
- **CSS**: `/src/styles/liquid-glass.css` — `.glass-panel`, `.glass-panel-sm/lg`, elevation classes, accessible focus rings
- **AppShell**: gradient backdrop applied (slate tones)

## Utilities
- **Validation**: `/src/shared/utils/validation.ts` (email, phone, required, min/max, pattern, url)
- **Formatters**: `/src/shared/utils/formatters.ts` (date/time, currency, number, percent, phone, truncate)
- **Export**: `/src/shared/utils/export.ts` (CSV/PDF front-end only, audit banner helper)

## Routes
All existing routes preserved. AppShell wraps authenticated routes. No guards applied yet (next step).

## Build & Test
```bash
npm install
npm run dev              # http://localhost:5173
npm run build            # production build
npm run build:dev        # dev mode build
```

## Verify
1. Open dev server
2. Check AppShell gradient background
3. Inspect `.glass-panel` classes in DevTools
4. Check `localStorage.pasta_mock_current_user` (null initially; set via auth flow or console)

## Commit
```
feat: add RBAC foundation, mocks infrastructure, Liquid Glass theme

- roles/permissions matrix (14 roles, 30+ modules)
- Guard component + useCurrentUser/usePermissions hooks
- mock data toggle (VITE_MOCKS_ENABLED), fixtures/adapters
- Liquid Glass TW tokens, CSS classes, AppShell gradient
- validation/formatters/export utils (CSV/PDF FE-only)
```
