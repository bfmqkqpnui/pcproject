<template>
  <div>
    <t-nav></t-nav>
    <!-- 主要商品列表 -->
    <div class="goodsList">
      <ul>
        <li v-for="(item, index) in goodsList" :key="index" @click.stop="goodsDetail(item)">
          <div class="goodsItem"><img :src="item.imgUrl" alt=""></div>
          <div class="goodsInfo"><span v-text="item.goodsName"></span></div>
        </li>
      </ul>
    </div>
    <t-bottom></t-bottom>
  </div>
</template>

<script>
import api from './api'

export default {
  data() {
    return {
      goodsList: [],
    }
  },
  methods: {
    goodsDetail(item) {
      this.$router.push({path: '/detail/' + item.key})
    },
    queryAll() {
      api.queryList().then(res => {
        console.log(res)
        if (res.body.resCode == "00100000") {
          this.goodsList = res.body.obj
        }
      })
    },
  },
  created() {
    this.queryAll()
  },
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
