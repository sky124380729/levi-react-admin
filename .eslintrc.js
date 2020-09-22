module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['plugin:@typescript-eslint/recommended', 'react-app', 'plugin:prettier/recommended'],
    plugins: ['@typescript-eslint', 'react'],
    rules: {
        'no-non-null-assertion': 'off',
        'no-explicit-any': 'off',
        'jsx-a11y/anchor-is-valid': 'off'
    }
}
