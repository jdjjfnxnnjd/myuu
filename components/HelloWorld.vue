<template>
  <div>
    <div>
      <div id="chart" style="width: 600px; height: 400px;"></div>
    </div>
  </div>
</template>

<script>
import Child from './Child.vue';
import Vue from 'vue';
import * as echarts from "echarts";
export default {
    name: "HelloWorld",
    components: { Child },
    props: {
        msg: String
    },
    data() {
      return {
        name: 'zs',
        age: '22',
        obj: null,
        arr: [1,2],

        div2: true,
        div1: true,
        data:[],

      }
    },
    mounted() {

    },
    methods: {
      open() {
        window.open('http://localhost:8080/#/liveData');
      },
        watchName() {
          const unwatch = this.$watch(
              'formData',
              () => {
                console.log('数据发生了变化')
              },
              {
                deep: true
              }
          )
        },
        echoHello() {
          sessionStorage.setItem('key', '3333')
        }
    },
}
</script>
<!--<style lang="css" src="@/assets/css/test.css" scoped></style>-->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  margin: 50px;
  padding: 30px;
  width: 100%;
  height: 230px;
  border: 1px solid red;
  background: #42b983;
}
.color1 {
  background: black;
}
/*.name {
  color: $color;
  @extend .color1;
}
.name1 {
  @extend .name;
  width: 200px;
}*/
h3 {
  margin: 40px 0 0;
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
.div1 {
  width: 200px;
  height:200px;
  border: 1px solid red;
}
</style>
