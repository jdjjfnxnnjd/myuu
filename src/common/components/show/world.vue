<template>
<div>
  <div class="div2">
    <div class="div1" ref="div1">v1div1</div>
    <img v-if="a" :src="a" alt="logo" />
    <p style="overflow: hidden">
      didiv1di  v1di v1div1 div  1div1 div 1div1d  i  v1div1di v1di v1  div1div div 1div1div  1div1di v1div1div1di v1di v1div1v1
      di1d i v1d iv1 div  1div1 div1div1d  i  v1div1di v1di v1  div1 div div 1div1div   1div1di v1div 1di v1di v d   iv1v1
      didiv1 iv1d  v1d iv div  1div 1 di  v1div1 d  i   v1div1di v1d i v1   div1div d  iv 1di  v1div  1d iv1di v1div  1div1di v1div 1div1v1
    </p>

  </div>
  <div>
    <el-select v-model="value" placeholder="请选择" :popper-append-to-body="false">
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>
    <el-date-picker
        popper-class="date-p"
        v-model="value1"
        type="datetime"
        placeholder="选择日期时间">
    </el-date-picker>
  </div>
</div>
</template>

<script>
export default {
  name: 'world',
  data() {
    return {
      value: '',
      value1: '',
      a: "@/assets/logo.png",
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
    }
  },
  mounted() {
    console.log(this.$refs.div1, 'this.$refs.div1')
    console.log(this.$refs.div1.innerHTML, 'this.$refs.div12')
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.div1 {
  width: 100px;
  height: 50px;
  background-color: red;
  float: left;
}
.div3 {
  width: 100px;
  height: 100px;
  background-color: salmon;
  margin-top: 20px;
  float: left;
}
.div2 {
  width: 500px;
  background-color: black;
}
::v-deep .el-select-dropdown__item {
  color: red;
}
::v-deep {
  .el-select-dropdown__item {
    color: red;
  }
  .el-select-dropdown {
    background-color: red !important;
  }
}

</style>
