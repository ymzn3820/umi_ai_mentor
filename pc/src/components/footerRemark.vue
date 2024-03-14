<template>
  <div class="footer_remark" >
          <span class="remark">版权所有© 深圳优秘智能科技有限公司 | <a href="https://beian.miit.gov.cn/" target="_blank" style="color: #999999;">粤ICP备2023094291号-1</a></span>
          <span class="remark" @click="showArgee(1)"  style="cursor: pointer;margin-left: 4px;">服务协议</span>
          <span class="remark" style="margin: 0 4px" >|</span>
          <span class="remark" @click="showArgee(2)" style="cursor: pointer;">及隐私政策</span>
          <span class="remark" style="margin: 0 4px">|</span>
          <span class="remark" @click="showArgee(3)" style="color: #1F64FF;cursor: pointer;">《免责声明》</span>
      </div>
</template>
<script>

</script>
<style scoped>
.footer_remark {
      box-sizing: border-box;
      width: 100%;
      line-height: 30px;
      background: rgb(241, 242, 245);
      display: flex;
      justify-content: center;
      color: #999999;
  }
  .remark {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      /* line-height: 150%; */
      color: #999999;
      display: flex;
      align-items: center;
      justify-content: center;
  }
</style>