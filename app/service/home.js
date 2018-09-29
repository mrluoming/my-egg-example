'use strict';
const Service = require('egg').Service;
class UserService extends Service {
  async list(targetID) {
    console.log('list,targetID:' + targetID);
    console.log('this.app.model.Test:', this.app.model.Test);
    try {
      // get mysql data
      const TestRecord = await this.ctx.model.Test.findOne(
        {
          where: {
            id: targetID,
          },
          raw: true,
        });
      console.log('TestRecord:', TestRecord);
      // return TestRecord ? JSON.stringify(TestRecord) : '';
      // get redis data
      const result = this.app.redis.get('asmp_user_1');
      return result;
    } catch (e) {
      console.log('e:', e);
      return 'error';
    }
  }
}
module.exports = UserService;
