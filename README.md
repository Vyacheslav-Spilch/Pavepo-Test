# Frontend Developer Test Task: Pavepo

This project is a user management **React-based web application** that displays a list of users with the ability to search and filter by city, email, and name. Each user has a dedicated profile card containing detailed information.


---

## Features

- **Search Panel**: displays a list of filters.

  - **Filters**: You can filter by users:
  - **City**
  - **Email**
  - **Name** (search by username)

  - **Reset Filters**: you can reset the filter settings to their initial state

- **Users List**: Displays a full list of users, the user card indicates (name, city, mail)

  - **Filters**: The card leads to the user's page with full information about him

  - **Responsive Design**: The UI is designed to work on both desktop and mobile devices.

---

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: Adds static typing to JavaScript for better code quality and maintainability.
- **Vite**: A fast and modern build tool that optimizes the development experience for React applications.
- **Redux Toolkit**: Used to manage and centralize the application state, simplifying Redux development.
- **RTK Query**: Provides efficient data fetching, caching, and synchronization with the server.
- **React Router Dom**: For routing without reloading the page and enabling single-page app navigation.
- **Lazy Loading**: Dynamically loads components when they are needed to improve performance, especially on larger apps.
- **SCSS Modules**: Scoped and modular CSS styling to avoid global styles and improve maintainability.

## Installation

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Vyacheslav-Spilch/Pavepo-Test
   ```

2. **Install dependencies**:

   ```bash
   yarn or yarn install
   ```

3. **run project**:
   ```bash
   yarn run dev
   ```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
