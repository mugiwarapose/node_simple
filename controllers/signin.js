/**
 * Created by poseture on 2017/5/31.
 */

module.exports =  {
    'POST /':async (ctx,next)=>{

        var email = ctx.request.body.email ||'';

        var password = ctx.request.body.password ||'';

        if (email === 'admin@example.com' && password === '123456') {
            console.log('signin ok!');
            ctx.render('signin-ok.html', {
                title: 'Sign In OK',
                name: 'Mr Node'
            });

        }else {

            console.log('signin failed!');
            ctx.render('signin-failed.html', {
                title: 'Sign In Failed'
            });
        }
}

};