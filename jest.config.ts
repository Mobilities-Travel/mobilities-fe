import type { InitialOptionsTsJest } from 'ts-jest/dist/types'

const config: InitialOptionsTsJest = {
  preset: 'ts-jest',
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  transform: {
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
  },
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  coverageReporters: ['html', 'json', 'lcov', 'text', 'clover'],
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': `<rootDir>/__mocks__/fileMock.js`,

    // Handle module aliases
    // '^@/components/(.*)$': '<rootDir>/components/$1',
    '@utils/(.*)$': '<rootDir>/src/utils/$1',
    '@modules/(.*)$': '<rootDir>/src/store/modules/$1',
    '@components/(.*)$': '<rootDir>src/components/$1',
    '@pages/(.*)$': '<rootDir>src/pages/$1',
    '@context/(.*)$': '<rootDir>src/context/$1',
    '@hooks/(.*)$': '<rootDir>src/hooks/$1',
    '@view/(.*)$': '<rootDir>src/view/$1',
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    '<rootDir>/.yarn',
  ],
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
    'node_modules/(?!(@material-ui)/)',
    '/.pnp.js$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
}

export default config
