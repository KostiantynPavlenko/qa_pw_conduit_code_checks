import globals from 'globals';
import pluginJs from '@eslint/js';
import playwright from 'eslint-plugin-playwright';

export default [
  { languageOptions: { globals: globals.node } },
  {
    ...pluginJs.configs.recommended,
    plugins: {
      playwright,
    },
    rules: {
      'no-unused-vars': 'error',
      'max-len': [
        'error',
        {
          code: 80,
          comments: 80,
        },
      ],
      ...playwright.configs['flat/recommended'].rules,
      'playwright/expect-expect': 'off',
    },
    ignores: [
      '**/node_modules/*',
      'playwright.config.js',
      '**/playwright-report/**',
    ],
  },
];
