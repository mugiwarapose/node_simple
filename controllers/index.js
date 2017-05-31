/**
 * Created by poseture on 2017/5/31.
 */
module.exports = {
    'GET /':async (ctx,next) =>{
        ctx.render('index.html',{title:'wlecome'});
    }
};