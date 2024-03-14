<template>
  <div class="notice-detail">
    <go-back></go-back>
    <div style="width: 70%;">
      <div style="display: flex;justify-content: center;">
        <div class="detailItem">
          <div v-html="messageList.content"></div>
        </div>
      </div>
      <div style="width: 218px;"></div>
    </div>
  </div>
</template>

<script>
import { messageCenterContent } from '../../api/notice'
import goBack from '../../components/goBack'

export default {
  name: 'notice-detail',
  data() {
    return {
      userInfo: {},
      messageId: '',
      messageList: []
    }
  },
  components: {
    goBack
  },
  mounted() {
    if (this.$route.query.id != undefined) {
      this.messageId = this.$route.query.id
    }
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
    this.queryMessageCenterContent()
  },
  methods: {
    queryMessageCenterContent() {
      let userInfo = JSON.parse(localStorage.getItem('userInfo'))
      let data = {
        user_id: userInfo.user_id,
        message_id: this.messageId
      }
      messageCenterContent(data).then(res => {
        console.log(res);
        this.messageList = res.data[0]
        document.title = res.data[0].title
      })
    }
  }
}
</script>

<style scoped>
/* .detailItem {
  width: 50%;
} */
.notice-detail {
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 80px;
}
</style>

<style>
.notice-detail p{
  margin: 0;
  padding: 0;
}
</style>