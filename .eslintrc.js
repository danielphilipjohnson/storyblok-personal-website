
  module.exports = {
    env: {
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended',
    ],
    rules: {
        "vue/no-multiple-template-root": "off" 
      // override/add rules settings here, such as:
      // 'vue/no-unused-vars': 'error'
    }
  }