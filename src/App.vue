<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{margin: 0; padding: 0;}
body {
  font-size:.24rem;
}
img {
  vertical-align: middle;
  height: auto;
  border: 0;
  -webkit-touch-callout: none;
}
ul,li{ padding:0;margin:0;list-style:none}
#app {
  position: relative;
  top: 0;
  left: 0;
  max-width: 990px;
  width: 96%;
  margin: 0 auto;
}
</style>
