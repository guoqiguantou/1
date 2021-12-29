import request from '@/utils/httpUtil';

class Order {
  // 查询支付结果
  payResultApi (businessId) {
    return request ({
      url: `/pay-order/get-pay-result/${businessId}`,
      method: 'GET',
    });
  }
  //去支付
  toPayApi (businessId) {
    return request ({
      url: `/pay-order/to-pay/${businessId}`,
      method: 'GET',
    });
  }
  //我的购买列表
  getOrderListApi (data) {
    return request ({
      url: '/sales/query-page',
      data,
    });
  }

  //销售单售后列表
  getAfterOrderListApi (data) {
    return request ({
      url: '/app/after-sales/query-page',
      data,
    });
  }

  //关闭销售单
  closeSalesApi (data) {
    return request ({
      url: '/sales/close',
      data,
    });
  }

  //销售单确认收货
  completeSalesApi (data) {
    return request ({
      url: '/sales/complete',
      data,
    });
  }

  //售后单发货
  deliverySalesApi (data) {
    return request ({
      url: '/app/after-sales/delivery',
      data,
    });
  }

  //我的购买-销售单详情
  getSalesDetailApi (data) {
    return request ({
      url: `/sales/load/${data}`,
      method: 'GET',
    });
  }

  // 我的询价列表
  mineInqueryApi (data) {
    return request ({
      url: '/inquiry/query-my-page',
      data,
    });
  }
  // 询价处理
  InqueryProcessApi (data) {
    return request ({
      url: '/inquiry/query-handle-page',
      data,
    });
  }
  // 同意询价
  agreeApi (id) {
    return request ({
      url: `/inquiry/agreed/${id}`,
      method: 'GET',
    });
  }
  // 拒绝询价
  rejectApi (data) {
    return request ({
      url: '/inquiry/rejected',
      data,
    });
  }

  //再次发起售后
  aftersalesAddAgainApi (data) {
    return request ({
      url: '/app/after-sales/commit',
      data,
    });
  }

  //发起售后
  aftersalesCreateApi (data) {
    return request ({
      url: '/app/after-sales/create',
      data,
    });
  }
  //售后详情
  aftersalesDetailApi (data) {
    return request ({
      url: `/app/after-sales/load/${data}`,
      method: 'GET',
    });
  }
  //申请结算
  settlementOrderApi (data) {
    return request ({
      url: '/settlement-order/apply',
      method: 'POST',
      data
    });
  }
}

export default new Order ();
