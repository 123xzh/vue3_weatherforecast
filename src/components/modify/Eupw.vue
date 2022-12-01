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
        <el-form-item label="密码：" prop="password">
          <el-input v-model.trim="ruleForm.password" autocomplete="off" />
        </el-form-item>
        <el-form-item>
          <el-button @click="dialogVisible = true" type="primary" round
            >修改</el-button
          >
        </el-form-item>
      </el-form>
    </div>

    <el-dialog title="修改密码" v-model="dialogVisible" width="30%">
      <span>确定修改密码吗</span>
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
import { editpassword } from "@/request/api";
import { ElLoading } from "element-plus";
import { ElMessage } from "element-plus";
export default defineComponent({
  setup() {
    const data = reactive({
      ruleForm: {
        password: "",
      },
      dialogVisible: false,
    });

    const fullscreenLoading = ref(false);
    const rules = {
      password: [
        {
          required: true,
          message: "请输入密码",
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

    onMounted(() => {});

    const ruleFormRef = ref();
    const submitForm = (formEl) => {
      // console.log(data);
      if (!formEl) return;
      //   对表单的内容进行验证
      //   valid布尔类型，为true表示验证成功，反之失败
      formEl.validate((valid) => {
        if (valid) {
          //   console.log("submit!");
          editpassword({
            password: data.ruleForm.password,
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
            ElMessage({
              message: "修改失败,请检查密码格式是否有误",
              type: "error",
            });
            data.dialogVisible = false;
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
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  position: absolute;
}
::-webkit-scrollbar-thumb {
  background-color: #1890ff;
}
::-webkit-scrollbar-track {
  background-color: #ddd;
}
</style>