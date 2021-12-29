import request from '@/utils/httpUtil';
//订单接口
class Appraise {

  //鉴定列表
  getAppraiseListApi(data) {
    return request({
      url: '/appraise/query-page',
      data,
    });
  }

  //鉴定详情
  getAppraiseDetailApi(id) {
    return request({
      url: `/appraise/load/${id}`,
      method: 'GET',
    });
  }

  //提交鉴定（首次）
  addAppraiseApi(data) {
    return request({
      url: '/appraise/add',
      data,
    });
  }

  //重新提交鉴定
  commitAppraiseApi(data) {
    return request({
      url: '/appraise/commit',
      data,
    });
  }

  //关闭销售单
  closeAppraiseApi(data) {
    return request({
      url: '/appraise/close',
      data,
    });
  }

  //鉴定发货
  deliveryAppraiseApi(data) {
    return request({
      url: '/appraise/delivery',
      data,
    });
  }

}

export default new Appraise();