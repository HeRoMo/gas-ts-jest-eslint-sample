import globals from 'globals';
import googleAppsScriptPlugin from 'eslint-plugin-googleappsscript';
import importPlugin from 'eslint-plugin-import';
import jestPlugin from 'eslint-plugin-jest';
import pluginJs from '@eslint/js';
import stylisticTsPlugin from '@stylistic/eslint-plugin-ts';
import tsESLint from 'typescript-eslint';
import tsESLintParser from '@typescript-eslint/parser'; // eslint-disable-line import/default
import typescriptESLintPlugin from '@typescript-eslint/eslint-plugin';
import {FlatCompat} from '@eslint/eslintrc'; // eslint-disable-line import/namespace

const compat = new FlatCompat();

export default [
  ...compat.extends(
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ),
  pluginJs.configs.recommended,
  ...tsESLint.configs.recommended,
  {ignores: ['src/appsscript.json']},
  {
    languageOptions: {
      globals: {...globals.node}
    },
    settings: {
      node: {
        tryExtensions: ['.ts', '.js', '.json'],
      },
    },
  },
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    settings: {
      ...importPlugin.configs.typescript.settings,
      'import/parsers': {
        espree: ['.js', '.cjs', '.mjs', '.jsx'],
      },
      'import/resolver': {
        ...importPlugin.configs.typescript.settings['import/resolver'],
        node: {
          paths: ['src', '__tests__'],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
  },
  {
    plugins: {
      tsESLint: typescriptESLintPlugin,
      googleAppsScript: googleAppsScriptPlugin,
      jest: jestPlugin,
      import: importPlugin,
      '@stylistic/ts': stylisticTsPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.googleAppsScript,
        ...globals.jest,
      },
      parser: tsESLintParser,
    },
    rules: {
      ...importPlugin.configs.recommended.rules,
      ...importPlugin.configs.typescript.rules,
      'import/no-named-as-default': 0,
      'import/no-named-as-default-member': 0,
      'import/no-amd': 0,
      'import/newline-after-import': 0,
      'import/no-mutable-exports': 0,
      'import/extensions': ['error', 'ignorePackages', {ts: 'never', js: 'never'}],
      '@/max-len': ['error', {code: 100, ignoreTrailingComments: true}],
    },
  },
];
