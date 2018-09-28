'use strict';
const Service = require('egg').Service;
class UserService extends Service {
  async list(targetID) {
    console.log('list,targetID:' + targetID);
    console.log('this.app.model.Test:', this.app.model.Test);
    try {
      const TestRecord = await this.ctx.model.Test.findOne(
        {
          where: {
            id: targetID,
          },
          raw: true,
        });
      console.log('TestRecord:', TestRecord);
      return TestRecord ? JSON.stringify(TestRecord) : '';
    } catch (e) {
      console.log('e:', e);
    }
  }
}
module.exports = UserService;
