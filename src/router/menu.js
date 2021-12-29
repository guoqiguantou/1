/// showNav是否展示在菜单导航
/// authId 权限id
const SiderNav = [
  {
    path: '/',
    name: 'home',
    component: () => import ('@/components/layout'),
    meta: {title: '主页', icon: 'ios-analytics', showNav: true},
    children: [
      {
        path: '/',
        name: 'home',
        meta: {title: '主页'},
        component: () => import ('@/views/Home'),
      },
      {
        path: 'list',
        name: 'list',
        meta: {title: '微软产品激活信息列表'},
        component: () => import ('@/views/List'),
      },
      {
        path: 'config',
        name: 'config',
        meta: {title: '数据配置管理'},
        component: () => import ('@/views/Config'),
      }
    ],
  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   meta: {title: 'login'},
  //   component: () => import ('@/views/Login'),
  // },
  // {
  //   path: '/user',
  //   name: 'user',
  //   component: () => import ('@/components/layout'),
  //   meta: {showNav: false},
  //   children: [
  //     {
  //       path: 'user-acount',
  //       name: 'user-acount',
  //       meta: {title: 'user'},
  //       component: () => import ('@/views/User'),
  //     },
  //   ],
  // },
  {
    path: '*',
    name: '404',
    meta: {title: '404'},
    component: () => import ('@/components/errors/404'),
  },
];
///配置权限id对应的路径
const authPathMap = new Map ();
authPathMap.set ('1001', '/list');
authPathMap.set ('1002', '/all-list');
authPathMap.set ('2001', 'order/order-inquiry');
authPathMap.set ('2002', 'order/order-Processing');
authPathMap.set ('2003', 'order/order-purchaseList');
authPathMap.set ('2004', 'order/order-sell');
authPathMap.set ('2005', 'order/order-afterSale');
authPathMap.set ('2006', 'order/order-settlement');
authPathMap.set ('3001', 'appraisal/appraisal-list');
authPathMap.set ('4001', 'lead/lead-list');
const noAuthPathArr = []; //['/all-list'];

export {SiderNav, authPathMap, noAuthPathArr};
