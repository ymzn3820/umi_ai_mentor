import router from './router';
import store from './vuex/index';

import { Message, MessageBox } from 'element-ui';

import { getUserInfo, guessLogin } from './api/chatMG'

// 路由拦截器
router.beforeEach((to, from, next) => {
  if (to.path) {
      if (window._hmt) { // 百度统计代码
        window._hmt.push(['_trackPageview', '/#' + to.fullPath])
      }
  }

  if (to.matched.length != 0) {
      if (Boolean(localStorage.getItem("userInfo")) && localStorage.getItem("userInfo") != 'null' && localStorage.getItem("userInfo") != null) {
          if (from.path != '/enterpriseWEB/detail' && from.path != '/createRole/createRole') {
              next();
          } else {
              // 企业定制版信息未保存
              if (store.getters.submitCompany == '1') {
                  let con = confirm('现在离开此页面？\n\n系统可能不会保存您所做的更改。')
                  if (con) {
                      con = null
                      next()
                  }
              } else {
                  next()
              }
          }
      } else {
          let val = { time: new Date().getTime() };
          guessLogin(val).then(res => {
              if (res.code == 20000) {
                  localStorage.setItem("userInfo", JSON.stringify(res.data));
                  store.dispatch('user/changeInfo', res.data.user_id);
                  // this.loginInfo = JSON.parse(JSON.stringify(res.data));
                  // this.username = this.loginInfo.nick_name
                  let isExpire = localStorage.getItem("isExpire");
  
                  if(isExpire == 1) {
                      // this.$message.error('登录信息已过期，请重新登录');
                      Message({
                          type: 'error',
                          message: '登录信息已过期，请重新登录！',
                          customClass: 'messageIndex'
                      });
                      // this.$refs.Register.registerVisible = true
                  }
                  
              } else {
                  Message.error(res.msg);
              }
              next()
          }).catch(err => {
              // this.$message.error('登录失败');
              next({
                  path: '/index'
              })
          })
      }
  } else {
      if (Boolean(localStorage.getItem("userInfo")) && localStorage.getItem("userInfo") != 'null' && localStorage.getItem("userInfo") != null) {
          next({
              path: '/index'
          });
      } else {
          let val = { time: new Date().getTime() };
          guessLogin(val).then(res => {
              if (res.code == 20000) {
                  localStorage.setItem("userInfo", JSON.stringify(res.data));
                  store.dispatch('user/changeInfo', res.data.user_id);
                  // this.loginInfo = JSON.parse(JSON.stringify(res.data));
                  // this.username = this.loginInfo.nick_name
                  let isExpire = localStorage.getItem("isExpire");
  
                  if(isExpire == 1) {
                      // this.$message.error('登录信息已过期，请重新登录');
                      Message({
                          type: 'error',
                          message: '登录信息已过期，请重新登录！',
                          customClass: 'messageIndex'
                      });
                      this.$refs.Register.registerVisible = true
                  }
                  
              } else {
                  Message.error(res.msg);
              }
              next({
                  path: '/index'
              })
          }).catch(err => {
              // this.$message.error('登录失败');
              next({
                  path: '/index'
              })
          })
      }
      // next({
      //   path:'/index'
      // })
    }
})