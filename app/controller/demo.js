'use strict';

let Controller = require('egg').Controller;

class Examples extends Controller {
  async example() {
    this.ctx.body = 'hello, egg';
    // this.ctx.status = 200;
    this.ctx.status = 200;
  };

  async getdemo() {
    this.ctx.body = 'hello, egg';
    // this.ctx.status = 200;
    this.ctx.status = 200;
  }
}

module.exports = Examples;
