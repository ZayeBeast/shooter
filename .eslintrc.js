module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'extends': [
    'standard'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'eslint-plugin-html',
    'json',
    'markdown'
  ],
  'rules': {
  }
}
