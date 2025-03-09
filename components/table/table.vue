<template>
  <div>
    <div class="name"></div>
    <el-table
        :data="datas"
        border
        :height="'calc(100% - 50px)'"
        style="width: 100%">
      <el-table-column
          label="第三大部分卡的是否"
          align="center"
          prop="column99"
          :min-width="getTableWidth(10)"
         >
      </el-table-column>
<!--       :min-width="getTableWidth(10)"-->
<!--      min-width="200"-->
     <template v-for="(item, index) in 20">
       <el-table-column
           :label="'第'+ index + '列'"
           align="center"
           :prop="'column' + index"
           :min-width="100">
       </el-table-column>
     </template>

      <el-table-column
          align="center"
          label="操作"
          fixed="right"
          :min-width="getTableWidth(20)"
      >
        <template slot-scope="scope">
          <div class="action-icon pointer">
            <el-button>编辑</el-button>
            <el-button>删除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'table',
  data() {
    return {
      datas: [
        {
          column0: '1',
          column1: '2',
          column2: '3',
          column3: '4',
          column4: '5',
          column5: '6',
          column6: '7',
          column7: '8',
          column99: '9999',
        }
      ],
      width: 200,
    }
  },
  computed: {
    getTableWidth() {
      return (val)=> {
        let htmlDom = document.querySelector('html');
        let htmlFontSize = htmlDom.style.fontSize;
        return (val*parseFloat(htmlFontSize)).toFixed(2);
      }
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.name {
  width: 200px;
}
</style>
