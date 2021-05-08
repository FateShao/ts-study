module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true
    },
    parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    rules: {
        eqeqeq: 'error',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "indent": ["error", 4],
        // 函数括号中间的空格, 匿名函数不需要,命名函数不需要,异步箭头函数需要
        'space-before-function-paren': [
            2,
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        // 去除注释的最大长度限制
        'max-len': [
            'error',
            {
                ignoreComments: true,
                ignoreStrings: true,
                code: 200
            }
        ],
        // 箭头函数体只有一个参数时，可以省略圆括号。其它任何情况，参数都应被圆括号括起来。该规则强制箭头函数中圆括号的使用的一致性。
        'arrow-parens': [
            0,
            'as-needed',
            {
                requireForBlockBody: true
            }
        ],
        // 禁止参数再赋值 -- 关闭
        'no-param-reassign': 0,
        // 封号结尾
        semi: 'error',
        // 函数必须标注返回类型 -- 关闭
        '@typescript-eslint/explicit-module-boundary-types': 'off'
    }
};