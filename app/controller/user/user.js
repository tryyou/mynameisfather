const Controller = require('egg').Controller

class User extends Controller {
    async  getAllUser (ctx){
        const allUser = await ctx.service.user.getuser();
        ctx.body = allUser
    }

    async addUser (){
        const type = await this.ctx.service.user.setuser();
        ctx.body = type 
    }
}
module.exports = User;
// let str = `
//     1 项目的搭建: 项目移动端用vue-cli 搭建了一个spa webApp,  用到了webpack npm  ,
//     2 移动端的适配
//     3.网页优化
//     4. spa应用前端路由 vue-router
//     5. vue组件
//     6. el
// `