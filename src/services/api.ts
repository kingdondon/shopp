import { ajax } from '../utils/ajax'
const Service = {};

[
  {
    fn: 'loginWxWeb',   //微信登录
    url: '/loginWxWeb/login.wx',
    method: 'post',
  },
  {
    fn: 'getAccountInfo',   //获取当前用户信息
    url: '/cps/api/account/getAccountInfo.wx',
    method: 'post',
  },
  {
    fn: 'getCategoryList',   //获取商品分类
    url: '/cps/api/category/getPageList.wx',
    method: 'post',
  },
  {
    fn: 'getPageList',   //获取商品列表
    url: '/cps/api/item/getPageList.wx',
    method: 'post',
  },
  {
    fn: 'getGoodsDetail',   //获取商品详情
    url: '/cps/api/item/get.wx',
    method: 'post',
  },
  {
    fn: 'getJsSdkConfig',   //获取wx配置
    url: '/cps/api/share/getShareConfig.wx',
    method: 'post',
  },
  {
    fn: 'calcDeliver',   //计算运费
    url: '/cps/api/order/calcDeliver.wx',
    method: 'post',
  },
  {
    fn: 'generate_order',   //生产订单
    url: '/cps/api/order/generate_order.wx',
    method: 'post',
  },
  {
    fn: 'pay_order',   //订单支付
    url: '/cps/api/order/pay_order.wx',
    method: 'post',
  },
  {
    fn: 'payOrderResult',   //订单结果查询
    url: '/cps/api/order/payOrderResult.wx',
    method: 'post',
  },
  {
    fn: 'get_page_order_list',   //订单列表
    url: '/cps/api/order/get_page_order_list.wx',
    method: 'post',
  },
  {
    fn: 'getOrderDetail',   //获取订单详情
    url: '/cps/api/order/getOrderDetail.wx',
    method: 'post',
  },
  {
    fn: 'updateOrder',   //修改订单状态
    url: '/cps/api/order/updateOrder.wx',
    method: 'post',
  },
  {
    fn: 'get_post_info',   //获取物流详情
    url: '/cps/api/order/get_post_info.wx',
    method: 'post',
  },
  {
    fn: 'add_shopping_cart',   //加入购物车
    url: '/cps/api/shoppingCart/add.wx',
    method: 'post',
  },
  {
    fn: 'getAccountShoppingCart',   //获取购物车列表
    url: '/cps/api/shoppingCart/getAccountShoppingCart.wx',
    method: 'post',
  },
  {
    fn: 'getH5QrCode',   //获取H5商品推广二维码
    url: '/cps/api/share/getH5QrCode.wx',
    method: 'post',
  },

].forEach(
  ({ fn, url, method = 'get', headers = {}, abs = false, direct = false, iscompanyId = false }) => {
    Service[fn] = ({
      data,
      params,
      waitting,
      error,
      customerid,
      companyId,
      query,
      urlQuery
    } = {}) => {
      let urlData = url;
      if (direct) urlData = url + '/' + customerid;
      if (iscompanyId) urlData = url + '/' + companyId;
      if (urlQuery) urlData = urlQuery;
      if (query) {
        Object.keys(query).forEach(k => {
          if (Object.prototype.toString.call(query[k]) === '[object Array]') {
            urlData =
              url +
              '?' +
              query[k].reduce((sum, item, i) => {
                if (i === query[k].length - 1) {
                  return sum + k + '=' + item;
                } else {
                  return sum + k + '=' + item + '&';
                }
              }, '');
          }
        });
      }

      return ajax({
        url: urlData,
        method,
        headers,
        data,
        params,
        waitting,
        error,
        abs
      });
    };
  }
);

export default Service;
