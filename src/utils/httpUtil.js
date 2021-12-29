import axios from 'axios';
import { Message, Loading } from 'element-ui';
import StorageUtil from '@/utils';

let BASE_URL = 'https://dev.foyangzigateway.jushewang.com/foyangzibff';

const env = process.env.NODE_ENV;
let loadingInstance 

switch (env) {
  case 'production':
    BASE_URL = 'https://foyangzigateway.jushewang.com/foyangzibff';
    break;
  case 'test':
    BASE_URL = 'https://test.foyangzigateway.jushewang.com/foyangzibff';
    break;
  default:
    break;
}

//请求拦截器
axios.interceptors.request.use (
  function (config) {
    loadingInstance = Loading.service({ fullscreen: true });
    return config;
  },
  function (err) {
    return Promise.reject (err);
  }
);

//响应拦截器
axios.interceptors.response.use (
  function (res) {
    loadingInstance.close();
    if (res.status === 200) {
      return res;
    }
  },
  function (err) {
    Message.error('服务异常,请重试');
    console.log (err, 'error');
    return Promise.reject (err);
  }
);

const baseRequest = ({
  url,
  base_url = BASE_URL,
  data = {},
  method = 'POST',
  timeout = 10000,
  isFormData = false,
  async = false,
}) => {
  axios.defaults.headers['Content-Type'] = 'application/json';
  const token = StorageUtil.getToken ();
  if (isFormData) {
    axios.defaults.headers['Content-Type'] = 'multipart/form-data';
  }
  if (token) {
    axios.defaults.headers['x-auth-token'] = token;
  }

  if (timeout) {
    axios.defaults.timeout = timeout;
  }

  const options = {
    baseURL: base_url,
    url,
    method,
  };

  if (method === 'GET' || method === 'DELETE') {
    options.params = data;
  } else {
    options.data = data;
  }

  return axios (options)
    .then (res => {
      const {headers, data, status} = res;
      const contentType = headers['content-type'];
      if (status !== 200) {
        return Promise.reject (new Error ('服务器请求失败'));
      }
      if (contentType && contentType.indexOf ('application/json') !== -1) {
        const {retCode, retMsg} = data;
        if (retCode === 200 || retCode === 201) {
          return Promise.resolve (data);
        } else if (retCode === 202) {
          StorageUtil.clear ();
          this.$router.push ({path: '/login'});
          Message.error ('登录状态已过期,请重新登录');
          location.reload (true);
          return Promise.resolve ('登录状态已过期,请重新登录');
        } else {
          Message.error (retMsg || `接口异常:${retCode}`);
          return Promise.resolve (retMsg || `接口异常:${retCode}`);
        }
      }
      return Promise.resolve (new Error ('the response is not JSON'));
    })
    .catch (err => {
      console.log (err);
      return Promise.resolve (err);
    });
};

export {axios};
export default baseRequest;
