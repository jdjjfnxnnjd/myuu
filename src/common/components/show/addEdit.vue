<template>
  <div>
    <el-dialog
        title="新增1"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
      <el-form ref="formData" :model="formData" label-width="100px" class="demo-ruleForm" v-if="dialogVisible">
        <el-form-item label="密码" prop="pass">
          <el-input  v-model="formData.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input  v-model="formData.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model.number="formData.age"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
    </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'addEdit',
  data() {
    return {
      dialogVisible: false,
      formData: {
        pass: '',
        checkPass: '',
        age: '',
      },
    }
  },
  methods: {
    resetForm() {
      this.$refs.formData.resetFields();
      this.$emit('submit')
      // this.$refs.formData.resetInitValue();
    },
    handleClose() {
      this.$refs.formData.resetInitValue();
      this.$refs.formData.resetFields();
      this.dialogVisible = false
    },
    openDialog(formData) {
      this.dialogVisible = true;
      if (formData) {
        this.formData = JSON.parse(JSON.stringify(formData))
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
