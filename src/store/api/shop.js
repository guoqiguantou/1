import request from '@/utils/httpUtil';

class Shop {
  // 创建商品
  createShopApi (data) {
    return request ({
      url: '/union-item/item-create',
      data,
    });
  }
  // 提交询价订单
  comitInquiryApi (data) {
    return request ({
      url: '/sales/inquiry-create',
      data,
    });
  }
  //提交询价
  commitPriceApi (data) {
    return request ({
      url: '/inquiry/submit',
      data,
    });
  }
  // 新增收货地址
  addAddressApi (data) {
    return request ({
      url: '/address/add',
      data,
    });
  }
  // 更新收货地址
  updateAddressApi (data) {
    return request ({
      url: '/address/update',
      data,
    });
  }
  // 提交订单
  comitOrderApi (data) {
    return request ({
      url: '/sales/union-create',
      data,
    });
  }
  // 修改店铺
  updateShopApi (data) {
    return request ({
      url: '/shop/update',
      data,
    });
  }

  //禁用店铺
  createBanApi (shopId) {
    return request ({
      url: `/shop/ban/${shopId}`,
    });
  }
  // 查看商品详情
  getShopDetailApi (id) {
    return request ({
      url: `/union-item/load/${id}`,
      method: 'GET',
    });
  }
  // 暂存
  shopTemporaryApi (data) {
    return request ({
      url: '/union-item/item-draft',
      data,
    });
  }
  // 上架
  goodsToBanApi (data) {
    return request ({
      url: '/union-item/shelf',
      data,
    });
  }
  // 下架
  goodsToPassApi (data) {
    return request ({
      url: '/union-item/sold-out',
      data,
    });
  }
  // 保存商品编辑
  saveGoodsApi (data) {
    return request ({
      url: '/union-item/update',
      data,
    });
  }
  //启用店铺
  createPassApi (shopId) {
    return request ({
      url: `/shop/pass/${shopId}`,
    });
  }
  // 查询品牌
  getBrandListApi (data) {
    return request ({
      url: '/brand/query-page',
      data,
    });
  }
  //  查询类目
  getCategoryListApi (data) {
    return request ({
      url: '/category/find-all/without-metal',
      method: 'GET',
    });
  }
  // 查询类目属性
  getCategoryValueApi (categoryId) {
    return request ({
      url: `/category/query/${categoryId}`,
      method: 'GET',
    });
  }
  // 分页查询店铺列表
  getShopListApi (data) {
    return request ({
      url: '/union-item/query-page',
      data,
    });
  }
  // 查询店铺列表
  getAllShopListApi (data) {
    return request ({
      url: '/union-item/query-all-page',
      data,
    });
  }
}

export default new Shop ();
