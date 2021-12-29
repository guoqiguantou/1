import storage from './storageUtil';

//----------storage-----------
const utils = {};
const tokenKey = '__token';
const userInfoKey = '__user_info';
const userPathKey = '__user_path';
const userAuthIdKey = '__user_auth';

//保存数据
utils.setToken = token => {
  return storage.set (tokenKey, token);
};
utils.getToken = () => {
  return storage.get (tokenKey);
};
//保存用户信息
utils.setAuth = data => {
  return storage.setJSON (userInfoKey, data);
};
// 获取用户信息
utils.getAuth = () => {
  return storage.getJSON (userInfoKey);
};

//保存用户权限id
utils.setAuthId = data => {
  return storage.setJSON (userAuthIdKey, data);
};
// 获取用户权限id
utils.getAuthId = () => {
  return storage.getJSON (userAuthIdKey);
};

//保存用户首个Path
utils.setPath = data => {
  return storage.set (userPathKey, data);
};
// 获取用户首个Path
utils.getPath = () => {
  return storage.get (userPathKey);
};

//清除storage
utils.clear = () => {
  return storage.clear ();
};
//----------storage-----------

//map 转 数组
export const convertMap2List = map => {
  const list = [];
  map.forEach ((label, value) => {
    list.push ({label, value});
  });
  return list;
};

 // 修改地区code的长度
export const transformValue = value => {
  if (!value || value.length != 12) return undefined;
  let temp = [];
  let areaparent1 = value.substring(0, 2) + "0000";
  temp.push(areaparent1);
  let areaparent2 = value.substring(0, 4) + "00";
  temp.push(areaparent2);
  let areaparent3 = value.substring(0, 6);
  temp.push(areaparent3);
  return temp;
};


// 商品类型
export const leadGoodsType = new Map ();
leadGoodsType.set ('1', '腕表');
leadGoodsType.set ('2', '包袋');
leadGoodsType.set ('3', '服饰');
leadGoodsType.set ('4', '首饰');
leadGoodsType.set ('6', '数码');
leadGoodsType.set ('7', '贵金属');
leadGoodsType.set ('5', '钻石');

export const number_format = (number, decimals, dec_point, thousands_sep) => {
  number = (number + '').replace (/[^0-9+-Ee.]/g, '');
  var n = !isFinite (+number) ? 0 : +number,
    prec = !isFinite (+decimals) ? 2 : Math.abs (decimals),
    sep = typeof thousands_sep === 'undefined' ? ',' : thousands_sep,
    dec = typeof dec_point === 'undefined' ? '.' : dec_point,
    s = '',
    toFixedFix = function (n, prec) {
      var k = Math.pow (10, prec);
      return '' + Math.ceil (Math.floor(n * k)) / k;
    };

  s = (prec ? toFixedFix (n, prec) : '' + Math.round (n)).split ('.');
  var re = /(-?\d+)(\d{3})/;
  while (re.test (s[0])) {
    s[0] = s[0].replace (re, '$1' + sep + '$2');
  }

  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array (prec - s[1].length + 1).join ('0');
  }
  return s.join (dec);
};

export const azChar=()=>{
  var arr = [];
  for (var i = 65; i < 91; i++) {
    arr.push(String.fromCharCode(i));
  }
  return arr;
}
export default utils;
