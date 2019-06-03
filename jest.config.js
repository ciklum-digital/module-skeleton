module.exports = {
  displayName: 'module-skeleton',
  setupFilesAfterEnv: [
    '<rootDir>/jest.init.js',
  ],
  testMatch: [
    '<rootDir>/src/**/*(*.)@(spec|test).[tj]s',
  ],
  collectCoverage: true,
  coverageReporters: [
    'text',
    'text-summary',
    'text-lcov',
    'lcov',
  ],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    // included
    '**/src/**/*.{js,ts}',

    // excluded
    '!**/src/**/*.{mock,index}.{js,ts}',
    '!**/node_modules/**',
  ],
}
