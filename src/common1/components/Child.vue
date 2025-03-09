<template>
  <div>
    <div class="name">name22222222222</div>
    <el-button>按钮</el-button>
    <el-input></el-input>
    <el-form>
      <el-form-item label="姓名">
        <el-input></el-input>
      </el-form-item>
    </el-form>
    <div class="p-class">
      <div class="c-class"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Child',
  data() {
    return {
      name: '张三'
    }
  },
  mounted() {
    this.draw();
    const intersectionObserver = new IntersectionObserver(entries => {
      if (entries[0].intersectionRatio <= 0) return
      console.log('元素显示出来了')
    })
    // 开始监听
    intersectionObserver.observe(document.querySelector('#logo'))
  },
  methods: {
    getName() {
      console.log('我是子组件方法')
    },
    getChild() {
      console.log('我是child')
    },
    draw(){
    },

  }
}
</script>
<style lang="css" src="@/assets/css/test.css" scoped></style>
<style scoped>
.div1 {
  width: 50px;
  height: 50px;
  border: 1px solid yellow;
}
/*>>> .el-button span{
  color: red;
}*/
.el-button{
  background: red;
}
/*>>> .el-button{
  background: red;
}*/
.p-class {
  .c-class {
    width: 55px;
    height: 50px;
    background: red;
  }
}
</style>
