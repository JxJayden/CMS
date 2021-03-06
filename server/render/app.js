const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')()
const logger = require('../lib/log')('app')
const index = require('./routes/index')

onerror(app)

// middlewares
app
    .use(bodyparser)
    .use(json())
    .use(require('koa-static')(__dirname + '/public'))
    .use(views(__dirname + '/views', {
        extension: 'pug'
    }))

// logger
app.use(async(ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    logger.info(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())

module.exports = app

