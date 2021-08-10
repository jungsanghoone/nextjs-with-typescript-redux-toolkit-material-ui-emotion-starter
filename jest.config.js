module.exports = {
  roots: ['<rootDir>'],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  // setupFilesAfterEnv: [
  //   '@testing-library/react/cleanup-after-each',
  //   '@testing-library/jest-dom/extend-expect',
  // ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    // '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
  },
  // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{tsx, ts}',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/index.ts',
    '!<rootDir>**/*.mock.ts',
    '!<rootDir>**/*.module.ts',
    '!<rootDir>**/*.spec.ts',
    '!<rootDir>**/*.test.ts',
    '!<rootDir>**/*.d.ts',
    '!<rootDir>**/*.ts',
  ],
  // coveragePathIgnorePatterns: [
  //   '<rootDir>/test/test-utils.js',
  //   '[/\\\\]node_modules[/\\\\]',
  // ],
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
};
