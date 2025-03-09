<template>
  <div class="father">
     <div class="son" style="background-color: aqua">1</div>
     <div class="son" style="background-color: blueviolet">2</div>
     <div class="son" style="background-color: burlywood">3</div>
     <div class="son" style="background-color: chartreuse">4</div>
    </div>
</template>
<script>
export default {
  name: 'testHtml',
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.father {
   width: 400px;
   height: 400px;
   background-color: #ddd;
   display: flex;
   flex-wrap: wrap;
}
.son {
   width: 120px;
   //height: 120px;
}
</style>
