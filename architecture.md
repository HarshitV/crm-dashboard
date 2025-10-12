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
  - `useFilteredCustomers`, `useSortedCustomers`, `usePagination` encapsulate logic for each concern.
- **Error Handling**: Minimal, as data is static. UI states for loading/empty/error are simulated via component props and stories.

## UI States

- **Loading States**: All major data-fetching components (e.g., customers list, dashboard cards, user profile) display skeletons or spinners while loading mock data. Loading is simulated using timeouts.
- **Error States**: Components display user-friendly error messages if mock data fetching fails (simulated via error boundaries or error state in hooks).
- **Empty States**: If no data matches filters/search, empty state components are shown.

## Storybook

- Storybook is integrated for all UI components, including SideMenu, CustomersList, Dashboard cards, and more.
- Stories demonstrate default, loading, error, and empty states for each component.
- Decorators are used to provide global context (e.g., ChakraProvider, Zustand store state).
- Storybook enables rapid visual testing and documentation for all UI states.

## Performance Optimizations

- **Memoization**: Hooks like `useFilteredCustomers`, and `useSortedCustomers` use `useMemo` to avoid unnecessary recalculations.
- **React.memo**: Row components (e.g., `CustomerRow`) are wrapped in `React.memo` to prevent unnecessary re-renders.
- **Debouncing**: Search input uses a debounced value to reduce filtering frequency and improve perceived performance.
- **Pagination**: Only the current page of customers is rendered, reducing DOM size and improving responsiveness.

## Approach

- **Separation of Concerns**: UI (components), logic (hooks), and data (mock) are strictly separated.
- **Accessibility (a11y)**: The app is built with accessibility in mind:
  - Uses Chakra UI, which provides accessible components by default.
  - Keyboard navigation is supported throughout the UI (tab order, focus states, skip links where needed).
  - ARIA attributes are used where appropriate to enhance screen reader support.
  - Components are tested for keyboard and screen reader accessibility.
- **Error Boundaries**: Critical UI areas are wrapped in error boundaries to catch and display user-friendly error messages, preventing the entire app from crashing on unexpected errors.
- **Responsive Design**: Chakra UI's responsive props ensure mobile-friendly layouts and adapt to various screen sizes.
- **Global State**: Only user info is global (via Zustand); most state is local/component-level.
- **Testing**: Storybook for visual/unit testing of components in isolation. (Automated tests: future work.)

## References

- [Chakra UI Documentation](https://chakra-ui.com/docs)
- [React Documentation](https://react.dev/)
- [Zustand Documentation](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [Webpack Documentation](https://webpack.js.org/concepts/)
- [Storybook Documentation](https://storybook.js.org/docs)
