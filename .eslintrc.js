module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/essential', '@vue/standard'],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/script-indent': ['error', 2, { baseIndent: 1 }],
        indent: 'off',
        'space-before-function-paren': 'never',
        'eol-last': 0,
        camelcase: 'never',
        'space-in-parens': 'never',
        'func-call-spacing': 'never'
    }
}