'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }

  async list() {
    const { id } = this.ctx.params;
    console.log('list,id:' + id);
    const result = await this.ctx.service.home.list(id);
    console.log('list,result:' + result);
    this.ctx.body = (result ? result : '');
  }
  async isIOS() {
    console.log('isIOS');
    this.ctx.body = `isIOS: ${this.ctx.isIOS}`;
  }
}

module.exports = HomeController;
