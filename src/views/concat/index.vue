<template>
  <div>
    <t-nav></t-nav>
    <div class="concatMain">
      <div class="title">联系Flintec中国江苏授权代理 <span>无锡瑞驰曼科技有限公司</span></div>
      <div v-for="(item, index) in infoList" :key="index">
          <span>{{item.title}}{{item.content}}</span>
      </div>
    </div>
    <t-bottom></t-bottom>
  </div>
</template>

<script>
import api from './api'

export default {
  data () {
    return {
      infoList: []
    }
  },
  methods: {
    queryAll() {
      api.queryUsInfo().then(res => {
        console.log(res)
        if (res.body.resCode == "00100000") {
          this.infoList = res.body.obj
        }
      })
    }
  },
  created() {
    this.queryAll()
  },
}
</script>

<style lang="css" scoped>
.concatMain {
  font-family: "微软雅黑"
}
.concatMain .title {
  font-size: .6rem;
  border-bottom: 10px solid red;
  padding: .4rem 0;
}

.concatMain div {
  font-size: .28rem;
  margin-bottom: .2rem;
}
</style>

