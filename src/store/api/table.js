import request from '@/utils/httpUtil';

class tableApi {
  //鉴定列表
  getAppraiseList(data) {
    return request({
      url: '/appraise/query-page',
      data,
    });
  }
  //我的售后列表
  getAfterSalesList(data) {
    return request({
      url: '/app/after-sales/union-query-page',
      data,
    });
  }

   //我的购买列表
   getOrderList (data) {
    return request ({
      url: '/sales/query-page',
      data,
    });
  }

  //销售单售后列表
  getAfterOrderList (data) {
    return request ({
      url: '/app/after-sales/query-page',
      data,
    });
  }

  //结算列表
  getSettlementList (data) {
    return request ({
      url: '/settlement-order/query-page',
      data,
    });
  }

  //线索列表
  getLeadList (data) {
    return request ({
      url: '/inside_lead/query-page',
      data,
    });
  }
}

export default new tableApi();
