const template = require('art-template')

module.exports = config => {
  return ctx => {
    ctx.type = 'html'
    ctx.content = template.render(ctx.template, ctx, config)
  }
}
