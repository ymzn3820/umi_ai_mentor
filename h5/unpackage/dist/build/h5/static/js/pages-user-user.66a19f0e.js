(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-user"],{"0321":function(t,e,n){"use strict";n.r(e);var a=n("1b88"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"11b4":function(t,e,n){"use strict";(function(t){n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("e9c4");var i=a(n("ade3")),o=n("cf61"),r=n("88f6"),s=a(n("bff3")),c={data:function(){var e;return e={userInfo:{role:""},cardName:"",isClick:!0,show:!1,avatarUrl:""},(0,i.default)(e,"userInfo",JSON.parse(uni.getStorageSync("userInfo"))),(0,i.default)(e,"headPic1",t.baseImg+"/xcx/com/message_center/user充值中心.png"),(0,i.default)(e,"headPic2",t.baseImg+"/xcx/com/message_center/user卡密兑换.png"),(0,i.default)(e,"headPic3",t.baseImg+"/xcx/com/message_center/user我要分销.png"),(0,i.default)(e,"payImg",t.baseImg+"/xcx/com/message_center/充值.png"),(0,i.default)(e,"rightImg",t.baseImg+"/xcx/com/message_center/%E6%9B%B4%E5%A4%9A.png"),(0,i.default)(e,"backImg",t.baseImg+"/xcx/com/message_center/%E5%88%86%E9%94%80.png"),(0,i.default)(e,"backImg2",t.baseImg+"/xcx/com/message_center/%E4%BC%9A%E5%91%98.png"),(0,i.default)(e,"shareImg",t.baseImg+"/xcx/5996afad-f926-4f65-b0e7-edda0649642c.jpg"),(0,i.default)(e,"memberImg",t.baseImg+"/xcx/4e20e4ad-b3e6-4c2c-bc9f-82a58ba63714.jpg"),(0,i.default)(e,"countImg",t.baseImg+"/xcx/ca60327f-3a7d-44ee-906c-5f193dab9a7e.jpg"),(0,i.default)(e,"fxImg",t.baseImg+"/xcx/com/message_center/usergift.png"),(0,i.default)(e,"orderImg",t.baseImg+"/xcx/0fbfb940-6e78-4e77-951f-8bb33839406b.jpg"),(0,i.default)(e,"roleImg",t.baseImg+"/xcx/com/message_center/user创作中心.png"),(0,i.default)(e,"companyImg",t.baseImg+"/xcx/59bb082c-9d28-41cb-aa5b-c787b259cfcb.jpg"),(0,i.default)(e,"keyImg",t.baseImg+"/xcx/5e65b669-7914-4e18-ad3d-40c96fc3a5e4.jpg"),(0,i.default)(e,"openImg",t.baseImg+"/xcx/8940eb96-25e1-43d8-9dbe-5bff09523c1e.jpg"),(0,i.default)(e,"facImg",t.baseImg+"/xcx/com/message_center/user服务商.png"),(0,i.default)(e,"historyImg",t.baseImg+"/xcx/b31cf730-b4ed-4471-9504-66bc8e862182.jpg"),(0,i.default)(e,"bussImg",t.baseImg+"/xcx/2f504e0c-ca6c-4932-ad6b-5117cb2e37bd.jpg"),(0,i.default)(e,"adImg",t.baseImg+"/xcx/3fd32c44-523b-44db-a943-6e3954861339.jpg"),(0,i.default)(e,"qsImg",t.baseImg+"/xcx/92c00dde-1e07-4e6f-b9d0-b6930683da7c.jpg"),(0,i.default)(e,"versionImg",t.baseImg+"/xcx/08c60d00-5eb8-4453-ad08-5be4e63b914d.jpg"),(0,i.default)(e,"setImg",t.baseImg+"/xcx/bd44ea1b-5cce-49e9-962a-9ba82fb5d11d.jpg"),(0,i.default)(e,"infoImg",t.baseImg+"/xcx/a18146ee-df32-4ecd-94d4-779dc78e47ab.jpg"),(0,i.default)(e,"productImg",t.baseImg+"/xcx/0f78ff2c-ef4e-44a7-9874-8ed66533f18c.jpg"),(0,i.default)(e,"newsImg",t.baseImg+"/xcx/086158e9-d48d-4e7d-80d5-98b10d68837d.jpg"),(0,i.default)(e,"knowImg",t.baseImg+"/xcx/6322b018-c738-42dd-82ab-c68dcb699e72.jpg"),(0,i.default)(e,"companyInfoImg",'background-image: url("'+t.baseImg+'/xcx/86a3d5f4-1184-4a31-8012-85fa8ce84d0a.jpg")'),(0,i.default)(e,"vipback",t.baseImg+"/xcx/e72c490f-ed32-4b8c-aa18-159eae09a0f8.jpg"),(0,i.default)(e,"vipStart",t.baseImg+"/xcx/cfee4f80-fd59-4f33-8933-be9f73b8723d.jpg"),(0,i.default)(e,"chatImg",t.baseImg+"/xcx/com/message_center/user微信.png"),(0,i.default)(e,"miniproImg",t.baseImg+"/xcx/com/message_center/小程序.png"),(0,i.default)(e,"h5Img",t.baseImg+"/xcx/com/message_center/h5.png"),(0,i.default)(e,"pcImg",t.baseImg+"/xcx/com/message_center/pc 1.png"),(0,i.default)(e,"companyName",""),(0,i.default)(e,"phone",""),(0,i.default)(e,"job",""),(0,i.default)(e,"isCompany",!1),(0,i.default)(e,"isLevel",null),(0,i.default)(e,"level",0),e},components:{Title:s.default},onLoad:function(){},onShow:function(){this.getInfo(),this.getQrCode(),this.getCompanyList(),this.serveInfo()},methods:{getQrCode:function(){(0,r.getQrCode)({q_type:"1"}).then((function(t){2e4==t.code&&uni.setStorageSync("qrCode",t.data)})).catch((function(t){}))},getCompanyList:function(){var t=this;(0,r.getCompanyList)().then((function(e){2e4==e.code?null!=e.data&&e.data.length>0&&(t.isCompany=!0):t.$api.msg(e.msg)})).catch((function(e){t.$api.msg("获取团队信息失败")}))},goToLogin:function(){uni.navigateTo({url:"/pages/login/login"})},buyVip:function(){"guess"==this.userInfo.role?uni.navigateTo({url:"/pages/login/login"}):uni.navigateTo({url:"/pages/user/vip/vip"})},myInvite:function(){this.$api.msg("正在开发中")},myShare:function(){uni.navigateTo({url:"/childPage/distribution/share"})},myDistribution:function(){"guess"==this.userInfo.role?uni.navigateTo({url:"/pages/login/login"}):uni.navigateTo({url:"/childPage/distribution/distribution"})},cooperate:function(){uni.navigateTo({url:"/pages/user/cooperate/cooperate"})},facilitator:function(){"guess"==this.userInfo.role?uni.navigateTo({url:"/pages/login/login"}):(console.log(this.isLevel,8888),3!=this.userInfo.d_level?uni.navigateTo({url:"/childPage/facilitator/signin?level="+this.level}):uni.navigateTo({url:"/childPage/facilitator/service"}))},goChat:function(){uni.navigateTo({url:"/pages/user/history/main_history"})},checkCount:function(){uni.navigateTo({url:"/pages/user/count/count"})},checkNotice:function(){uni.navigateTo({url:"/pages/notice/notice"})},checkQuest:function(){uni.navigateTo({url:"/childPage/answer/answer"})},checkVersion:function(){uni.navigateTo({url:"/childPage/version/version"})},myOrder:function(){uni.navigateTo({url:"/pages/user/order/order"})},myRole:function(){"guess"==this.userInfo.role?uni.navigateTo({url:"/pages/login/login"}):uni.navigateTo({url:"/childPage/role/role"})},myOpen:function(){"guess"==this.userInfo.role?uni.navigateTo({url:"/pages/login/login"}):uni.navigateTo({url:"/childPage/open/open"})},myCompany:function(){"guess"==this.userInfo.role?uni.navigateTo({url:"/pages/login/login"}):this.isCompany?uni.navigateTo({url:"/childCont/company/company_list"}):uni.navigateTo({url:"/childCont/company/know_list"})},openKey:function(){this.show=!0},checkSet:function(){uni.navigateTo({url:"/pages/user/set/set"})},closeKey:function(){this.cardName="",this.show=!1},changeKey:function(){var t=this;if(""!=this.cardName){if(0==this.isClick)return!1;this.isClick=!1;var e={activate_code:this.cardName,user_id:this.userInfo.user_id};(0,r.cardChange)(e).then((function(e){2e4==e.code?(uni.showToast({title:"提交成功",icon:"success",duration:1500}),t.cardName="",t.show=!1,t.isClick=!0,t.getInfo()):(t.isClick=!0,t.$api.msg(e.msg))})).catch((function(e){t.isClick=!0,t.$api.msg("兑换失败")}))}else this.$api.msg("卡密不能为空")},getInfo:function(){var e=this;(0,o.getUserInfo)().then((function(n){console.log(n,320),2e4==n.code?(e.userInfo=n.data,e.avatarUrl=t.baseImg+"/"+n.data.avatar_url,uni.setStorageSync("memberInfo",JSON.stringify(n.data)),uni.setStorageSync("avatarUrl",n.data.avatar_url)):e.$api.msg(n.msg)})).catch((function(t){console.log(t,320),e.$api.msg("获取信息失败！")}))},serveInfo:function(){var t=this,e=this.userInfo.role;e||(0,r.OperatorStatistics)().then((function(e){2e4==e.code?t.isLevel=e.data.status:t.$api.msg(e.msg)})).catch((function(e){t.$api.msg("获取信息失败！")}))},addInfo:function(){"guess"==this.userInfo.role?uni.navigateTo({url:"/pages/login/login"}):uni.navigateTo({url:"/pages/user/info/info"})},myLink:function(){window.location.href="https://mp.weixin.qq.com/s/13GVWgKQKoNIiifMcyImCg"},goCompany:function(){"guess"==this.userInfo.role?uni.navigateTo({url:"/pages/login/login"}):uni.navigateTo({url:"/childCont/company/add_info?companyName="+this.companyName+"&phone="+this.phone+"&job="+this.job})}}};e.default=c}).call(this,n("c8ba"))},1842:function(t,e,n){"use strict";n.r(e);var a=n("be26"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"1b88":function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("b047")),o={name:"u-navbar",mixins:[uni.$u.mpMixin,uni.$u.mixin,i.default],data:function(){return{}},methods:{leftClick:function(){this.$emit("leftClick"),this.autoBack&&uni.navigateBack()},rightClick:function(){this.$emit("rightClick")}}};e.default=o},"32a2":function(t,e,n){"use strict";n.r(e);var a=n("fff7"),i=n("4a3e");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("d0c1");var r=n("f0c5"),s=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"461f85b6",null,!1,a["a"],void 0);e["default"]=s.exports},"32a5":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".heads[data-v-300192b0]{\n  /* position: fixed; */\n  /* background-color: #bfa; */\n  /* background: transparent; */\n  /* height: 516upx; */\n  /* position: absolute; */\n  /* width: 375px; */}",""]),t.exports=e},"3fee":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={uStatusBar:n("2c68").default,uIcon:n("b322").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-navbar"},[t.fixed&&t.placeholder?n("v-uni-view",{staticClass:"u-navbar__placeholder",style:{height:t.$u.addUnit(t.$u.getPx(t.height)+t.$u.sys().statusBarHeight,"px")}}):t._e(),n("v-uni-view",{class:[t.fixed&&"u-navbar--fixed"]},[t.safeAreaInsetTop?n("u-status-bar",{attrs:{bgColor:t.bgColor}}):t._e(),n("v-uni-view",{staticClass:"u-navbar__content",class:[t.border&&"u-border-bottom"],style:{height:t.$u.addUnit(t.height),backgroundColor:t.bgColor}},[n("v-uni-view",{staticClass:"u-navbar__content__left",attrs:{"hover-class":"u-navbar__content__left--hover","hover-start-time":"150"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.leftClick.apply(void 0,arguments)}}},[t._t("left",[t.leftIcon?n("u-icon",{attrs:{name:t.leftIcon,size:t.leftIconSize,color:t.leftIconColor}}):t._e(),t.leftText?n("v-uni-text",{staticClass:"u-navbar__content__left__text",style:{color:t.leftIconColor}},[t._v(t._s(t.leftText))]):t._e()])],2),t._t("center",[n("v-uni-text",{staticClass:"u-line-1 u-navbar__content__title",style:[{width:t.$u.addUnit(t.titleWidth)},t.$u.addStyle(t.titleStyle)]},[t._v(t._s(t.title))])]),t.$slots.right||t.rightIcon||t.rightText?n("v-uni-view",{staticClass:"u-navbar__content__right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.rightClick.apply(void 0,arguments)}}},[t._t("right",[t.rightIcon?n("u-icon",{attrs:{name:t.rightIcon,size:"20"}}):t._e(),t.rightText?n("v-uni-text",{staticClass:"u-navbar__content__right__text"},[t._v(t._s(t.rightText))]):t._e()])],2):t._e()],2)],1)],1)},o=[]},"4a3e":function(t,e,n){"use strict";n.r(e);var a=n("11b4"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"54ff":function(t,e,n){"use strict";var a=n("b163"),i=n.n(a);i.a},"5ca8":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-461f85b6]{background:linear-gradient(261deg,#f2f0fb,#f1f9fe 52.84%,#f9fcff)}body.?%PAGE?%[data-v-461f85b6]{background:linear-gradient(261deg,#f2f0fb,#f1f9fe 52.84%,#f9fcff)}.user-section[data-v-461f85b6]{width:100%;height:%?516?%}.bg_img[data-v-461f85b6]{width:100%;height:%?516?%}.user_login[data-v-461f85b6]{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:%?0?% %?32?%}.user_login_title[data-v-461f85b6]{font-style:normal;font-weight:500;font-size:%?34?%;line-height:%?48?%;padding-bottom:%?40?%;color:#000}.user_login_any[data-v-461f85b6]{width:100%;display:flex;justify-content:space-between;align-items:center;padding:%?20?% 0}.user_login_msg[data-v-461f85b6]{\n  /* width: 444upx; */height:%?142?%;display:flex;align-items:center}.user_title[data-v-461f85b6]{margin-left:%?24?%}.nickname[data-v-461f85b6]{width:%?180?%;font-style:normal;font-weight:500;font-size:%?36?%;line-height:%?50?%;color:#333;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-left:%?32?%}.tokens[data-v-461f85b6]{font-style:normal;font-weight:400;font-size:%?28?%;line-height:%?40?%;color:#969699;margin-left:%?32?%}.user_login_icon[data-v-461f85b6]{width:%?120?%;height:%?120?%;border-radius:50%}.user_set[data-v-461f85b6]{text-align:center}.user_set .user_set_icon[data-v-461f85b6]{width:%?48?%;height:%?48?%}.user_set .user_set_text[data-v-461f85b6]{color:#000;font-size:%?26?%}.cont_head[data-v-461f85b6]{padding:0 %?32?%;margin-top:%?39?%;display:flex;margin-bottom:%?24?%}.cont_head .cont_l[data-v-461f85b6]{width:%?260?%;height:%?198?%;border-radius:%?26?%;background:#fff;margin-right:%?22?%}.cont_head .cont_l .l_up[data-v-461f85b6]{color:#1f64ff;font-size:%?30?%;font-weight:500;margin:%?44?% 0 %?24?% %?24?%}.cont_head .cont_l .l_dowm[data-v-461f85b6]{color:#000;font-size:%?26?%;margin-left:%?24?%}.cont_head .cont_r[data-v-461f85b6]{padding:%?32?% %?36?%;width:%?472?%;border-radius:%?16?%;background:#fff;display:flex;justify-content:space-around}.cont_head .cont_r .r_item[data-v-461f85b6]{text-align:center}.cont_head .cont_r .r_item .r_pic[data-v-461f85b6]{width:%?80?%;height:%?80?%}.cont_head .cont_r .r_item .r_text[data-v-461f85b6]{color:#000;font-size:%?26?%}.user_vip[data-v-461f85b6]{width:100%;height:%?100?%;margin:%?20?% 0 %?20?% 0;display:flex;justify-content:space-between;align-items:center;padding:0 %?28?%;background:#f4d398;border-radius:%?16?%;color:#f0f8ff}.user_vip_left[data-v-461f85b6]{display:flex;align-items:center}.key_cont[data-v-461f85b6]{width:100%;background-color:#fff;border-radius:%?20?%;\n  /* padding: 0upx 0 0 0; */display:flex;flex-direction:column;align-items:center;justify-content:center}.title[data-v-461f85b6]{font-weight:500;font-size:%?32?%;line-height:%?48?%;color:#333;margin-bottom:%?32?%}.user_link[data-v-461f85b6]{width:100%;margin-bottom:%?15?%}.user_link .link_cont .cont[data-v-461f85b6]{width:100%;display:flex;align-items:center}.user_link .link_cont .cont .box[data-v-461f85b6]{width:%?348?%;height:%?128?%;position:relative}.user_link .link_cont .cont .link_img[data-v-461f85b6]{width:100%;height:100%}.user_link .link_cont .cont .cont_l[data-v-461f85b6]{flex-direction:column;padding:%?26?% %?24?%;position:absolute;top:0;left:0;display:flex;width:100%}.user_link .link_cont .cont .cont_l .l_top[data-v-461f85b6]{display:flex;align-items:center;flex-direction:row}.user_link .link_cont .cont .cont_l .l_top .top_text[data-v-461f85b6]{font-size:%?28?%;font-weight:520;color:#333;padding-right:%?15?%}.user_link .link_cont .cont .cont_l .l_top .right_img[data-v-461f85b6]{width:%?24?%;height:%?24?%}.user_link .link_cont .cont .cont_l .l_btn[data-v-461f85b6]{color:#ad9245;font-size:%?22?%;font-weight:400;padding-top:%?15?%}.cont_user[data-v-461f85b6]{padding:%?0?% %?32?%;margin-bottom:%?16?%}.cont_user .cont_ul[data-v-461f85b6]{padding:%?22?%;background:#fff;border-radius:%?14?%}.cont_user .cont_ul .user_tit[data-v-461f85b6]{color:#333;font-size:%?30?%;font-style:normal;font-weight:520;line-height:150%}.cont_user .cont_ul .user_icon[data-v-461f85b6]{display:flex;justify-content:flex-start;align-items:center;flex-wrap:wrap}.cont_user .cont_ul .user_icon .icon_list[data-v-461f85b6]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:%?20?% 0 %?10?% 0;width:25%}.cont_user .cont_ul .user_icon .icon_list .icon_img[data-v-461f85b6]{width:%?48?%;height:%?48?%}.cont_user .cont_ul .user_icon .icon_list .icon_title[data-v-461f85b6]{color:#333;font-size:%?24?%;font-style:normal;font-weight:400;line-height:%?36?%;margin-top:%?12?%}.company_info[data-v-461f85b6]{width:100%;height:%?800?%;background-size:100% 100%;padding-top:%?200?%}.company_info .chat_text[data-v-461f85b6]{width:100%;padding:%?20?% 0}.company_info .chat_text .text_cont[data-v-461f85b6]{display:flex;align-items:center;margin-bottom:%?10?%;width:100%}.company_info .chat_text .text_cont .text_l[data-v-461f85b6]{color:#ff0101;font-size:%?22?%;font-style:normal;font-weight:400;line-height:%?26?%;margin-right:%?5?%}.company_info .chat_text .text_cont .text_r[data-v-461f85b6]{color:#333;text-align:center;font-size:%?24?%;font-style:normal;font-weight:530;line-height:%?26?%}.company_info .chat_btn[data-v-461f85b6]{width:100%;display:flex;align-items:center;justify-content:center;background:#1f64ff;border-radius:%?12?%;line-height:%?90?%;font-style:normal;font-weight:500;font-size:%?34?%;color:#fff}.company_info .chat_btn[data-v-461f85b6]:active{opacity:.5}.head[data-v-461f85b6]{width:100%;height:%?120?%;position:relative;margin-bottom:%?25?%}.head .head_img[data-v-461f85b6]{width:100%;height:%?120?%}.head .head_cont[data-v-461f85b6]{width:100%;display:flex;flex-direction:column;position:absolute;top:%?45?%;left:%?30?%}.head .head_cont .cont_top[data-v-461f85b6]{display:flex;align-items:flex-end}.head .head_cont .cont_top .cont_img[data-v-461f85b6]{width:%?32?%;height:%?26?%;margin-right:%?10?%}.head .head_cont .cont_top .top_text[data-v-461f85b6]{color:#fdd995;font-size:%?30?%;font-style:normal;font-weight:500;line-height:%?30?%}.head .head_cont .head_desc[data-v-461f85b6]{display:flex;align-items:flex-end}.head .head_cont .head_desc .desc_right[data-v-461f85b6]{color:#f9eecb;font-size:%?22?%;font-style:normal;font-weight:500;line-height:%?45?%}.head .right_cont[data-v-461f85b6]{display:flex;align-items:center;justify-content:center;width:%?170?%;height:%?60?%;border-radius:%?50?%;background:linear-gradient(136deg,#fdeabf,#fdd892);position:absolute;top:%?30?%;right:%?30?%}.head .right_cont .cont_text[data-v-461f85b6]{color:#754a1d;font-size:%?26?%;font-style:normal;font-weight:500;line-height:%?32?%}.head .right_cont .right_img[data-v-461f85b6]{width:%?28?%;height:%?28?%;margin-left:%?10?%}",""]),t.exports=e},6218:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-d7d0f5be], uni-scroll-view[data-v-d7d0f5be], uni-swiper-item[data-v-d7d0f5be]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-navbar--fixed[data-v-d7d0f5be]{position:fixed;left:0;right:0;top:0;z-index:11}.u-navbar__content[data-v-d7d0f5be]{display:flex;flex-direction:row;align-items:center;height:44px;position:relative;justify-content:center;background-size:100% 100%}.u-navbar__content__left[data-v-d7d0f5be], .u-navbar__content__right[data-v-d7d0f5be]{padding:0 13px;position:absolute;top:0;bottom:0;display:flex;flex-direction:row;align-items:center}.u-navbar__content__left[data-v-d7d0f5be]{left:0}.u-navbar__content__left--hover[data-v-d7d0f5be]{opacity:.7}.u-navbar__content__left__text[data-v-d7d0f5be]{font-size:15px;margin-left:3px}.u-navbar__content__title[data-v-d7d0f5be]{text-align:center;font-size:16px;color:#303133}.u-navbar__content__right[data-v-d7d0f5be]{right:0}.u-navbar__content__right__text[data-v-d7d0f5be]{font-size:15px;margin-left:3px}',""]),t.exports=e},"81bc":function(t,e,n){"use strict";var a=n("904a"),i=n.n(a);i.a},"904a":function(t,e,n){var a=n("6218");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("93c5c6e4",a,!0,{sourceMap:!1,shadowMode:!1})},b047:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var a={props:{safeAreaInsetTop:{type:Boolean,default:uni.$u.props.navbar.safeAreaInsetTop},placeholder:{type:Boolean,default:uni.$u.props.navbar.placeholder},fixed:{type:Boolean,default:uni.$u.props.navbar.fixed},border:{type:Boolean,default:uni.$u.props.navbar.border},leftIcon:{type:String,default:uni.$u.props.navbar.leftIcon},leftText:{type:String,default:uni.$u.props.navbar.leftText},rightText:{type:String,default:uni.$u.props.navbar.rightText},rightIcon:{type:String,default:uni.$u.props.navbar.rightIcon},title:{type:[String,Number],default:uni.$u.props.navbar.title},bgColor:{type:String,default:uni.$u.props.navbar.bgColor},titleWidth:{type:[String,Number],default:uni.$u.props.navbar.titleWidth},height:{type:[String,Number],default:uni.$u.props.navbar.height},leftIconSize:{type:[String,Number],default:uni.$u.props.navbar.leftIconSize},leftIconColor:{type:String,default:uni.$u.props.navbar.leftIconColor},autoBack:{type:Boolean,default:uni.$u.props.navbar.autoBack},titleStyle:{type:[String,Object],default:uni.$u.props.navbar.titleStyle}}};e.default=a},b163:function(t,e,n){var a=n("32a5");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("336f78b0",a,!0,{sourceMap:!1,shadowMode:!1})},be26:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{}},props:{title:String},methods:{rightClick:function(){console.log("rightClick")},leftClick:function(){console.log("leftClick")}}};e.default=a},bff3:function(t,e,n){"use strict";n.r(e);var a=n("fcf0"),i=n("1842");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("54ff");var r=n("f0c5"),s=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"300192b0",null,!1,a["a"],void 0);e["default"]=s.exports},d0c1:function(t,e,n){"use strict";var a=n("d42f"),i=n.n(a);i.a},d42f:function(t,e,n){var a=n("5ca8");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("4ba334d4",a,!0,{sourceMap:!1,shadowMode:!1})},fcf0:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={uNavbar:n("fe03").default},i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"heads"},[e("u-navbar",{attrs:{title:this.title,titleStyle:{"font-weight":"550",height:"100upx","font-size":"34upx"},bgColor:"#fff",placeholder:!0}},[e("v-uni-view",{staticClass:"u-nav-slot",attrs:{slot:"left"},slot:"left"})],1)],1)},o=[]},fe03:function(t,e,n){"use strict";n.r(e);var a=n("3fee"),i=n("0321");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("81bc");var r=n("f0c5"),s=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"d7d0f5be",null,!1,a["a"],void 0);e["default"]=s.exports},fff7:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={uModal:n("89e1").default,uInput:n("0beb").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{background:"linear-gradient(261deg, #F2F0FB 0%, #F1F9FE 52.84%, #F9FCFF 100%)"}},[n("v-uni-view",{staticClass:"user_login"},[n("v-uni-view",{staticClass:"user_login_any"},[n("v-uni-view",{staticClass:"user_login_msg"},[n("v-uni-image",{staticClass:"user_login_icon",attrs:{src:t.avatarUrl,mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addInfo.apply(void 0,arguments)}}}),"guess"==t.userInfo.role?n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goToLogin.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"nickname"},[t._v("登录/注册")]),n("v-uni-view",{staticClass:"tokens"},[t._v("登录后即可体验更多服务 >")])],1):n("v-uni-view",{staticClass:"user_title"},[n("v-uni-view",{staticClass:"nickname"},[t._v(t._s(t.userInfo.nick_name))]),n("v-uni-view",{staticClass:"tokens"},[t._v(t._s(t.userInfo.mobile))])],1)],1),n("v-uni-view",{staticClass:"user_set",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.checkSet.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"user_set_icon",attrs:{src:t.setImg}}),n("v-uni-view",{staticClass:"user_set_text"},[t._v("设置")])],1)],1),n("v-uni-view",{staticClass:"cont_head"},[n("v-uni-view",{staticClass:"cont_l",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.checkCount.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"l_up"},[t._v(t._s(t.userInfo.hash_rates.total)+"w")]),n("v-uni-view",{staticClass:"l_dowm"},[t._v("账户剩余算力")])],1),n("v-uni-view",{staticClass:"cont_r"},[n("v-uni-view",{staticClass:"r_item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.buyVip.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"r_pic",attrs:{src:t.headPic1}}),n("v-uni-view",{staticClass:"r_text"},[t._v("充值中心")])],1),n("v-uni-view",{staticClass:"r_item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openKey.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"r_pic",attrs:{src:t.headPic2}}),n("v-uni-view",{staticClass:"r_text"},[t._v("卡密兑换")])],1)],1)],1)],1),n("u-modal",{attrs:{show:t.show,confirmText:"兑换",confirmColor:"#1F64FF;",showCancelButton:!0},on:{cancel:function(e){arguments[0]=e=t.$handleEvent(e),t.closeKey.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.changeKey.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"key_cont"},[n("v-uni-view",{staticClass:"title"},[t._v("卡密兑换")]),n("u-input",{attrs:{customStyle:{padding:"8px",width:"100%"},inputAlign:"center",placeholder:"请输入兑换码",type:"text"},model:{value:t.cardName,callback:function(e){t.cardName=e},expression:"cardName"}})],1)],1)],1)},o=[]}}]);