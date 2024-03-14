<template>
  <div class="notice-index">
    <div style="display: flex;justify-content: space-between;padding: 0 100px 0 50px;border-bottom: 1px solid #E5E6EB;">
      <el-button type="text" @click="$router.go(-1)" icon="el-icon-arrow-left">返回</el-button>
      <el-button type="text" @click="readAll"><i class="el-icon-brush" style="transform: rotateZ(180deg);"></i> 一键已读</el-button>
    </div>
    <div class="notice-list">
      <div class="notice-item" v-for="item in noticeList" :key="item.message_id" @click="readNotice(item)">
        <el-badge :is-dot="item.is_read == 1 ? false : true" class="item">{{ item.title }}</el-badge>
        <div class="contents">{{ item.desc }}</div>
      </div>

      <div v-if="noticeList.length == 0" style="height: 40px;line-height: 40px;text-align: center;font-weight: bold;">
        暂无数据
      </div>
    </div>

    <div style="display: flex;justify-content: flex-end;margin-top: 10px;">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalPage">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { messageCenter, messageCenterState } from '../../api/notice'
import { mapGetters } from 'vuex'
import httpUrls from '../../api/requestURL'
export default {
  name: 'notice-index',
  data() {
    return {
      noticeList: [],
      userInfo: {},
      pageNum: 1,
      pageSize: 10,
      totalPage: 0
    }
  },
  computed: {
    ...mapGetters(['noticeReadAll'])
  },
  watch: {
    noticeReadAll: {
      deep: true,
      handler() {
        if (this.noticeReadAll == 1) {
          this.queryMessageCenter()
        }
      }
    }
  },
  mounted() {
    document.title = httpUrls.name
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
    this.queryMessageCenter()
  },
  methods: {
    readAll() {
      let userInfo = JSON.parse(localStorage.getItem('userInfo'))
      messageCenterState({user_id: userInfo.user_id,}).then(res => {
        if (res.code == 20000) {
          this.$store.dispatch('user/changeNoticeReadAll', 1)
        } else {
          this.$message.error('网络异常，请稍后重试')
        }
      })
    },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val
      this.queryMessageCenter()
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pageNum = val
      this.queryMessageCenter()
    },

    // 公告列表
    queryMessageCenter() {
      let userInfo = JSON.parse(localStorage.getItem('userInfo'))
      let data = {
        user_id: userInfo.user_id,
        page_index: this.pageNum,
        page_count: this.pageSize
      }
      messageCenter(data).then(res => {
        console.log(res);
        this.noticeList = res.data
        this.totalPage = Number(res.total)
        res.data.forEach(v => {
          if (v.is_read == '0') {
            this.$store.dispatch('user/changeNoticeReadAll', 0)
          }
        });
      })
    },

    // 前往公告详情
    readNotice(item) {
      let data = {
        user_id: this.userInfo.user_id,
        message_ids: [item.message_id]
      }
      if (item.is_read != 1) {
        messageCenterState(data).then(res => {
          if (res.code == 20000) {
          } else {
            this.$message.error('网络异常，请稍后重试')
          }
        })
      }
      this.$router.push({
        path: '/noticeIndex/detail',
        query: {id: item.message_id}
      })
    }
  }
}
</script>

<style scoped>
.notice-item {
  padding: 10px 0 10px 40px;
  border-bottom: 1px solid #E5E6EB;
  cursor: pointer;
}

.notice-item .contents {
  overflow: hidden;
  color: #666;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}
</style>

<style>
.notice-item .item {
  color: #333;
font-size: 16px;
font-weight: 500;
line-height: 22px;
}
</style>