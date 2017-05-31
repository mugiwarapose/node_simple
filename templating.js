/**
 * Created by poseture on 2017/5/31.
 */

const nunjuncks = require('nunjucks');

function createEnv(path,opts) {

    var autoespace = opts.autoescape && true;

    var watch = opts.watch || false;

    var noCache = opts.noCache || false;

    var throwOnUndefined = opts.throwOnUndefined || false;

    var env = new nunjuncks.Environment(new nunjuncks.FileSystemLoader(path||'views',{noCache :noCache,watch:watch}),
        {
            autoespace:autoespace,
            throwOnUndefined:throwOnUndefined
        }
    );

    if(opts.filters){
        for(var f in opts.filters){
            env.addFilter(f,opts.filters[f]);
        }
    }

    return env;
}

function templating(path,opts) {

    var env = createEnv(path,opts);

    return async (ctx,next) =>{
        ctx.render = function (view,model) {
            ctx.response.body = env.render(view, Object.assign({}, ctx.state || {}, model || {}));
            // 设置Content-Type:
            ctx.response.type = 'text/html';
        }

        await next();
    }

}

module.exports = templating;