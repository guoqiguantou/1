import request from '@/utils/httpUtil';

class Tools {
  // 分页查询品牌信息
  getBrandListApi (data) {
    return request ({
      url: '/brand/page-query?startIndex=1&pageSize=20',
      data,
      method: 'GET',
    });
  }

  //获取七牛云令牌
  getQiniuTokenApi (data) {
    return request ({
      url: '/storage/get-image-token',
      data,
      method: 'GET',
    });
  }

  //查询快递单号
  getExpressApi(data){
    return request ({
      url: `/express/get/${data}`,
      method: 'GET',
    });
  }

  //获取城市
  getCityApi(data){
    return request ({
      url: '/region/query-city',
      data,
    });
  }

}

export default new Tools ();
