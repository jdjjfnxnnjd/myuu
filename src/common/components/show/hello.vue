<template>
  <div>
    <el-table :data="shipData" style="width: 100%;" max-height="700px"
              :header-cell-style="{ background: '#f8f8f9' }"
              border stripe
              highlight-current-row
              :row-key="row => row.id"
              :reserve-selection="true"
             >
      <el-table-column prop="id" show-overflow-tooltip label="id" min-width="150">
      </el-table-column>
      <el-table-column prop="name" show-overflow-tooltip label="名称" min-width="150">
      </el-table-column>
    </el-table>
    <el-button @click="edit">编辑</el-button>
    <add-edit ref="addEdit" @submit="submit"></add-edit>
  </div>
</template>

<script>
import AddEdit from "@/components/show/addEdit.vue";

export default {
  name: 'hello',
  components: {AddEdit},
  data() {
    return {
      showName: false,
      shipData: [
        {
          id: 1,
          name: '123ddd'
        },
        {
          id: 2,
          name: '123d'
        },
        {
          id: 3,
          name: '123s'
        },
        {
          id: 4,
          name: '123a'
        },
      ],
    }
  },
  methods: {
    move() {
      this.$refs['name'].style.width = 500 + 'px'
    },
    submitBtn() {

    },
    edit() {
      this.$refs.addEdit.openDialog();
    },
    submit() {
      this.shipData = [
        {
          id: 1,
          name: '123ddd'
        },
        {
          id: 2,
          name: '123dsss'
        },
        {
          id: 3,
          name: '123s'
        },
        {
          id: 4,
          name: '123a'
        },
      ];
    }
  }
}
</script>
<style scoped lang="scss">
 .name {
   width: 200px;
   height: 20px;
   background: red;
   transition: all 3s ease;
 }
</style>
