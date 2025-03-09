<template>
  <div class="about">
    <h1 class="hello name">This is an about page</h1>
  </div>
</template>

<script>
export default {
  name: 'sss',
  data() {
    return {}
  },
  mounted() {
    import(/* webpackChunkName: "common" */ '../components/common.vue');
    import(/* webpackChunkName: "hello1" */ '../assets/css/hello1.css')
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.name {
  height: auto;
}
</style>