import prettierPlugin from 'eslint-plugin-prettier';
import prettierRecommended from 'eslint-config-prettier/flat';

export default [
  // Prettier recommended config
  prettierRecommended,

  // Your overrides and rules
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        process: 'readonly',
        console: 'readonly',
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
];
