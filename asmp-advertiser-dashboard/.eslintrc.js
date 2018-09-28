/**
 *
 *  ESLint (v4.19.1) http://eslint.cn
 *  配置文件
 *
 *  规则列表: http://eslint.cn/docs/rules/
 *
 *  0: "off" 禁用此规则
 *  1: "warn" 违反时警告
 *  2: "error" 违反时报错
 *
 */


module.exports = {
  "extends": "eslint:recommended",
  "env": {
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {

    "linebreak-style": ["error", "unix"],

    "semi-style": ["error", "first"],
    "no-extra-semi": "error",

    "no-var": "error",


    "quotes": ["error", "single"],
    "eqeqeq": "error",

    "linebreak-style": ["error", "unix"],

    "no-trailing-spaces": "error",

    "no-cond-assign": "error",
    "no-irregular-whitespace": "error",
    "valid-jsdoc": "error",
    "no-redeclare": "error",
    "max-depth": ["error", 5],
    "no-mixed-spaces-and-tabs": "error",
    "no-underscore-dangle": "error",
    "no-whitespace-before-property": "error",


    //warning
    "indent": ["warn", 2],
    "no-undef": "warn",
    "no-unused-vars": "warn",
    "no-multi-spaces": "warn",
    "prefer-const": "warn",


    //off
    "no-console": "off",
    "semi-spacing": "off"

  }
};