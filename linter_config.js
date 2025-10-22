module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module"
  },
  plugins: [
    "react-hooks",
    "@typescript-eslint",
    "prettier"
  ],
  rules: {
    "prettier/prettier": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/naming-convention": [
      "error",
      { // требуем I-префикс
        selector: "interface",
        format: ["PascalCase"],
        custom: { regex: "^I[A-Z]", match: true }
      }
    ],
    "@typescript-eslint/no-empty-interface": [
      "warn",
      { allowSingleExtends: true }
    ],
    "@typescript-eslint/no-unused-vars": "error",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-param-reassign": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off"
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off"
      }
    },
    {
      files: ["stories/*.stories.tsx"],
      rules: {
        "react-hooks/rules-of-hooks": "off"
      }
    }
  ],
  settings: {
    react: {
      version: "detect"
    }
  }
};
