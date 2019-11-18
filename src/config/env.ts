let customerSec = 'QBKO7KFFy1';
let imgUrl = 'https://htkimg.xiaoxixi8.com/'
let canvasUrl = 'http://htkimg.xiaoxixi8.com/'
let baseUrl:string, imgUploadUrl, appId, appsecret, httpUrl, authorizeUrl;
let url = window.location.origin;
let href = window.location.href;
console.log(url)
let isDev = url.indexOf('dev') > -1 // 是否测试环境
if (isDev) { // 测试环境 
	baseUrl = 'https://cpspddtest.hzquwei.com';
	imgUploadUrl = baseUrl + "/image/uploadImg.web?resType=7";
	appId = 'wxcbe4dee041fafdc8';
	appsecret = 'def3c541d15a743a832178ddf212e95e';
	httpUrl = 'http://htkdevmall.315hm.com';
	authorizeUrl = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + appId + "&redirect_uri=" + encodeURIComponent(href) + "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
} else { // 正式环境  
	baseUrl = 'https://cps.xiaoxixi8.com';
	imgUploadUrl = baseUrl + "/image/uploadImg.web?resType=7";
	appId = 'wxcbe4dee041fafdc8';
	appsecret = 'def3c541d15a743a832178ddf212e95e';
	httpUrl = 'http://htkmall.315hm.com';
	authorizeUrl = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + appId + "&redirect_uri=" + encodeURIComponent(href) + "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
}
export {
	imgUrl,
	canvasUrl,
	baseUrl,
	imgUploadUrl,
	appId,
	appsecret,
	customerSec,
	httpUrl,
	authorizeUrl
}