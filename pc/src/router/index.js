// 导入组件
import Vue from "vue";
import Router from "vue-router";
// 登录
import login from "@/views/login";
// 首页
import index from "@/views/index";
/**
 * 基础菜单
 */
//意见反馈
const opinion = () => import("@/views/system/opinion");
//服务商
const chatServe = () => import("@/views/system/chatServe");
//分享页面
const share = () => import("@/components/share");
// 新助理中心
const templateSelectNew = () =>
  import("../components/dialog/templateSelectNew");
//购买算力页面
const shoppingToken = () => import("@/views/shoppingToken/shoppingToken");
//最近访问
const visited = () => import("@/views/system/visited");
const selectMentor = () => import("@/views/system/selectMentor");
// 新建导师
const createMentor = () => import("@/views/system/createMentor");
// 导师对话
const mentorChat = () => import("@/views/system/Chat");
// 新建我的专属导师
const createMineMentor = () => import("@/views/system/createMineMentor");
// 导师管理
const mengerMentor = () => import("@/views/system/mengerMentor");
// 升级会员
const Member = () => import("@/views/member/Member");
// 个人中心
const Center = () => import("@/views/center/Center");
// 修改个人信息
const editCneter = () => import("@/views/center/centerMessage");
// 历史会话
const History = () => import("@/views/center/History");
// 流量剩余
const residueNumber = () => import("@/views/center/residueNumber");
// 订单记录
const Order = () => import("@/views/order/Order");
// 应用助理
const templateSelect = () => import("../components/dialog/templateSelect");
// 联系客服
const services = () => import("@/views/service/service");
// 卡密兑换
const Change = () => import("@/views/change/change");
// 防走丢
const here = () => import("@/views/here/here");
// 系统定制
const customized = () => import("@/views/operate/customized");
// 操作指南
const instruction = () => import("@/views/instruction/instruction");
// 历史版本
const version = () => import("../components/version");
// 我的分销
const mineDistribution = () => import("@/views/distribution/mine");
// 分销成员
const mineMember = () => import("@/views/distribution/mineMember");
// 分佣明细
const mineDetail = () => import("@/views/distribution/detail");
// 提现
const withdrawal = () => import("@/views/distribution/withdrawal");
// 绑定银行卡
const bindBank = () => import("@/views/distribution/bindBank");
// 提现订单
const indent = () => import("@/views/distribution/indent");
// 分享邀请
const shareFriend = () => import("@/views/shareFriend/share");
// 升级分销
const upgradeDistribution = () =>
  import("@/views/distribution/upgradeDistribution");
// 分佣说明
const illustrate = () => import("@/views/distribution/illustrate");
// 公告
const noticeIndex = () => import("@/views/notice/index");
// 公告详情
const noticeDetail = () => import("@/views/notice/detail");

// 启用路由
Vue.use(Router);

// 导出路由
export default new Router({
  // mode: 'history', // 去掉url的#
  routes: [
    {
      path: "/index",
      name: "AI数字孪生",
      component: index,
      iconCls: "el-icon-tickets",
      children: [
        // {
        //   path: "/ljh",
        //   title: "首页",
        //   component: indexs,
        //   meta: {
        //     name: "首页",
        //     requireAuth: false
        //   }
        // },
        {
          path: "/index",
          title: "首页",
          component: templateSelectNew,
          meta: {
            name: "index",
            requireAuth: false
          }
        },
        {
          path: "/selectMentor",
          title: "selectMentor",
          component: selectMentor,
          meta: {
            name: "选择导师",
            requireAuth: false
          }
        },
        {
          path: "/visited",
          title: "最近访问",
          component: visited,
          meta: {
            name: "最近访问",
            requireAuth: false
          }
        },
        {
          path: "/shoppingToken",
          title: "购买算力",
          component: shoppingToken,
          meta: {
            name: "购买算力",
            requireAuth: false
          }
        },
        {
          path: "/chatServe",
          title: "服务商",
          component: chatServe,
          meta: {
            name: "服务商",
            requireAuth: false
          }
        },
        
        {
          path: "/share",
          title: "分享好友",
          component: share,
          meta: {
            name: "分享好友",
            requireAuth: false
          }
        },
        {
          path: "/createMentor",
          title: "createMentor",
          component: createMentor,
          meta: {
            name: "创建导师",
            requireAuth: false
          }
        },
        {
          path: "/mentorChat",
          title: "mentorChat",
          component: mentorChat,
          meta: {
            name: "对话导师",
            requireAuth: false
          }
        },
        {
          path: "/createMineMentor",
          title: "createMineMentor",
          component: createMineMentor,
          meta: {
            name: "创建我的专属导师",
            requireAuth: false
          }
        },
        {
          path: "/mengerMentor",
          title: "mengerMentor",
          component: mengerMentor,
          meta: {
            name: "创建我的专属导师",
            requireAuth: false
          }
        },
       
        {
          path: "/member/Member",
          name: "购买套餐",
          component: Member,
          meta: {
            title: "购买套餐",
            requireAuth: false
          }
        },
        {
          path: "/center/Center",
          name: "个人中心",
          component: Center,
          meta: {
            title: "个人中心",
            requireAuth: false
          }
        },
        {
          path: "/opinion/opinion",
          name: "意见反馈",
          component: opinion,
          meta: {
            title: "意见反馈",
            requireAuth: false
          }
        },
        {
          path: "/center/edit",
          name: "修改信息",
          component: editCneter,
          meta: {
            title: "修改信息",
            requireAuth: false
          }
        },
        {
          path: "/center/History",
          name: "历史对话",
          component: History,
          meta: {
            title: "历史对话",
            requireAuth: false
          }
        },
        {
          path: "/residueNumber/residueNumber",
          name: "计费中心",
          component: residueNumber,
          meta: {
            title: "计费中心",
            requireAuth: false
          }
        },
        {
          path: "/order/Order",
          name: "订单记录",
          component: Order,
          meta: {
            title: "订单记录",
            requireAuth: false
          }
        },
        {
          path: "/templateSelect/templateSelect",
          name: "助理中心",
          component: templateSelect,
          meta: {
            title: "助理中心",
            requireAuth: true
          }
        },
        {
          path: "/templateSelect/templateSelectNew",
          name: "AI数字孪生",
          component: templateSelectNew,
          meta: {
            title: "AI数字孪生",
            requireAuth: true
          }
        },
        {
          path: "/services/services",
          name: "联系客服",
          component: services,
          meta: {
            title: "联系客服",
            requireAuth: true
          }
        },
        {
          path: "/change/change",
          name: "卡密兑换",
          component: Change,
          meta: {
            title: "卡密兑换",
            requireAuth: true
          }
        },
        {
          path: "/here/here",
          name: "桌面快捷教程",
          component: here,
          meta: {
            title: "桌面快捷教程",
            requireAuth: true
          }
        },
        {
          path: "/instruction/instruction",
          name: "操作指南",
          component: instruction,
          meta: {
            title: "操作指南",
            requireAuth: true
          }
        },
        {
          path: "/version/version",
          name: "历史版本",
          component: version,
          meta: {
            title: "历史版本",
            requireAuth: true
          }
        },
        {
          path: "/mineDistribution/mineDistribution",
          name: "我的分销",
          component: mineDistribution,
          meta: {
            title: "我的分销",
            requireAuth: true
          }
        },
        {
          path: "/mineMember/mineMember",
          name: "我的成员",
          component: mineMember,
          meta: {
            title: "我的成员",
            requireAuth: true
          }
        },
        {
          path: "/mineDetail/mineDetail",
          name: "分佣明细",
          component: mineDetail,
          meta: {
            title: "分佣明细",
            requireAuth: true
          }
        },
        {
          path: "/withdrawal/withdrawal",
          name: "提现申请",
          component: withdrawal,
          meta: {
            title: "提现申请",
            requireAuth: true
          }
        },
        {
          path: "/bindBank/bindBank",
          name: "添加银行卡",
          component: bindBank,
          meta: {
            title: "添加银行卡",
            requireAuth: true
          }
        },
        {
          path: "/indent/indent",
          name: "提现订单",
          component: indent,
          meta: {
            title: "提现订单",
            requireAuth: true
          }
        },
        {
          path: "/share/share",
          name: "分享邀请",
          component: shareFriend,
          meta: {
            title: "分享邀请",
            requireAuth: true
          }
        },
        {
          path: "/upgradeDistribution/upgradeDistribution",
          name: "升级钻石分销",
          component: upgradeDistribution,
          meta: {
            title: "升级钻石分销",
            requireAuth: true
          }
        },
        {
          path: "/illustrate/illustrate",
          name: "分佣说明",
          component: illustrate,
          meta: {
            title: "分佣说明",
            requireAuth: true
          }
        },
        {
          path: "/noticeIndex/index",
          name: "公告",
          component: noticeIndex,
          meta: {
            title: "公告",
            requireAuth: true
          }
        },
        {
          path: "/noticeIndex/detail",
          name: "公告详情",
          component: noticeDetail,
          meta: {
            title: "公告详情",
            requireAuth: true
          }
        },
      ]
    },
    {
      path: "/login",
      name: "登录",
      component: login,
      hidden: true,
      meta: {
        requireAuth: false
      }
    },
    {
      path: "/customized/customized",
      name: "系统定制",
      component: customized,
      hidden: true,
      meta: {
        title: "系统定制",
        requireAuth: true
      }
    },
  ]
});
