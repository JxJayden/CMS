const log4js = require('log4js'),
    path = require('path')

/**
 * 打印日志
 */
module.exports = function (opts) {
    let log_config = {
        appenders: [{
            type: 'console'
        }, {
            type: 'DateFile',
            level: 'ERROR',
            filename: opts.filename || `${__dirname}/../../logs/server/log`,
            pattern: '-yyyy-MM-dd.log',
            alwaysIncludePattern: true,
            maxLogSize: 20480,
            backups: 3
        }]
    }

    log4js.configure(log_config)
    return log4js.getLogger(path.basename(__filename))
}
