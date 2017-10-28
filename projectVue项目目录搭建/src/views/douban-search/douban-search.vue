<template>
  <section class="warp">
		<section class="main">
      <douban-header action="getDushu"></douban-header>
      <douban-header  action="getDianying"></douban-header>
      <douban-content></douban-content>
		</section>
  </section>
</template>

<script>
import DoubanHeader from '@/views/douban-search/douban-header'
import DoubanContent from '@/views/douban-search/douban-content'
export default {
  components: {
    DoubanHeader,
    DoubanContent
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
