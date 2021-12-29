

const status = new Map ();
status.set (0, '全部');
status.set (1, '已激活');
status.set (2, '未激活');
status.set (3, '已到期');

const EChartColorConfig=["#5087EC", "#68BBC4", "#58A55D", "#F2BD42", "#EF752E"]
const Constant = {
  EChartColorConfig,
  status
}
module.exports = Constant;