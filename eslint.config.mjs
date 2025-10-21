import globals from 'globals';
import js from '@eslint/js';
import playwright from 'eslint-plugin-playwright';

export default [
  js.configs.recommended,
  playwright.configs['flat/recommended'],
  {
    languageOptions: { globals: globals.node },
    plugins: { playwright },
    rules: {
      'no-unused-vars': 'error',
      'max-len': [
        'error',
        {
          code: 80,
          comments: 80,
        },
      ],
      'playwright/expect-expect': 'off',
    },
    ignores: [
      '**/node_modules/*',
      'playwright.config.js',
      '**/playwright-report/**',
    ],
  },
];
