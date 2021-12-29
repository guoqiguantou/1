import request from '@/utils/httpUtil';

class Sales {
  // 我的出售列表
  getSalesListApi(data) {
    return request({
      url: '/sales/query-page-union',
      data,
    });
  }

  // 查看 销售单 详情
  salesDetailApi(id) {
    return request({
      url: `/sales/load-union/${id}`,
      method: 'GET',
    });
  }
  // 发货
  salesDeliveryApi(data) {
    return request({
      url: '/sales/union-delivery',
      data,
    });
  }
  //我的售后列表
  getAfterSalesListApi(data) {
    return request({
      url: '/app/after-sales/union-query-page',
      data,
    });
  }

}

export default new Sales();
