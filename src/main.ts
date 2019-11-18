import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '././store/store'
import {
  Tabbar, TabItem, Toast, Indicator, Lazyload, CellSwipe
} from 'mint-ui'
import BottomSolid from '@/components/BottomSolid';
import { Tabs, Tab, Cell, Header, Swipe, SwipeItem } from 'we-vue'
import { Modal as ivModal, Button as ivButton, Timeline as ivTimeline, TimelineItem as ivTimelineItem } from 'iview';
import { Style, Upload, Switch, Scroll, ScrollNav, TabBar, slide } from 'cube-ui'
import { LoadMore, BottomSheet } from 'muse-ui'
import Helpers from 'muse-ui/lib/Helpers';
import VueClipboard from 'vue-clipboard2';
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
import './utils/rem'
import 'iview/dist/styles/iview.css';
import 'mint-ui/lib/style.css';
import 'we-vue/lib/style.css' // 按需引入时也需要引入此样式
import 'muse-ui/dist/muse-ui.css';
import './assets/css/common.less';
import Store from 'store'
import queryString from 'query-string'
import { authorizeUrl, customerSec } from "@/config/env";
import { baseColor } from "@/config/appConfig";
import { wxConfig } from '@/utils/wxConfig'
import Bridge from './utils/setupWebViewJavascriptBridge';
import AndroidBridge from './utils/setupAndroidJavascriptBridge';
var options = {
  fullscreenEl: false, //关闭全屏按钮
  tapToClose: true,
  closeEl: false,
  shareEl: false,
  shareButtons: [
    { id: 'download', label: '图片下载', url: '{{raw_image_url}}', download: true }
  ],
}

//mint ui 
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(CellSwipe.name, CellSwipe)
Vue.config.productionTip = false
//iview ui 
Vue.component('ivModal', ivModal);
Vue.component('ivButton', ivButton);
Vue.component('ivTimeline', ivTimeline);
Vue.component('ivTimelineItem', ivTimelineItem);
//muse ui 
Vue.use(LoadMore);
Vue.use(BottomSheet);
Vue.use(Helpers);
//weUi
Vue.use(Tabs)
Vue.use(Tab)
Vue.use(Cell)
Vue.use(TabBar)
Vue.use(Header)
Vue.use(Swipe)
Vue.use(SwipeItem)
// cube ui
Vue.use(slide)
Vue.use(Upload)
Vue.use(Switch)
Vue.use(Scroll)
Vue.use(ScrollNav)
Vue.use(Lazyload)
Vue.use(Style)
//components
Vue.component('BottomSolid', BottomSolid);


Vue.use(VueClipboard)
Vue.prototype.$toast = Toast;
Vue.prototype.$indicator = Indicator;
Vue.prototype.$wxConfig = wxConfig;
Vue.prototype.$bridge = Bridge;
Vue.prototype.$androidbridge = AndroidBridge;
// Store.remove('userInfo')
Store.set('userInfo', { "eid": "sJnFMLLpBxVMwVBB0KctEvNrh1ZATf", "sid": "52b30a017ae84369bd750fd4b409d85d", "token": "f2b598b3100f440e922dd767774a0247", "mobile": "", "nickname": "臻", "gender": false, "avatar": "http://thirdwx.qlogo.cn/mmopen/vi_32/8MsEvnIsdtuxKluRmkoicibnIW0IdDbbYGWbEnAPVEBBVonFkDYxGeNpM2gWWqRpNCmMiakBhXzQicUDdqoicI3ib2EQ/132", "inviteCode": "DUH5DJ", "cacheStatus": 0, "id": 29521, "customerId": 2, "sex": false, "telephone": "", "feature": "", "headImg": "http://thirdwx.qlogo.cn/mmopen/vi_32/8MsEvnIsdtuxKluRmkoicibnIW0IdDbbYGWbEnAPVEBBVonFkDYxGeNpM2gWWqRpNCmMiakBhXzQicUDdqoicI3ib2EQ/132", "udf1": 0, "createTime": "2019-09-23 11:03:25", "version": 1, "inviterId": 0, "relationCode": "0|", "teamNumber": 0, "directNumber": 0, "level": 0, "wechatNo": "", "vip": false, "admin": false, "test": false, "showInviteButton": false, "inflowAccountId": 0, "inflowCustomerId": 0, "featureMap": {} })
Vue.use(preview, options)
const { platom, code } = queryString.parse(location.search);
Vue.prototype.$isH5 = platom === 'h5';
Vue.prototype.$isIos = platom === 'ios';
Vue.prototype.$isAndroid = platom === 'android';
Vue.prototype.$baseColor = baseColor;
Vue.prototype.$Store = Store;
// if (!platom) {
//   window.alert('platom未配置')
// }
// if (platom === 'h5') {
//   router.beforeEach((to, from, next) => {
//     let user = Store.get('userInfo');
//     if (!user) {
//       if (code) {
//         store.dispatch('mine/getUserInfo', {
//           code,
//           customerSec
//         }, { root: true })
//         next()
//       } else {
//         window.location.href = authorizeUrl;
//       }
//     } else {
//       next()
//     }
//   });
// }

let vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default vue
