<template>
  <div>
    <t-nav></t-nav>
    <!-- 主要商品列表 -->
    <div class="goodsList">
      <ul>
        <li @click.stop="goodsDetail('sb8')">
          <div class="goodsItem"><img src="../../../static/img/goods/sb8.png" alt=""></div>
          <div class="goodsInfo"><span>SB8传感器为悬臂梁传感器</span></div>
        </li>
        <li @click.stop="goodsDetail('slb')">
          <div class="goodsItem"><img src="../../../static/img/goods/slb.png" alt=""></div>
          <div class="goodsInfo"><span>SLB悬臂梁式传感器</span></div>
        </li>
        <li @click.stop="goodsDetail('sb14')">
          <div class="goodsItem"><img src="../../../static/img/goods/sb14.png" alt=""></div>
          <div class="goodsInfo"><span>SB14悬臂梁式称重传感器</span></div>
        </li>
        <li @click.stop="goodsDetail('rc3')">
          <div class="goodsItem"><img src="../../../static/img/goods/rc3.png" alt=""></div>
          <div class="goodsInfo"><span>RC3柱式传感器</span></div>
        </li>
        <li @click.stop="goodsDetail('pc60')">
          <div class="goodsItem"><img src="../../../static/img/goods/pc60.png" alt=""></div>
          <div class="goodsInfo"><span>pc60单点称重传感器</span></div>
        </li>
        <li @click.stop="goodsDetail('pc42')">
          <div class="goodsItem"><img src="../../../static/img/goods/pc42.png" alt=""></div>
          <div class="goodsInfo"><span>pc42单点称重传感器</span></div>
        </li>
        <li @click.stop="goodsDetail('52-30')">
          <div class="goodsItem"><img src="../../../static/img/goods/52-30.png" alt=""></div>
          <div class="goodsInfo"><span>52-30称重模块</span></div>
        </li>
        <li @click.stop="goodsDetail('52-20')">
          <div class="goodsItem"><img src="../../../static/img/goods/52-20.png" alt=""></div>
          <div class="goodsInfo"><span>52-20称重模块</span></div>
        </li>
        <li @click.stop="goodsDetail('55-01-10')">
          <div class="goodsItem"><img src="../../../static/img/goods/55-01-10.png" alt=""></div>
          <div class="goodsInfo"><span>55-01-10称重模块</span></div>
        </li>
        <li @click.stop="goodsDetail('ke-4')">
          <div class="goodsItem"><img src="../../../static/img/goods/ke-4.png" alt=""></div>
          <div class="goodsInfo"><span>KE-4接线盒</span></div>
        </li>
        <li @click.stop="goodsDetail('keex-6')">
          <div class="goodsItem"><img src="../../../static/img/goods/keex-6.png" alt=""></div>
          <div class="goodsInfo"><span>KEEX-6接线盒</span></div>
        </li>
      </ul>
    </div>
    <t-bottom></t-bottom>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    goodsDetail(id) {
      this.$router.push({path: '/detail/' + id})
    }
  }
}
</script>

<style lang="css" scoped>
.goodsList {
  display: flex;
  position: relative;
  margin-top: 1rem;
}

.goodsList .goodsItem {
  width: 100%;
  height: 4.8rem;
}

.goodsList .goodsInfo {
  height: 1.2rem;
  line-height: 1.2rem;
  color:red;
}
ul li {
  width: 5.96rem;
  height: 5.96rem;
  float: left;
  flex: 1;
  margin-right: .6rem;
  margin-bottom: .4rem;
  text-align: center;
  border:1px solid #ccc;
}

ul li:hover {
  cursor: pointer;
}

ul li div {
}

ul li img {
  width: 100%;
}
</style>
