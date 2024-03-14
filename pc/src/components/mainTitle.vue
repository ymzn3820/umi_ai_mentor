<template>
  <div
    :class="
      $route.path == '/chat/Chat' || $route.path == '/drawChat/drawChat'
        ? 'mine-title'
        : 'mine-title-on'
    "
  >
    <div class="select_switch" ref="select_switch" style="margin: 0px">
      <div class="logo" @click="toIndexPage">
        <img
          v-if="httpUrls.appletId == 0 || httpUrls.appletId == 1"
          class="logo-img"
          src="../assets/images/huiyuanLogo.png"
          alt=""
        />
        <img
          v-if="httpUrls.appletId == 2"
          class="logo-img"
          src="../assets/images/hywc_logo.png"
          alt=""
        />
        <img
          v-if="httpUrls.appletId == 3"
          class="logo-img"
          src="../assets/images/Frame-logo.jpg"
          alt=""
        />
        <span class="logo-title" v-if="showSidbar">{{ httpUrls.name }}</span>
      </div>
      <!-- <div
        style="
          width: 25%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        "
      >
        <div
          class="toMember"
          style="line-height: 42px; cursor: pointer"
          @click="$router.push('/visited')"
        >
          最近访问
        </div>
      </div> -->

      
      <div class="btn_group">
        <!-- <div class="search">
          <div><i class="el-icon-search"></i></div>
          <el-select
            v-model="value"
            filterable
            remote
            reserve-keyword
            placeholder="请输入要查找的功能"
            @change="searchToPage"
            :remote-method="remoteMethod"
          >
            <el-option
              @click="searchToPage"
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div> -->
        <!-- <div
          class="toMember"
          style="line-height: 42px; cursor: pointer"
          @click="$router.push('/visited')"
        >
          最近访问
        </div> -->
        <div class="toMember" @click="toGuanWang">无忧秘书官网</div>
        <!-- <div class="toMember" @click="toIndex">
          购买算力
          <img class="fire" src="../assets/images/PurchasePacka.png" alt="" />
        </div> -->

        <el-popover placement="bottom" width="180" trigger="click">
          <div style="display: flex; justify-content: center">
            <div style="">
              <!-- <img style="width: 180px;" :src="officialAccount" alt=""> -->
              <img
                style="width: 180px"
                :src="
                  httpUrls.ossUrl +
                  'static/picture/dc6868c4-f6ea-42dc-935e-5fff7338f72e.jpg'
                "
                alt=""
              />
              <div style="text-align: center;position: relative;top: -9px;">手机扫码关注微信公众号</div>
            </div>
          </div>
          <div slot="reference" class="toMember" style="font-weight: 550">
            公众号
          </div>
        </el-popover>
        <!-- <div class="applet">公众号&小程序</div> -->

        <div class="line"></div>
        <div class="toMember" @click="$router.push('/opinion/opinion')">
          投诉及建议
        </div>

        <el-badge :is-dot="noticeReadAll == 1 ? false : true" class="notice">
          <img
            src="../assets/images/bell.png"
            alt=""
            @click="$router.push('/noticeIndex/index')"
          />
        </el-badge>

        <el-button
          class="login_user"
          v-if="userInfo.role == 'guess'"
          @click="login"
          >登录/注册</el-button
        >

        <el-dropdown
          v-else
          style="padding: 0 20px"
          @command="userCenterOperate"
        >
          <span
            class="el-dropdown-link user_bsic"
            @click="$router.push('/center/Center')"
          >
            <span class="img_list">
              <img
                class="picture"
                :src="httpUrls.ossUrl + userInfo.avatar_url"
                alt=""
              />
              <img
                v-if="userInfo.role == 'user'"
                class="VIP"
                src="../assets/images/vipicon.png"
                alt=""
              />
            </span>

            {{ userInfo.nick_name
            }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
              "
              command="0"
            >
              <span
                class="el-dropdown-link user_bsic-link"
                @click="$router.push('/center/Center')"
              >
                <span class="img_list">
                  <img
                    class="picture"
                    :src="httpUrls.ossUrl + userInfo.avatar_url"
                    alt=""
                  />
                  <img
                    v-if="userInfo.role == 'user'"
                    class="VIP"
                    src="../assets/images/vipicon.png"
                    alt=""
                  />
                </span>

                {{ userInfo.nick_name }}
                <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
              </span>
              <img
                src="../assets/images/edit3.png"
                alt=""
                @click="$router.push('/center/edit')"
              />
            </el-dropdown-item>

            <div
              style="height: 1px; background-color: #d8d8d8; margin: 20px"
            ></div>

            <el-dropdown-item class="user_center-item" command="1">
              <img
                class="img"
                src="../assets/images/center_distribution.png"
                alt=""
              />
              <span>我要分销</span>
            </el-dropdown-item>
            <el-dropdown-item class="user_center-item" command="2">
              <img class="img" src="../assets/images/dingdan.png" alt="" />
              <span>订单记录</span>
            </el-dropdown-item>
            <el-dropdown-item class="user_center-item" command="3">
              <img
                class="img"
                src="../assets/images/residueNumber.png"
                alt=""
              />
              <span>计费中心</span>
            </el-dropdown-item>
            <el-dropdown-item class="user_center-item" command="4">
              <img class="img" src="../assets/images/shpre.png" alt="" />
              <span>我要分享</span>
            </el-dropdown-item>
            <el-dropdown-item class="user_center-item" command="5">
              <img class="img" src="../assets/images/kami.png" alt="" />
              <span>卡密兑换</span>
            </el-dropdown-item>
            <el-dropdown-item class="user_center-item" command="6">
              <svg
                class="img"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <circle cx="8" cy="5.6665" r="3" stroke="#333333" />
                <path
                  d="M1.72478 11.8225L4.66331 10.4868C4.87309 10.3915 5.11724 10.4112 5.30897 10.539L7.66243 12.108C7.87013 12.2465 8.13778 12.2573 8.35599 12.1361L10.7348 10.8145C10.9037 10.7207 11.1049 10.7047 11.2864 10.7707L14.2285 11.8406C14.4919 11.9364 14.6673 12.1868 14.6673 12.4671V14.0002C14.6673 14.3684 14.3688 14.6668 14.0007 14.6668H2.00065C1.63246 14.6668 1.33398 14.3684 1.33398 14.0002V12.4294C1.33398 12.168 1.48679 11.9307 1.72478 11.8225Z"
                  stroke="#333333"
                />
                <rect
                  x="7.5"
                  y="10"
                  width="1"
                  height="2.66667"
                  rx="0.5"
                  fill="#333333"
                />
              </svg>
              <span>服务商</span>
            </el-dropdown-item>
            <el-dropdown-item class="user_center-item" command="7">
              <img class="img" src="../assets/images/version.png" alt="" />
              <span>版本信息 7.2.4</span>
            </el-dropdown-item>

            <div
              style="height: 1px; background-color: #d8d8d8; margin: 20px"
            ></div>

            <el-dropdown-item class="user_center-item" command="8">
              <img class="img" src="../assets/images/log-out.png" alt="" />
              <span>退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <!-- <div class="user_bsic" @click="$router.push('/center/center')">
                    <div class="img_list">
                        <img class="picture" :src="httpUrls.ossUrl + userInfo.avatar_url" alt="">
                        <img class="VIP" src="../assets/images/vipicon.png" alt="">
                    </div>
                    <div class="user_name">{{userInfo.nick_name}}</div>
                </div> -->
      </div>
      <!-- <div v-if="$route.path == '/chat/Chat' || $route.path == '/drawChat/drawChat'" style="display: flex;">
                <div :class="$route.path == '/chat/Chat' ? 'ai_type_title ai_type_title-on' : 'ai_type_title'" @click="$router.push('/chat/Chat')">聊天</div>
                <div :class="$route.path == '/drawChat/drawChat' ? 'ai_type_title ai_type_title-on' : 'ai_type_title'" @click="$router.push('/drawChat/drawChat')">彩虹绘画</div>
            </div>
            <div v-else></div>

            <div class="select-title"  v-if="$route.path != '/chat/Chat' && $route.path != '/drawChat/drawChat' && $route.path != '/index'">{{ chatText }}</div>
            <div class="select-topage" v-if="$route.path != ('/noticeIndex/index')">
                <div class="to" @click="toIndex" style="padding: 0 20px;line-height: 30px;">
                    购买套餐
                </div>
                <div class="to" @click="toHere">
                    <img style="width: 20px;height: 20px;" src="../assets/images/goBack.png" alt="">
                    防走丢
                </div>
            </div>
            <div v-else>
                <el-button type="text" @click="readAll">一键已读</el-button>
            </div> -->
    </div>

    <!-- 公告 -->
    <!-- <div class="title-notice" v-if="carouselMessage.length != 0 && ($route.path == '/index' || $route.path == '/chat/Chat' || $route.path == '/drawChat/drawChat' || $route.path == '/templateSelect/templateSelect')">
            <el-carousel height="30px" direction="vertical" :autoplay="true">
                <el-carousel-item v-for="item in carouselMessage" :key="item.message_id" @click.native="toNotice(item)" style="cursor: pointer;">
                    <div class="notice_mask">
                        <img class="imgs" src="../assets/images/gonggaoIcon.png" alt="">
                        <span class="title">{{ item.title }} > > ></span>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div> -->

    <register ref="Register"></register>
    <pay ref="Pay"></pay>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { messageCenterState } from "../api/notice";
import httpUrls from "../api/requestURL";
import register from "./register";
import pay from "./pay";

export default {
  name: "mine-title",
  data() {
    return {
      httpUrls,
      chatText: "AI35",
      showSid: true,
      searchStatus: false,
      options: [],
      value: [],
      list: [],
      states: [
        {
          label: "藏头诗",
          query: "/liveBroadcast/headPoem",
        },
        {
          label: "专属头像藏头诗V1",
          query: "/liveBroadcast/headPoemArt",
        },
        {
          label: "专属头像藏头诗V2",
          query: "/liveBroadcast/headPoemText",
        },
        {
          label: "专属头像藏头诗V3",
          query: "/liveBroadcast/headPoemImg",
        },
        {
          label: "艺术字姓氏头像",
          query: "/liveBroadcast/chatWordArt",
        },
        {
          label: "艺术字头像九宫格",
          query: "/liveBroadcast/chatWordArtNew",
        },
        {
          label: "艺术字头像十宫格",
          query: "/liveBroadcast/chatWordArtNewTen",
        },
        {
          label: "AI对话",
          query: "/chat/Chat",
        },
        {
          label: "文心一言",
          query: "/chat/Chat",
          selectChat:'4'
        },
        {
          label: "讯飞星火",
          query: "/chat/Chat",
          selectChat:'5'
        },
        {
          label: "通义千问",
          query: "/chat/Chat",
          selectChat:'10'
        },
        {
          label: "360智脑",
          query: "/chat/Chat",
          selectChat:'12'
        },
        {
          label: "腾讯混元",
          query: "/chat/Chat",
          selectChat:'1001'
        },
        {
          label: "火山云雀",
          query: "/chat/Chat",
          selectChat:'1000'
        },
        {
          label: "AI绘画",
          query: "/drawChat/drawChat",
        },
        {
          label: "通义万相(绘画)",
          query: "/drawChat/drawChat?value=13",
        },
        {
          label: "百度绘画",
          query: "/drawChat/drawChat?value=3",
        },
        {
          label: "火山引擎(绘画)",
          query: "/drawChat/drawChat?value=14",
        },
        {
          label: "AI数字孪生",
          query: "/templateSelect/templateSelectNew",
        },
        {
          label: "名人互动",
          query: "/templateSelect/templateSelect",
          value: "3",
        },
        {
          label: "实用工具",
          query: "/templateSelect/templateSelect",
          value: "2",
        },
        {
          label: "休闲娱乐",
          query: "/templateSelect/templateSelect",
          value: "5",
        },
        // {
        //   label: "工作助理",
        //   query: "/templateSelect/templateSelect",
        //   value:''
        // },
        {
          label: "热门场景",
          query: "/templateSelect/templateSelect",
          value: "500615029629574",
        },
        {
          label: "助力职场",
          query: "/templateSelect/templateSelect",
          value: "500619806540422",
        },
        {
          label: "媒体创作",
          query: "/templateSelect/templateSelect",
          value: "500620488053382",
        },
        {
          label: "日常办公",
          query: "/templateSelect/templateSelect",
          value: "500620702696070",
        },
        {
          label: "知识技能",
          query: "/templateSelect/templateSelect",
          value: "500620906222214",
        },
        {
          label: "美好生活",
          query: "/templateSelect/templateSelect",
          value: "500621135958662",
        },
        {
          label: "跨境电商",
          query: "/templateSelect/templateSelect",
          value: "500621342761606",
        },
        {
          label: "对话模型",
          query: "/workset/worksetNav",
        },
        {
          label: "绘画模型",
          query: "/workset/worksetNav",
        },
        {
          label: "图片处理",
          query: "/workset/worksetNav",
        },
        {
          label: "视频处理",
          query: "/workset/worksetNav",
        },
        {
          label: "文字识别",
          query: "/workset/textChat?title=通用文字识别",
        },
        {
          label: "语音合成",
          query: "/workset/voiceChat",
        },
        {
          label: "文档对话",
          query: "/workset/documentChat",
        },
        {
          label: "AI实验室",
          query: "/chataboratory/laboratoryChat?value=0",
        },
        {
          label: "多模型对话",
          query: "/manyModelChat/chat",
        },
        //AI百宝箱
        {
          label: "AI百宝箱",
          query: "/treasureBoxNav",
        },
        {
          label: "照片修图",
          query: "/treasureBox?title=照片修图",
        },
        {
          label: "照片裁剪",
          query: "/treasureBox?title=照片裁剪",
        },
        {
          label: "视频人像卡通画",
          query: "/treasureBox?title=视频人像卡通画",
        },
        {
          label: "通用视频生成",
          query: "/treasureBox?title=通用视频生成",
        },
        {
          label: "视频字幕擦除",
          query: "/treasureBox?title=视频字幕擦除",
        },
        {
          label: "视频标志擦除",
          query: "/treasureBox?title=视频标志擦除",
        },
        //视觉体验馆
         {
          label: "视觉体验馆",
          query: "/visionNav/visionNav",
        },
        {
          label: "人脸融合",
          query: "/vision/vision?title=人脸融合",
        },
        {
          label: "人像年龄变化",
          query: "/vision/vision?title=人像年龄变化",
        },
        {
          label: "通用文字识别",
          query: "/vision/vision?title=通用文字识别",
        },
        {
          label: "人像漫画",
          query: "/vision/vision?title=人像漫画",
        },
        {
          label: "智能变美",
          query: "/vision/vision?title=智能变美",
        },
        {
          label: "人物抠图",
          query: "/vision/vision?title=人物抠图",
        },
        {
          label: "老照片修复",
          query: "/vision/vision?title=老照片修复",
        },
        {
          label: "图像增强",
          query: "/vision/vision?title=图像增强",
        },
        {
          label: "人像特效",
          query: "/vision/vision?title=人像特效",
        },
        {
          label: "表情编辑",
          query: "/vision/vision?title=表情编辑",
        },
        {
          label: "发型编辑",
          query: "/vision/vision?title=发型编辑",
        },
        {
          label: "3D游戏风",
          query: "/vision/vision?title=3D游戏风",
        },
        {
          label: "活体照片",
          query: "/vision/vision?title=活体照片",
        },
        {
          label: "头发分割",
          query: "/vision/vision?title=头发分割",
        },
        {
          label: "图片拉伸修复",
          query: "/vision/vision?title=图片拉伸修复",
        },
        {
          label: "图片配文",
          query: "/vision/vision?title=图片配文",
        },
        {
          label: "图片超分辨率",
          query: "/vision/vision?title=图片超分辨率",
        },
        {
          label: "图片方向矫正",
          query: "/vision/vision?title=图片方向矫正",
        },
        //智能工具
        {
          label: "音视频转写",
          text: "会议记录、课堂笔记等领域一键生稿",
          query: "/convert/index",
        },
        {
          label: "数字人",
          query: "/digitizedHuman/index",
        },
        {
          label: "文本识别",
          query: "/identify/identify",
        },
        {
          label: "彩超宝宝",
          query: "/drawChat/fourDUltrasound",
        },
        {
          label: "看图说话",
          query: "/identify/identify",
        },
        {
          label: "虚拟数字人",
          query: "/digitizedHuman/produceIndex",
        },
        {
          label: "声音克隆",
          query: "/digitizedHuman/audioClone",
        },
        //企业知识库
        {
          label: "企业设置",
          query: "/enterpriseWEB/indexList/enterpriseSet",
        },
        {
          label: "知识库",
          query: "/enterpriseWEB/indexList/indexListView",
        },
        {
          label: "AI企业数字员工",
          query: "/enterpriseWEB/indexList/digitalEmployees",
        },
        {
          label: "成员管理",
          query: "/enterpriseWEB/indexList/memberManagement",
        },
        {
          label: "AI商城",
          query: "/shoppingToken",
        },
        {
          label: "帮助中心",
          query: "/instruction/instruction",
        },
        {
          label: "商务合作",
          query: "/collaborate/collaborate",
        },
        {
          label: "公告通知",
          query: "/noticeIndex/index",
        },
        {
          label: "版本信息",
          query: "/version/version",
        },
        {
          label: "计费中心",
          query: "/residueNumber/residueNumber",
        },
        {
          label: "服务商",
          query: "/chatServe",
        },
        {
          label: "我要分销",
          query: "/mineDistribution/mineDistribution",
        },
        {
          label: "订单记录",
          query: "/order/Order",
        },
        {
          label: "我要分享",
          query: "/share/share",
        },
        {
          label: "卡密兑换",
          query: "/change/change",
        },
        {
          label: "个人中心",
          query: "/center/Center",
        },
      ],
      userInfo: {},
    };
  },
  props: {
    showSidbar: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    register,
    pay,
  },
  watch: {
    AIName: {
      deep: true,
      handler() {
        this.getAIName();
      },
    },
    $route: {
      deep: true,
      handler() {
        this.searchStatus = false;
        if (
          this.$route.path == "/chat/Chat" ||
          this.$route.path == "/drawChat/drawChat"
        ) {
          this.getAIName();
        } else if (this.$route.path == "/share/share") {
          if (sessionStorage.getItem("sahre_friend") == "1") {
            this.chatText = "分享邀请";
          } else {
            this.chatText = "分销邀请";
          }
        } else {
          this.chatText = this.$route.meta.title;
        }
      },
    },
    userDataInfo: {
      deep: true,
      handler() {
        this.userInfo = this.userDataInfo;
      },
    },
    userInfoData: {
      deep: true,
      handler() {
        this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
      },
    },
    value: {
      deep: true,
      handler() {
        // this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
        if (this.value) {
          setTimeout(() => {
            let select_switch =
              document.getElementsByClassName("el-select-dropdown");
            console.log(select_switch);
            select_switch.addEventListener("mouseleave", (e) => {
              this.searchStatus = false;
              console.log("离开");
            });
          }, 200);
        }
      },
    },
  },
  created() {
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (this.userInfo == null) {
      this.userInfo = { role: "guess" };
    }

    this.$root.Bus.$on("loginInfo", (value) => {
      this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (this.userInfo == null) {
        this.userInfo = { role: "guess" };
      }
    });
  },
  mounted() {
    this.list = this.states.map((item) => {
      return {
        value: `${item.label}`,
        label: `${item.label}`,
        path: `${item.query}`,
      };
    });
    if (
      this.$route.path == "/chat/Chat" ||
      this.$route.path == "/drawChat/drawChat"
    ) {
      this.getAIName();
    } else {
      this.chatText = this.$route.name;
    }
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
  },
  computed: {
    ...mapGetters([
      "AIName",
      "carouselMessage",
      "contactService",
      "mini",
      "officialAccount",
      "carouselMessageState",
      "noticeReadAll",
      "userDataInfo",
      "userInfoData",
    ]),
  },
  methods: {
    searchToPage(e) {
      this.value = "";
      this.searchStatus = false;
      let path = this.options.find((item) => e == item.label);
      let index = this.states.findIndex((item) => e == item.label);
      // console.log(this.states[index]);
      if (this.states[index].value) {
        this.$store.dispatch("app/changeApplicationCenterId",this.states[index].value);
        sessionStorage.setItem("applicationId",this.states[index].value);
        sessionStorage.setItem("applicationType",this.states[index].value);
      }
      if(this.states[index].selectChat){
        this.$store.dispatch("app/changeSelectChat", this.states[index].selectChat);
      }
      this.$router.push(path.path);
    },
    remoteMethod(query) {
      if (query !== "") {
        setTimeout(() => {
          this.options = this.list.filter((item) => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options = [];
      }
    },
    toIndexPage() {
      if (this.$route.path != "/index") {
        this.$router.push("/index");
      }
    },
    // 判断AI35和AI40
    getAIName() {
      if (this.AIName == 0) {
        this.chatText = "AI35";
      } else if (this.AIName == 1) {
        this.chatText = "AI40";
      } else if (this.AIName == 2) {
        this.chatText = "DALL·E 2";
      } else if (this.AIName == 3) {
        this.chatText = "百度绘画";
      }
    },

    toGuanWang() {
      window.open("https://www.umi6.com/");
    },

    toIndex() {
      let userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (userInfo.role == "guess") {
        this.$refs.Register.registerVisible = true;
      } else {
        console.log(1);
        this.$refs.Pay.PayVisible = true;
      }
    },

    toHere() {
      this.$router.push("/here/here");
    },

    showSidar() {
      this.showSid = !this.showSid;
      this.$store.dispatch("app/changeShowSidbar", this.showSid);
      this.$emit("isshowsidbar", this.showSid);
    },
    toNotice(item) {
      this.$router.push({
        path: "/noticeIndex/detail",
        query: { id: item.message_id },
      });
    },
    readAll() {
      let userInfo = JSON.parse(localStorage.getItem("userInfo"));
      messageCenterState({ user_id: userInfo.user_id }).then((res) => {
        if (res.code == 20000) {
          this.$store.dispatch("user/changeNoticeReadAll", 1);
        } else {
          this.$message.error("网络异常，请稍后重试");
        }
      });
    },

    login() {
      this.$refs.Register.registerVisible = true;
    },

    userCenterOperate(e) {
      console.log(e);
      switch (e) {
        // case '0':
        //     this.$router.push('/center/Center')
        //     break;
        case "1":
          this.$router.push("/mineDistribution/mineDistribution");
          break;
        case "2":
          this.$router.push("/order/Order");
          break;
        case "3":
          this.$router.push("/residueNumber/residueNumber");
          break;
        case "4":
          this.$router.push("/share/share");
          sessionStorage.setItem("sahre_friend", "1");
          break;
        case "5":
          this.$router.push("/change/change");
          break;
        case "6":
          this.$router.push("/chatServe");
          break;
        case "7":
          this.$router.push("/version/version");
          break;
        case "8":
          this.logout();
          break;
      }
    },

    logout() {
      this.$confirm("退出登录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          localStorage.removeItem("userInfo");
          this.$store.dispatch("user/changeInfo", null);
          location.href = "/index";
          this.$root.Bus.$emit("loginInfo", 1); // 更新登录信息
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消",
          });
        });
    },
  },
};
</script>

<style scoped>
.search {
  margin: 0px 20px;
  border: 1px solid #c0c4cc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding-left: 10px;
}
.search /deep/ .el-input__inner {
  border: 0px solid #ccc;
  border-radius: 8px;
}
.search .el-icon-search {
  font-size: 20px;
  /* font-weight: bold; */
  cursor: pointer;
}
.user_center-item {
  display: flex;
  align-items: center;
}

.user_center-item .img {
  width: 16px;
  margin-right: 10px;
}

.btn_group {
  display: flex;
  align-items: center;
}

.btn_group .toMember {
  line-height: 30px;
  margin: 0 20px;
  position: relative;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}

.btn_group .toMember .fire {
  position: absolute;
  right: -14px;
  top: 0;
}

.btn_group .applet,
.btn_group .help,
.btn_group .services {
  margin: 0 20px;
  cursor: pointer;
}

.btn_group .applet {
  color: #333;
  font-size: 16px;
  font-weight: 500;
}

.btn_group .line {
  width: 1px;
  height: 20px;
  background: #bababa;
}

.user_bsic {
  display: flex;
  margin: 0 20px;
  cursor: pointer;
  align-items: center;
}

.user_bsic-link {
  display: flex;
  margin: 0 20px;
  cursor: pointer;
  align-items: center;
  margin-left: 0;
}

.img_list {
  position: relative;
  margin-right: 10px;
}

.img_list .picture {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

.img_list .VIP {
  width: 40px;
  position: absolute;
  left: -6px;
  bottom: -2px;
}

.user_name {
  line-height: 40px;
  margin-left: 20px;
  color: #000;
  font-size: 16px;
  font-weight: 500;
}

.ai_type_title {
  color: #999999;
  font-size: 20px;
  font-weight: 500;
  margin-right: 90px;
  cursor: pointer;
}

.ai_type_title-on {
  color: #1f64ff;
  border-bottom: 2px solid #1f64ff;
}

.select_switch {
  display: flex;
  justify-content: space-between;
  padding: 8px 20px;
  padding-left: 10px;
}

.mine-title {
  background-color: #ffffff;
  border-bottom: 1px solid #e5e6eb;
  /* width: calc(100% - 240px); */
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 5;
  /* margin-left: 240px; */
}

.mine-title-on {
  background-color: #ffffff;
  border-bottom: 1px solid #e5e6eb;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 5;
}

.content {
  width: 100%;
  height: calc(100% - 22px);
  display: flex;
  flex-direction: column;
}

.select_tyle {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e5e6eb;
}

.select-topage {
  display: flex;
}

.select-topage .to {
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #333333;
  background: #f2faff;
  border-radius: 6px;
  display: flex;
  padding: 6px 20px;
  cursor: pointer;
}

.select-topage .to img {
  margin-right: 10px;
  vertical-align: middle;
}

.select-topage .to:nth-child(1) {
  margin-right: 10px;
  background-color: #ff9b17;
  color: #ffffff;
}

.select-title {
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  color: #333333;
}

.select-img img {
  width: 26px;
  height: 26px;
  cursor: pointer;
}

.switch_con {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin-left: 30px;
  width: 180px;
  height: 80px;
  background: #ffffff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
}

.con_l {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #a0aec0;
}

.select_mode .el-tabs__item {
  width: 180px;
  height: 60px;
  padding-left: 18px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 60px;
  color: #000022;
  text-align: center;
}

.select_mode .el-tabs__active-bar {
  width: 180px;
}

/* .footer_cont {
    background: #fff;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px;
    position: relative;
} */
/* .footer_qs {
    width: calc(70% - 240px);
    position: absolute;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    left: calc(50% + 120px);
} */
.qs_top {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}

.top_left {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #000;
}

.top_right {
  display: flex;
  align-items: center;
}

.change_img {
  width: 12px;
  height: 12px;
  margin-left: 10px;
}

.qs_line {
  width: calc(32% - 40px);
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 6px;
  font-weight: 400;
  font-size: 14px;
  color: #78829a;
  cursor: pointer;
  background-color: #f6f8fb;
}

.cont {
  width: 80%;
  background: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  position: relative;
}

/* .el-input__inner {
    background: #F5F6FA;
    border-radius: 10px;
    height: 58px;
    font-size: 16px;
    padding-left: 30px;
} */

.clear_img {
  width: 29px;
  height: 29px;
  margin-right: 15px;
}

.cg-chat-content {
  width: 80%;
  flex: 1;
  padding: 25px;
  margin: auto;
  overflow: auto;
  padding-top: 0;
}

.cg-chatbox {
  max-width: 66%;
  border-radius: 5px;
  position: relative;
  word-break: break-all;
  word-wrap: break-word;
}

/* .cg-chatbox-left {
    border: 1px solid #F5F6F8;
    display: inline-block;
    background: #F5F6F8;
    border-radius: 8px;
    color: #333;
}

.cg-chatbox-left::before {
    right: 100%;
    border-color: transparent #F5F6F8 transparent transparent;
} */

.cg-chatbox-right {
  border: 1px solid #1f64ff;
  display: inline-block;
  background: #1f64ff;
  border-radius: 8px;
  color: #fff;
  text-align: left;
}

.cg-chatbox-right::before {
  left: 100%;
  border-color: transparent transparent transparent #1f64ff;
}

.cg-chat-left,
.cg-chat-right {
  display: flex;
  align-items: flex-start;
  padding-top: 20px;
}

.cg-user-pic {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  display: block;
}

.cg-left {
  margin-right: 15px;
}

.cg-right {
  margin-right: 15px;
}

.cg-chat-right {
  justify-content: flex-end;
}

.reply {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
}

.left_tip {
  font-size: 16px;
  color: #333;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 1px;
}

.left_tip1 {
  font-size: 14px;
  color: #333;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 1px;
}

.as-cont-right {
  width: 84%;
}

.as_text_left {
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
}

.as_text_right {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}

.copy_img {
  width: 46px;
  height: 22px;
  margin-right: 10px;
}

.copy_img_left {
  width: 46px;
  height: 22px;
  margin-left: 10px;
}

.pay_img {
  width: 80px;
  height: 40px;
  margin-left: 10px;
}

.as-cont-left {
  text-align: left;
}

.cont-time {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #999;
  margin-bottom: 5px;
}

.chat_bot {
  display: flex;
}

.operete_btn {
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 150%;
  color: #1f64ff;
  border: 1px solid #1f64ff;
  border-radius: 12px;
  padding: 0 10px;
  margin-top: 15px;
  margin-right: 10px;
}

.chat_draw {
  display: flex;
  flex-direction: column;
}

.draw_img {
  width: 256px;
}

.comput {
  display: flex;
}

.put_text {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 200%;
  color: #aab2c8;
  display: flex;
  align-items: center;
}

.await_img {
  width: 16px;
  height: 16px;
  opacity: 0.5;
}

.supply_cont {
  background: #fff;
  border-radius: 10px;
  width: 400px;
  margin: auto;
}

.supply_img {
  width: 40px;
  height: 28px;
}

.help-setpon {
  margin-top: 20px;
}

.help-setpon-img {
  height: 24px;
  width: 24px;
}

.select_tyle {
  display: flex;
  flex-direction: column;
}

.notice_mask {
  height: 30px;
  display: flex;
  background-color: #ffefe6;
  font-size: 12px;
}

.notice_mask .imgs {
  width: 20px;
  margin: auto 5px;
}

.notice_mask .title {
  line-height: 30px;
  color: #ff6619;
}

.logo {
  /* margin: 12px auto; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-img {
  width: 30px;
  height: 27px;
  /* margin: auto; */
  /* display: block; */
  /* margin-top: 5px; */
  cursor: pointer;
  margin-right: 10px;
}

.logo-title {
  line-height: 40px;
  font-weight: bold;
  color: #333;
  font-size: 16px;
  cursor: pointer;
}

.logo-mark {
  margin: auto;
  display: flex;
}
</style>

<style>
.title-notice .el-carousel__indicators {
  display: none;
}

.btn_group .notice {
  margin: 0 20px;
  cursor: pointer;
}

.btn_group .login_user {
  margin: 0 20px;
  background-color: #1f64ff;
  color: #ffffff;
  padding: 9px 20px;
}
</style>