'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    let obj = {};
    obj.allUser = await this.ctx.service.user.getuser();
    obj.name = "smallfang"
    await this.ctx.render('../view/index.nj',obj)
  }
}

module.exports = HomeController;
