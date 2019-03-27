<template>
  <div>
    <t-nav></t-nav>
    <!-- 详情 -->
    <div class="product">
      <!-- 图片 -->
      <div class="left"><img :src="productImg" alt=""></div>
      <!-- 简介 -->
      <div class="right">
        <div>
          <span>商品名称：</span><span v-text="productName"></span>
        </div>
        <!-- 下载PDF -->
      <div @click="download" class="btn btn-success bottom">下载PDF</div>
      </div>
    </div>
    <t-bottom></t-bottom>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productId: '',
      productImg: '',
      productName: '',
      downLoadUrl: '',
      goodsList: [],
    }
  },
  created() {
    let id = this.$route.params.id
    this.productId = id
    this.init()
  },
  methods: {
    download() {
      location.href =  this.downLoadUrl
    },
    init() {
      if (this.productId) {
        let goodsId = this.productId.toLowerCase()
        this.productImg = '/static/img/goods/' + goodsId + '.png'
        this.downLoadUrl = '/static/pdf/' + this.productId.toUpperCase() + '.pdf'

        if (goodsId == 'sb8' || goodsId == 'sb14' || goodsId == 'slb') {
          this.productName = this.productId.toUpperCase() + '悬臂梁式称重传感器'
        }
        if (goodsId == 'rc3') {
          this.productName = this.productId.toUpperCase() + '柱式传感器'
        }
        if (goodsId == 'pc42' || goodsId == 'pc60') {
          this.productName = this.productId.toUpperCase() + '单点称重传感器'
        }
        if (goodsId == '52-20' || goodsId == '52-30' || goodsId == '55-01-10') {
          this.productName = this.productId.toUpperCase() + '称重模块'
        }
        if (goodsId == 'ke-4' || goodsId == 'keex-6') {
          this.productName = this.productId.toUpperCase() + '不锈钢接线盒'
        }
      }
    },
  },
  watch: {
    "$route" (to, from) {
      if (this.$route.params.id) {
        let id = this.$route.params.id
        this.productId = id
        this.init()
      }
    }
  }
}
</script>

<style lang="css" scoped>
.product {
  display: flex;
  margin: .2rem;
  position: relative;
}

.product .left {
  width: 6rem;
  height: 8rem;
  border: 1px solid #ccc;
  flex: 1;
}

.product .left img {
  width: 100%;
}

.product .right {
  flex: 1;
  margin-left: .2rem;
  position: relative;
}

.product .right div {
  font-size: .3rem;
}

.btn {
  width: 1.4rem;
  height: .5rem;
  background: gray;
  text-align: center;
  line-height: .5rem;
}

.btn.bottom{
  position: absolute;
  bottom: 0rem;
  right: 0rem;
}

.btn.btn-success {
  background: greenyellow;
  cursor: pointer;
}

.btn.btn-success:hover {
  background: #12c;
  color:#fff;
  cursor: pointer;
}
</style>

