const template = require('art-template')

module.exports = config => {
  return context => {
    context.path = context.path.replace(/\.[^\.]+$/, '.html')
    context.content = context.content.toString()
    context.content = template.compile({
      ...config,
      filename: context.template
    })(context)
  }
}
