module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jquery: true
  },
  globals: {
    module: 'readonly',
  },
  extends: 'standard',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-unused-vars': 'off'
  }
}
