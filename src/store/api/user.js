import request from '@/utils/httpUtil';

class User {
  // 获取验证码
  getCodeApi (phone) {
    return request ({
      url: `/sms/captcha/send/${phone}`,
    });
  }
  // 获取用户详情
  getUserDetailApi (userId) {
    return request ({
      url: `/user/detail/${userId}`,
      method: 'GET',
    });
  }
//  删除用户地址
delUserAddressApi (data) {
  return request ({
    url: '/address/delete',
    data,
  });
}
  // 验证码登录
  loginSmsApi (data) {
    return request ({
      url: '/user/union-login',
      data,
    });
  }
  // 注册登录
  loginRegisterApi (data) {
    return request ({
      url: '/user/login',
      data,
    });
  }

  // 密码登录
  loginPassApi (data) {
    return request ({
      url: '/user/login',
      data,
    });
  }

  //修改密码
  updatePassApi (data) {
    return request ({
      url: '/user/change-password',
      data,
    });
  }

  // 创建用户
  createUserApi (data) {
    return request ({
      url: '/user/create',
      data,
    });
  }

  //禁用用户
  banUserApi (userId) {
    return request ({
      url: `/user/ban/${userId}`,
    });
  }

  //启用用户
  passUserApi (userId) {
    return request ({
      url: `/user/pass/${userId}`,
    });
  }

  // 授权????
  authorizeUserApi (data) {
    return request ({
      url: '/user/authorize',
      data: data,
    });
  }

  //分页查询用户列表（查询所有用户）
  getUserListApi (data) {
    return request ({
      url: '/user/page-query',
      data,
      method: 'GET',
    });
  }

  //分页查询店铺用户列表（查询店铺用户）
  getShopUserListApi (data) {
    return request ({
      url: '/user/shop-user/page-query',
      data,
      method: 'GET',
    });
  }
  //注册创建商户角色
  createRoleApi (data) {
    return request ({
      url: '/role/apply/submit',
      data,
    });
  }

  //查询角色申请信息
  RoleMsgApi (data) {
    return request ({
      url: '/role/apply/query',
      data,
      method: 'GET',
    });
  }
  //获取用户权限
  getUserMenuListApi (data) {
    return request ({
      url: '/user/get-menu-list',
      data,
      method: 'GET',
    });
  }

  //编辑用户账户
  getUpdatePaymentInfoApi (data) {
    return request ({
      url: '/user/update-payment-info',
      data,
    });
  }

  //添加用户账户
  getAddPaymentInfoApi (data) {
    return request ({
      url: '/user/add-payment-info',
      data,
    });
  }

  //编辑用户信息 
  getEditUserApi (data) {
    return request ({
      url: '/user/edit',
      data,
    });
  }
  //获取用户信息 
  getUserApi (data) {
    return request ({
      url: '/user/detail',
      data,
      method: 'GET',
    });
  }
  //绑定新手机号
  changePhoneApi (data) {
    return request ({
      url: '/user/change-phone',
      data
    });
  }

}

export default new User ();
