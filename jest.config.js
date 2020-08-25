module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/**/*.ts(x)?', '!src/**/stories.ts(x)?', '!src/styles'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
};
