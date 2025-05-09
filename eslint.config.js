import js from '@eslint/js'
import filenamesPlugin from 'eslint-plugin-filenames'
import importPlugin from 'eslint-plugin-import'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin,
      filenames: filenamesPlugin,
    },
    rules: {
      // Regras React
      ...reactHooks.configs.recommended.rules,

      // Aviso para variáveis não usadas
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn'],

      // Convenções de nomes
      '@typescript-eslint/naming-convention': [
        'warn',
        { selector: 'variableLike', format: ['camelCase'] },
        { selector: 'typeLike', format: ['PascalCase'] },
        { selector: 'class', format: ['PascalCase'] },
        {
          selector: 'objectLiteralProperty',
          format: ['snake_case'],
          leadingUnderscore: 'allow',
        },
        { selector: 'objectLiteralMethod', format: ['snake_case'] },
        { selector: 'property', modifiers: ['public'], format: ['snake_case'] },
        { selector: 'default', modifiers: ['destructured'], format: null },
      ],

      // Validação de nomes de arquivos (camelCase)
      'filenames/match-regex': ['error', '^[a-z][a-zA-Z0-9]*$', true],

      // Importações
      'import/no-unresolved': 'error',
      'import/order': ['warn', { 'newlines-between': 'always' }],

      // Aspas duplas
      'quotes': ['error', 'double', { avoidEscape: true }],

      // React Refresh
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },
  },
)
