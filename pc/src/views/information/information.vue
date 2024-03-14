<template>
  <div id="main">
    <div class="go-back-page" v-if="detailData.length !== 0">
      <div class="back" @click="goBack">
        <i class="el-icon-arrow-left"></i>
        <span>返回</span>
      </div>
    </div>
    <div style="height: calc(100% - 30px); width: 100%">
      <!-- 左边盒子 -->
      <div
        class="left"
        :style="
          informationData.length
            ? 'height: calc(100vh -  56px - 30px - 30px)'
            : ''
        "
        id="mask"
        v-if="detailData.length == 0"
      >
        <!-- 分类 -->
        <div class="left-top">
          <el-tabs v-model="ification" @tab-click="handleIfication">
            <el-tab-pane
              v-for="item in ificationData"
              :key="item.value"
              :label="item.label"
              :name="item.value"
            ></el-tab-pane>
          </el-tabs>
        </div>

        <div
          id="list"
          :style="
            informationData.length
              ? 'height: calc(100% - 32px - 52px - 20px);'
              : 'height: calc(100% - 42px - 41px);'
          "
        >
          <!-- 子盒子 -->
          <template>
            <div
              class="left-box"
              v-for="item in informationData"
              :key="item.message_id"
              @click="handleDetails(item)"
            >
              <img class="left-img" :src="item.image" alt="" />
              <div class="left-content">
                <div>
                  <div>{{ item.title }}</div>
                  <div>{{ item.desc }}</div>
                </div>
                <div>
                  <div class="left-time">
                    {{ informationTime(item.create_time) }}
                  </div>
                  <div>阅读{{ item.read_count }}</div>
                  <div>点赞{{ item.like_count }}</div>
                </div>
              </div>
            </div>
            <div
              v-if="!informationData.length"
              style="
                width: 100%;
                height: 100%;
                background: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              <el-empty description="暂无文章" :image-size="88"></el-empty>
            </div>
          </template>
        </div>
        <!-- 分页 -->
        <div class="left-bottom" v-if="informationData.length">
          <Pagination
            v-bind:child-msg="pageparm"
            @callFather="callFather"
          ></Pagination>
        </div>
        <footerRemark></footerRemark>
        <!-- 详情 -->
      </div>
      <div class="left" id="mask" style="height: calc(100%);" v-else>
        <template>
          <div
            class="left-detail"
            v-for="item in detailData"
            :key="item.message_id"
          >
            <!-- 详情标题 -->
            <div class="detail-title">
              {{ item.title }}
            </div>
            <!-- 图标 -->
            <div class="detail-icon">
              <div>
                <img :src='httpUrls.ossUrl + "static/picture/60325600-b2d3-4f7a-b384-027d05121f5f.png"' alt="">
              </div>
              <span>无忧秘书智脑</span>
              <el-popover placement="right" width="180" trigger="click">
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
                  <div slot="reference" class="add_code">
                    关注公众号
                  </div>
              </el-popover>
            </div>
            <!-- 内容 -->
            <div class="detail_html" v-html="item.content"></div>
            <div class="qr-code">
              <div v-for="item in qrCode" :key="item.pic_id">
                <img :src="item.pic_url" alt="">
                <div>{{ item.pic_desc }}</div>
              </div>
            </div>
            <!-- 时间 -->
            <div>
              <div class="left-time">
                {{ informationTime(item.create_time) }}
              </div>
              <div>阅读{{ item.read_count }}</div>
              <div>点赞{{ item.like_count }}</div>
            </div>
          </div>
        </template>
        <footerRemark></footerRemark>
      </div>
      <!-- 右边盒子 -->
      <div class="right">
        <!-- 二维码区域 -->
        <div class="right-top">
          <img
            style="width: 100%; height: 100%"
            :src="
              httpUrls.ossUrl +
              'static/picture/837d9bcd-e7de-477c-a340-e3e03c5d834b.png'
            "
            alt=""
          />
        </div>
        <!-- 相关推荐 -->
        <div class="related" id="related">
          <!-- 标题 -->
          <div class="related-title" style="margin-bottom: 14px">相关推荐</div>
          <!-- 相关推荐内容展示 -->
          <div
            style="height: calc(100% - 28px); overflow-y: auto"
            id="related-list"
          >
            <div
              class="related-box"
              v-for="item in informationData"
              :key="item.message_id"
              style="cursor: pointer"
              @click="handleDetails(item)"
            >
              <div class="related-title">
                <div>{{ ificationFn(item.cate) }}</div>
                <span>{{ informationTime(item.create_time) }}</span>
              </div>
              <img class="related-img" :src="item.image" />
              <div class="releted-content">{{ item.title }}</div>
            </div>
            <div
              v-if="!informationData.length"
              style="
                width: 100%;
                height: 100%;
                background: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              <el-empty description="暂无文章" :image-size="88"></el-empty>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { informationList, informationDetail } from "../../api/information";
import { pictures } from "../../api/chatMG";
import httpUrls from "../../api/requestURL";
import Pagination from "../../components/Pagination";
import footerRemark from "../../components/footerRemark";

import { mapGetters } from "vuex";
import { marked } from "marked";
export default {
  name: "information",
  data() {
    return {
      httpUrls,
      ificationData: [
        { value: "fun", label: "趣闻轶事" },
        { value: "free_resources", label: "免费资源" },
        { value: "applications", label: "垂直应用" },
        { value: "hashrates_share", label: "算力分享" },
        { value: "llm", label: "大模型" },
        { value: "drawing", label: "AI绘画" },
        { value: "meta_universe", label: "元宇宙" },
        { value: "AIGC", label: "AIGC" },
        { value: "AGI", label: "AGI" },
      ], //分类数组
      ification: "fun",
      informationData: [],
      detailData: [],
      userInfo: {},
      pageparm: {
        currentPage: 1,
        pageSize: 10,
        total: 10,
      },
      qrCode:{}
    };
  },
  // 注册组件
  components: {
    Pagination,
    footerRemark
  },
  computed: {
    ...mapGetters(["selectIfication"]),
  },
  watch: {
    $route: {
      deep: true,
      handler() {
        if (this.detailData.length) {
          this.goBack()
        }
        this.ification = this.$route.query.ification;
        this.pageparm.currentPage = 1;
        this.pageparm.pageSize = 10;
        this.init();
      },
    },
  },
  created() {
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    let item = sessionStorage.getItem("information");
    if (item && item.length) {
      let query = JSON.parse(item);
      if (query) {  
        console.log(query);
        this.handleDetails(query);
      }
    }
    if(this.$route.query.message_id){
      // 请求参数
      let data = {
        user_id: this.userInfo.user_id,
        message_type: this.$route.query.message_type?this.$route.query.message_type:2,
        message_id: this.$route.query.message_id,
      };
      this.$router.push({path:this.$route.path,query:{...this.$route.query,message_id:this.$route.query.message_id,message_type:this.$route.query.message_type}})
      informationDetail(data)
        .then((res) => {
          console.log(res.data, "详情初始化");
          if (res.code == 20000) {
            this.detailData = res.data;
            // console.log(this.detailData[0].content,'优化前');
            // this.detailData[0].content = marked(this.detailData[0].content);
            this.$set(this.detailData[0],'content',marked(this.detailData[0].content))
          }
        })
        .catch((err) => {
          console.log(err, "详情失败");
        });
    }
    this.ification = this.$route.query.ification;
    this.$store.dispatch(
      "app/changeSelectIfication",
      this.$route.query.ification
    );
    this.init();
    let arr = []
        pictures().then(res => {
          this.qrCode = res.data[4]
          res.data.map(item => {
            if(item.type == 8){
              arr.push(item)
            }
          })
          this.qrCode = arr;
          console.log(res,'二维码数据')
        })
  },
  beforeDestroy() {
    // sessionStorage.setItem("information",' ')
    this.detailData.length = 0;
    this.detailData = [];
    sessionStorage.setItem('information','')
  },
  methods: {
    //返回
    goBack() {
      this.detailData = [];
      sessionStorage.setItem("information", " ");

    },
    //处理分类标题函数
    ificationFn(val) {
      // console.log(data.label)
      let data;
      if (val) {
        data = this.ificationData.find((item) => item.value == val).label;
      } else {
        data = "暂无类别";
      }
      return data;
    },
    //分页
    callFather(parm) {
      this.pageparm.currentPage = parm.currentPage;
      this.pageparm.pageSize = parm.pageSize;
      this.init();
    },
    //选择分类标题
    handleIfication(tab, event) {
      this.$store.dispatch("app/changeSelectIfication", this.ification);
      this.pageparm.currentPage = 1;
      this.pageparm.pageSize = 10;

      this.init();
    },
    init(str = "") {
      // if (str == "gundong") {
      //   this.page_index++;
      // }
      // if (this.page_index > 5) {
      //   return;
      // }
      //请求参数
      let data = {
        cate: this.ification,
        user_id: this.userInfo.user_id,
        message_type: 2,
        page_index: this.pageparm.currentPage,
        page_count: this.pageparm.pageSize,
      };
      // console.log(data.cate, "分类");
      informationList(data)
        .then((res) => {
          // console.log(res.data);
          if (res.code == 20000) {
            this.pageparm.total = parseInt(res.total);
            if (str == "gundong") {
              this.informationData = this.informationData.concat(res.data);
            } else {
              this.informationData = res.data;
            }
          }
        })
        .catch((err) => {
          console.log(err, "错误信息");
        });
        
    },

    informationTime(val) {
      let time = new Date(val);
      return (
        time.getFullYear() + "/" + (time.getMonth() + 1) + "-" + time.getDate()
      );
    },
    // 详情
    handleDetails(val) {
      // 请求参数
      let data = {
        user_id: this.userInfo.user_id,
        message_type: val.message_type,
        message_id: val.message_id,
      };
      this.$router.push({path:this.$route.path,query:{...this.$route.query,message_id:val.message_id,message_type:val.message_type}})
      informationDetail(data)
        .then((res) => {
          // console.log(res.data, "详情");
          if (res.code == 20000) {
            this.detailData = res.data;
            // console.log(this.detailData[0].content,'优化前');
            // this.detailData[0].content = marked(this.detailData[0].content);
            this.$set(this.detailData[0],'content',marked(this.detailData[0].content))
          }
        })
        .catch((err) => {
          console.log(err, "详情失败");
        });
    },
  },
  computed: {},
};
</script>

<style scoped lang="scss">
.left-top{
  position: relative;
  top: -8px;
}
.detail_html /deep/ img{
  max-width: 100%;
}
.qr-code{
  width: 100%;
  display: flex;
  justify-content: space-between;
  img{
    width: 180px;
    height: 180px;
  }
}
#main {
  width: 100%;
  height: calc(100vh - 56px);
  background-color: rgb(241, 242, 245);
  display: flex;
  justify-content: center;
  // padding: 30px 0px;
  padding-top: 30px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  .go-back-page {
    display: flex;
    width: 55px;
    margin: 0px;
    // margin: 20px 0;
    position: absolute;
    top: 30px;
    left: 10px;
    // left: -80px;
    .back {
      cursor: pointer;
    }
  }

  > div {
    width: 80%;
    // height: calc(100vh -30px - 56px);
    margin-left: 80px;
    display: flex;
    justify-content: space-between;
    // overflow: scroll;

    .left {
      width: calc(100% - 330px - 20px);
      height: calc(100vh - 56px - 30px);
      // overflow-y: auto;
      #list {
        width: 100%;
        box-sizing: border-box;
        overflow-y: auto;
        // background: #FFF;
      }

      .left-box {
        width: 100%;
        height: 150px;
        padding: 15px;
        margin-bottom: 10px;
        box-sizing: border-box;
        background-color: white;
        border-radius: 5px;
        display: flex;

        .left-img {
          width: 180px;
          height: 100%;
          margin-right: 10px;
        }

        .left-content {
          width: calc(100% - 190px);
          height: 100%;
          position: relative;

          // background-color: #1F64FF;
          > div:first-child {
            width: 100%;
            position: absolute;
            top: 0px;
            > div:first-child {
              width: 100%;
              color: #333;
              font-family: PingFang SC;
              font-size: 18px;
              font-style: normal;
              font-weight: 600;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              line-height: 150%;
            }
            > div:last-child {
              color: #333;
              font-family: PingFang SC;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 150%;
              width: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
          }

          > div:last-child {
            color: #a6a6a6;
            font-family: PingFang SC;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            position: absolute;
            bottom: 0px;
            display: flex;

            .left-time {
              margin-right: 51px;
            }

            div:last-child {
              margin-left: 16px;
            }
          }
        }
      }

      .left-box:last-child {
        margin-bottom: 0px;
      }

      .left-detail {
        height: 100%;
        background-color: white;
        border-radius: 5px;
        padding: 15px;
        padding-bottom: 30px;
        box-sizing: border-box;
        overflow-y: auto;
        .detail-title {
          color: #333;
          font-family: PingFang SC;
          font-size: 30px;
          font-style: normal;
          font-weight: 500;
          line-height: 150%;
          /* 45px */
        }

        .detail-icon {
          display: flex;
          align-items: center;
          margin-top: 16px;
          img{
            width: 100%;
            height: 100%;
          }
          >div:first-child {
            width: 30px;
            height: 33px;
            flex-shrink: 0;
            border-radius: 6px;
            // background: #1f64ff;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 10px;
          }

          span {
            color: #333;
            font-family: PingFang SC;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 25px;
            /* 21px */
          }
          .add_code {
            font-size: 12px;
            padding: 0 12px;
            color: #1f64ff;
            border: 1px solid #1f64ff;
            border-radius: 2px;
            line-height: 28px;
            cursor: pointer;
            margin-left: 10px;
          }
        }

        > div:last-child {
          color: #a6a6a6;
          font-family: PingFang SC;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%;
          display: flex;
          margin-top: 15px;

          .left-time {
            margin-right: 51px;
          }

          div:last-child {
            margin-left: 16px;
          }
        }
      }

      .left-box:hover {
        cursor: pointer;
      }
    }

    .right {
      width: 330px;
      overflow: hidden;
      height: calc(100vh - 86px);
      .right-top {
        width: 100%;
        height: 310px;
        border-radius: 5px;
        background-color: white;
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        > img {
          width: 100%;
          height: 109px;
          position: absolute;
          top: 0;
        }

        > div {
          position: relative;
          top: 10px;

          img {
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            width: 136px;
            height: 123px;
            text-align: center;
            margin: auto;
          }

          div {
            margin-top: 25px;
          }
        }
      }

      .related {
        width: 100%;
        height: calc(100vh - 56px - 30px - 330px);
        flex-shrink: 0;
        border-radius: 4px;
        padding: 14px;
        box-sizing: border-box;
        background: #fff;

        .related-box {
          width: 100%;
          // display: flex;
          // justify-content: space-between;
          margin-bottom: 12px;
          box-sizing: border-box;
          border: 1px solid #ccc;
          padding: 8px 0px;
          border-radius: 8px;
          .related-title {
            width: 100%;
            padding: 0px 8px;
            margin-bottom: 8px;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            > div:first-child {
              color: rgb(83, 137, 180);
            }
            > span {
              color: #333;
              font-family: PingFang SC;
              font-size: 12px;
              line-height: 100%;
            }
          }
          .releted-content {
            width: 100%;
            padding: 0px 8px;
            box-sizing: border-box;
            color: #333;
            font-family: PingFang SC;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .related-img {
            // border-radius: 10px;
            width: 100%;
            height: 150px;
            // height: 80px;
          }
        }
      }
    }
  }

  // .main-box {
  //   width: 100%;
  //   height: 100%;
  // }
}
</style>