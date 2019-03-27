<style lang="css" src="../views/home/css/index.css" scoped></style>

<template>
  <div class="body">
    <div class="nav topbar">
      <span class="navLeft"><img src="../views/home/css/i/log.jpg" alt=""></span>
      <span class="companyName">无锡瑞驰曼科技有限公司</span>
      <span class="navRight" @click.stop="concatUs"><img src="../views/home/css/i/phone.png" />联系我们</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 't-nav',
  data() {
      return {
          title: ''
      }
  },
  methods: {
    concatUs() {
      this.$router.push({path: '/contact'})
    }
  }
}
</script>
