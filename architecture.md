# Architecture & Technical Decisions

## Overview

This project is a CRM Dashboard built with React, Chakra UI, Zustand, and TypeScript. It features a modular, component-driven architecture with a focus on maintainability, scalability, and developer experience.

---

## Folder Structure

- **public/**: Static assets and the main HTML entry point.
- **src/**
  - **App.tsx**: Main application entry, sets up routing and layout.
  - **index.tsx**: React root, ChakraProvider, and global styles.
  - **components/**: Reusable UI and feature components.
    - **Customers/**: Customer dashboard and list components.
    - **SideMenu/**: Sidebar navigation and user profile.
    - **ui/**: Generic UI elements (pagination, wrappers, etc.).
  - **data/**: Mock data for customers and user.
  - **hooks/**: Custom React hooks for state and logic (pagination, filtering, etc.).
  - **icons/**: Custom SVG icon components.
  - **images/**: Static image assets.
  - **pages/**: Route-level page components.
  - **store/**: Zustand stores for global state (e.g., user).
  - **utils/**: Utility functions and constants.

---

## Key Technologies & Decisions

### 1. **React**
- Chosen for its component-based architecture and ecosystem.
- Uses functional components and React hooks.

### 2. **Chakra UI**
- Provides accessible, themeable, and composable UI primitives.
- Custom theme tokens are defined in [`components/ui/theme.ts`](src/components/ui/theme.ts).

### 3. **TypeScript**
- Ensures type safety and better developer tooling.
- All code is written in TypeScript for maintainability.

### 4. **Zustand**
- Lightweight state management for global state (e.g., user info).
- Used in [`store/useUserStore.ts`](src/store/useUserStore.ts).

### 5. **React Router**
- Handles client-side routing.
- Routes are defined in [`App.tsx`](src/App.tsx).

### 6. **Webpack**
- Custom configuration for development and production builds.
- Aliases (`@`) are set up for cleaner imports.

### 7. **Mock Data**
- All customer and user data is mocked for development and demo purposes.
- Located in [`data/`](src/data/).

### 8. **Custom Hooks**
- Encapsulate logic for filtering, sorting, pagination, and debouncing.
- Examples: [`useCustomersList`](src/hooks/useCustomersList.ts), [`useDebounce`](src/hooks/useDebounce.ts).

### 9. **Component-Driven Design**
- UI is broken down into small, reusable components.
- Promotes reusability and easier testing.

---

## Design Patterns & Conventions

- **Separation of Concerns**: Logic (hooks), UI (components), and data (mock/data) are separated.
- **Responsive Design**: Chakra UI's responsive props are used for layout and sizing.
- **Theming**: Centralized theme tokens for colors and spacing.
- **Lazy Loading**: Pages are lazy-loaded for performance.
- **Testing**: (To be added) Placeholder for future unit/integration tests.

---

## Future Improvements

- Replace mock data with real API integration.
- Add authentication and authorization.
- Implement unit and integration tests.
- Enhance accessibility and internationalization.

---

## References

- [Chakra UI Documentation](https://chakra-ui.com/)
- [React Router Documentation](https://reactrouter.com/)
- [Zustand Documentation](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [Webpack Documentation](https://webpack.js.org/)