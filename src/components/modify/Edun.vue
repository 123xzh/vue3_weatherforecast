<template>
  <div class="location">
    <div class="login-box">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="80px"
        class="demo-ruleForm"
        :hide-required-asterisk="true"
      >
        <el-form-item label="用户名：" prop="username">
          <el-input v-model.trim="ruleForm.username" autocomplete="off" />
        </el-form-item>
        <el-form-item>
          <el-button @click="dialogVisible = true" type="primary" round
            >修改</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <el-dialog title="修改用户名" v-model="dialogVisible" width="30%">
      <span>确定修改用户名吗</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="submitForm(ruleFormRef)"
            >确认</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive, ref, toRefs } from "vue";
import { editusername } from "@/request/api";
import { ElLoading } from "element-plus";
import { ElMessage } from "element-plus";
export default defineComponent({
  setup() {
    const data = reactive({
      ruleForm: {
        username: "",
      },
      dialogVisible: false,
    });

    onMounted(() => {});

    const rules = {
      username: [
        {
          required: true,
          message: "请输入用户名",
          trigger: "blur",
        },
        {
          min: 3,
          max: 10,
          message: "用户的名字的长度在3到10之间",
          trigger: "blur",
        },
      ],
    };

    const ruleFormRef = ref();
    const submitForm = (formEl) => {
      // console.log(data);
      if (!formEl) return;
      //   对表单的内容进行验证
      //   valid布尔类型，为true表示验证成功，反之失败
      formEl.validate((valid) => {
        if (valid) {
          //   console.log("submit!");
          editusername({
            username: data.ruleForm.username,
          }).then((res) => {});
          setTimeout(() => {
            loading.close();

            ElMessage({
              message: "成功",
              type: "success",
            });
             data.dialogVisible = false
          }, 2000);
        } else {
          setTimeout(() => {
            loading.close();
              data.dialogVisible = false
            ElMessage({
              message: "修改失败,请检测用户名格式是否有误",
              type: "error",
            });
          }, 2000);
          console.log("error submit!");
          return false;
        }
      });
      const loading = ElLoading.service({
        lock: true,
        text: "Loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
    };

    return {
      ...toRefs(data),

      rules,
      ruleFormRef,
      submitForm,
    };
  },
});
</script>

<style lang="scss" scoped>
h2 {
  font-size: 30px;
  color: aliceblue;
  font-family: "楷体";
}

.location {
  display: flex;
  justify-content: center;
}
.login-box {
  margin-top: 10px;
  width: 450px;
  height: 300px;
  // background: rgba(235, 235, 235, 0.7);
  border-radius: 20px;
}
</style>