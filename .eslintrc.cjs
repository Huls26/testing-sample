module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        'eslint:recommended',
        'plugin:testing-library/react',
        'plugin:jest/style',
        'plugin:jest/recommended',
        'plugin:react/recommended',
        'plugin:import/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/recommended',
        // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
        // Make sure it's always the last config, so it gets the chance to override other configs.
        
        "airbnb-typescript",
        "prettier"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "project": "./tsconfig.vite.json",
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        
    ],
    settings: {
        react: {
          // Tells eslint-plugin-react to automatically detect the version of React to use.
          version: 'detect',
        },
        'import/resolver': {
            node: {
              paths: ['src'],
              extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    "rules": {
    }
}
