module.exports = {
  root: true,
  extends: ["universe/native"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
        },
      },
    ],
  },
};
