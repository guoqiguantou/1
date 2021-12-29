import request from '@/utils/httpUtil';
//订单接口
class Lead {

  //关闭线索
  getLeadCloseApi(data) {
    return request({
      url: '/inside_lead/close',
      data,
    });
  }

  //线索详情
  getLeadDetailApi(id) {
    return request({
      url: `/inside_lead/detail/${id}`,
      method: 'GET',
    });
  }

  //线索转化
  convertLeadApi(data) {
    return request({
      url: '/inside_lead/convert',
      data,
    });
  }

  //跟进线索
  LeadFollowUpApi(data) {
    return request({
      url: '/inside_lead/follow-up',
      data,
    });
  }

  //修改线索
  updateLeadApi(data) {
    return request({
      url: '/inside_lead/update',
      data,
    });
  }


}

export default new Lead();