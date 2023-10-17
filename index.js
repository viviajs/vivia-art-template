const template = require('art-template')
const path = require('path')

module.exports = config => {
  options = {
    ...template.defaults,
    debug: config.debug,
    debug: false,
    minimize: true,
    htmlMinifierOptions: {
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
    },
    root: path.resolve('template'),
    imports: {
      Object,
      Array,
      Date,
      Math
    },
    ...config
  }

  return context => {
    context.path = context.path.replace(/\.[^\.]+$/, '.html')
    context.content = context.content.toString()
    context.content = template.compile({ ...options, filename: context.template })(context)
  }
}
