/**
 * Created by poseture on 2017/5/31.
 */

const path = require('path');
const mime = require('mime')
const fs = require('mz/fs')


function staticFiles(url,dir) {

    return async(ctx, next) => {

        let rpath = ctx.request.path;
        //判断是否以指定URL开头
        if (rpath.startsWith(url)) {
            let fp = path.join(dir, rpath.startsWith(url.length));

            if (await fs.exists(fp)) {
                ctx.response.type = mime.lookup(rpath);
                ctx.response.body = fs.readFile(fp);
            } else {
                ctx.response.status = 404;
            }
        } else {
            await next();
        }

    }
}

module.exports = staticFiles;
