const config = require('./jest.config')
config.roots = ['<rootDir>/tests']
config.collectCoverageFrom = [
  '<rootDir>/tests/**/*.ts',
  '!<rootDir>/src/main/**'
]
config.testMatch = ['**/*.e2e-spec.ts']
module.exports = config
