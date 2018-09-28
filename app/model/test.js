'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Test = app.model.define('tb_test', {
    id: { type: INTEGER(11), primaryKey: true, autoIncrement: true },
    day: STRING(45),
    code: STRING(45),
    ads_id: STRING(64),
    imp: INTEGER(11),
    clk: INTEGER(11),
    add_time: DATE,
    update_time: DATE,
  },
  {
    freezeTableName: true, // 控制表名不是复数
    timestamps: false, // 控制不会自动添加时间戳createAt，updateAt
  });

  console.log('Test:', Test);
  return Test;
};
