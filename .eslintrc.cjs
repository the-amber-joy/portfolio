module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    // React 18+ no longer requires React in scope for JSX
    'react/react-in-jsx-scope': 'off',
    // Allow .tsx extension for components
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.ts'] }],
    // Prefer arrow functions but don't error on declarations
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    // Allow unused vars in destructuring if prefixed with _
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    // Import extensions not required for TS files (TypeScript compiler enforces this)
    'import/extensions': 'off',
    // Disable rules that require TypeScript resolver (TypeScript compiler handles these)
    'import/no-unresolved': 'off',
    'import/no-cycle': 'off',
    // Build files naturally use devDependencies
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'vite.config.ts',
          '**/*.test.ts',
          '**/*.test.tsx',
          'src/**/*.test.ts',
          'src/**/*.test.tsx',
        ],
      },
    ],
    // Relax style rules - focus on code quality
    'react/destructuring-assignment': 'warn',
    'react/jsx-props-no-spreading': 'warn',
    'react/no-unescaped-entities': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
  },
};
