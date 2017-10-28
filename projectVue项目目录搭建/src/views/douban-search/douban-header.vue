<template>
  <header class="header">
    <form action="">
      <input type="text" class="searchIpt" placeholder="请输入要搜索的关键字">
      <input @click="searchHandle" type="button" value="搜索相关书籍" class="btnIpt">
    </form>
  </header>
</template>

<script>
export default {
  props: ['action'],
  methods: {
    searchHandle(){
      this.$store && this.$store.dispatch(this.action)
    }
  }
}
</script>

<style scoped>

</style>
