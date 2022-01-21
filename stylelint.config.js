// See discussion at https://github.com/nuxt/create-nuxt-app/issues/446
// Source https://github.com/ebrahimMaher/dalilmobarmg/blob/448b469432c4764d4fe886a671e3305b79a52c74/stylelint.config.js
module.exports = {
  "extends": [
    'stylelint-config-recommended-scss',
    "stylelint-config-prettier",
    "stylelint-config-html",
  ],

  "plugins": [
    "stylelint-scss", 
    "stylelint-prettier"
  ],

  // add your custom config here
  // Rule lists:
  // - https://stylelint.io/user-guide/rules/
  // - https://github.com/kristerkari/stylelint-scss#list-of-rules
  rules: {
    "prettier/prettier": true,

    // Tailwind
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'responsive',
          'media',
          'screen',
          'mixin',
          'include',
          'extend'
        ]
      }
    ],

    // ===
    // SCSS
    // ===
    // Allow SCSS keywords beginning with `@` for Tailwind
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'media',
          'screen',
          'mixin',
          'include'
        ]
      }
    ]
  }
};
