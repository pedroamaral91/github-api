const config = require('./jest.config')
config.roots = ['<rootDir>/tests']
config.testMatch = ['**/*.e2e-spec.ts']
module.exports = config
