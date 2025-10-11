# CRM Dashboard Architecture Outline

## Goals

- Build a modular, maintainable CRM dashboard UI for customer management.
- Enable rapid prototyping and easy component testing with Storybook.
- Prioritize developer experience, scalability, and clean code separation.

## Non-goals

- No real backend/API integration (mock data only).
- No authentication/authorization.
- No production deployment or CI/CD setup.

## Tech Stack

- **React** (functional components, hooks)
- **TypeScript** (type safety)
- **Chakra UI** (accessible, themeable design system)
- **Zustand** (lightweight global state)
- **Storybook** (UI development/testing)
- **Webpack** (custom build config)

## Design System

- Chakra UI for all layout, spacing, color, and typography primitives.
- Custom theme tokens in `src/components/ui/theme.ts` for brand consistency.
- Component-driven: all UI is split into small, reusable, isolated components.
- Storybook stories colocated with components for visual testing and documentation.

## Data Layer

- **Mock Strategy**: All data (customers, user) is static and lives in `src/data/` for fast iteration.
- **Sorting/Filtering/Pagination**: Handled on the client using custom React hooks (`src/hooks/`).
  - `useFilteredCustomers`, `useSortedCustomers`, `usePaginatedCustomers` encapsulate logic for each concern.
- **Error Handling**: Minimal, as data is static. UI states for loading/empty/error are simulated via component props and stories.

## Approach

- **Separation of Concerns**: UI (components), logic (hooks), and data (mock) are strictly separated.
- **Responsive Design**: Chakra UI's responsive props ensure mobile-friendly layouts.
- **Global State**: Only user info is global (via Zustand); most state is local/component-level.
- **Testing**: Storybook for visual/unit testing of components in isolation. (Automated tests: future work.)

## References

- [Chakra UI Documentation](https://chakra-ui.com/docs)
- [React Documentation](https://react.dev/)
- [Zustand Documentation](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [Webpack Documentation](https://webpack.js.org/concepts/)
