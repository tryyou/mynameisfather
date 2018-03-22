const Service = require('egg').Service
class User extends Service {
    async getuser(){
        // const user = await this.ctx.db.query('select * from user' );
        const user = await this.app.mysql.select('user');
        return user;
    }

    async setuser(){
        const type = await this.app.mysql.insert('user',{
          'name':'李四',
          'number':'132456',
          'password':'123456'

        })
    }

}
module.exports = User;
