const config = require('./jest.config')
config.roots = ['<rootDir>/src']
config.testMatch = ['**/*.spec.ts']
module.exports = config
