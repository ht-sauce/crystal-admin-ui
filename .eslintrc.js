module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-var-requires': 'off',
    'no-unused-vars': 'off',
    'no-useless-escape': 'off',
    'require-atomic-updates': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-unused-vars': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'no-control-regex': 'off',
  },
}
