module.exports = (ctx) => ({
  parser: ctx.parser ? 'postcss-scss' : false,
  map: ctx.env === 'development' ? ctx.map : false,
  plugins: {
    "postcss-easy-import": {
      "extensions": [
        ".scss"
      ]
    },
    "autoprefixer": {}
  }
})

