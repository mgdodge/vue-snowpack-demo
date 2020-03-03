module.exports = {
  presets: [
    process.env.NODE_ENV === 'production' ? ['@babel/preset-env', { modules: false }] : '@vue/cli-plugin-babel/preset'
  ]
}
