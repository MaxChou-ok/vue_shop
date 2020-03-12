module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': 0,
    'no-debugger': 0,
    'no-empty': 0,
    'space-before-function-paren': 0, // 函数参数前面要加空格
    'space-before-blocks': 0, // 函数块前面要加空格
    semi: 0, // 分号检查
    'no-useless-return': 0,
    camelcase: 0,
        indent: 0,
        'no-tabs': 0,
        'no-mixed-spaces-and-tabs': 0,
        'object-curly-spacing': 0,
        'space-before-function-paren': 0,
        'no-trailing-spaces': 0,
        'vue/multiline-html-element-content-newline': 0,
        'vue/html-closing-bracket-newline': 0,
        'vue/html-indent': ['error', 4, {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: []
        }],
        'vue/max-attributes-per-line': ['error', {
            singleline: 1,
            multiline: {
                max: 1,
                allowFirstLine: true
            }
        }]
  }
}
