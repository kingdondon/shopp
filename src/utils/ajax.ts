import axios from 'axios';
import { Indicator, Toast  from 'mint-ui';
import { baseUrl } from '@/config/env';
import store from 'store';
import qs from 'qs';
axios.defaults.withCredentials = true;
axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8';
import { appId } from "@/config/env";
import md5 from 'js-md5';
// let hide = null;
export const ajax = async ({
  headers,
  method,
  url,
  data,
  params,
  waitting,
  error,
  abs = false
}) => {
  if (waitting) {
    // 自定义请求等待状态
    waitting();
  } else {
    // hide = Indicator.open();

    Indicator.open({
      spinnerType: 'fading-circle'
    });
  }
  try {
    var user = store.get('userInfo');
    let headersVal = {
      ...headers
    };
    if (user) {
      const timestamp = +new Date() + 10000;
      const Signature = md5(
        `|v2-web-${timestamp}|jidpasdjaiopdjiopaio|${url}|`
      );

      headersVal.token = `v2-web-${timestamp}-${Signature}`;
      headersVal.eid = user.eid;
      headersVal.serverName = window.location.host;
    }
    let config = {
      method,
      // url: abs ? url + '?' + +new Date() : baseUrl + url,
      url: abs ? url : baseUrl + url,
      headers: headersVal,
      data,
      params
    };

    if (headersVal['Content-Type'] === 'application/x-www-form-urlencoded') {
      config.data = qs.stringify(config.data);
    }

    const { data: res } = await axios(config);

    if (abs) {
      Indicator.close()
      if (!res.success) {
        Toast({
          message: res.errorMessage,
        });
      }
      return res;
    }

    if (res.success) {
      // 成功返回
      if (!waitting) Indicator.close()
      // return res.data || res;
      return res;
    }

    if (res.status === 20006) {
      store.remove('userInfo');
      window.location.reload()
    }

    if (!waitting) Indicator.close();

    if (error) {
      console.log('122')
      await error(res);
      return res;
    } else {
      let lang = store.get('locale')
      Toast({
        message: res.errorMessage,
      });
    }
    return false;
  } catch (err) {      
    Toast &&
      Toast({
        message: 'Sorry, 网络发生了错误~'
      });
    Indicator && Indicator.close()
    return false;
  }
};

// export default ajax;
