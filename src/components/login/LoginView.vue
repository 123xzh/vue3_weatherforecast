<template>
  <div class="backg">
    <div class="location">
      <div class="login-box">
        <el-form
          :hide-required-asterisk="false"
          ref="ruleFormRef"
          :model="ruleForm"
          status-icon
          :rules="rules"
          label-width="80px"
          class="demo-ruleForm"
        >
          <h2>气象预报可靠性大数据分析系统 V1.0</h2>
          <h2>登录</h2>
          <el-form-item label="账号：" prop="username">
            <el-input v-model.trim="ruleForm.username" autocomplete="off" />
          </el-form-item>
          <el-form-item label="密码：" prop="password">
            <el-input
              v-model.trim="ruleForm.password"
              type="password"
              autocomplete="off"
            />
          </el-form-item>

          <el-form-item>
            <el-button
              class="loginbtn"
              type="primary"
              @click="submitForm(ruleFormRef)"
              >登录</el-button
            >
            <!-- <el-button class="loginbtn" @click="resetForm(ruleFormRef)"
              >重置</el-button
            > -->
            <router-link to="/reigster">
              <el-button type="primary">注册</el-button>
            </router-link>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs, ref } from "vue";
import { loginentry } from "@/request/api";
import { useRouter } from "vue-router";
import { ElMessage } from 'element-plus'
import Cookies from "js-cookie";
export default defineComponent({
  setup() {
    const data = reactive({
      ruleForm: {
        username: "",
        password: "",
      },
    });
    const rules = {
      username: [
        {
          required: true,
          message: "请输入账号",
          trigger: "blur",
        },
        {
          min: 3,
          max: 10,
          message: "账号的长度在3到10之间",
          trigger: "blur",
        },
      ],
      password: [
        {
          required: true,
          message: "请输入你的密码",
          trigger: "blur",
        },
        {
          min: 3,
          max: 10,
          message: "密码的长度在3到10之间",
          trigger: "blur",
        },
      ],
    };
    // 登录
    const ruleFormRef = ref();
    const router = useRouter();
    const submitForm = (formEl) => {
      // zonedata().then(res=>{
      //   console.log(res);
      // })
      if (!formEl) return;
      //   对表单的内容进行验证
      //   valid布尔类型，为true表示验证成功，反之失败
      formEl.validate((valid) => {
        if (valid) {
          //   console.log("submit!");
          loginentry({
            // data: {
            account: data.ruleForm.username,
            password: data.ruleForm.password,
            // },
          })
            .then((res) => {
              // document.cookie = token;
              localStorage.setItem("token", res.data.result.token);
              Cookies.set("token", res.data.result.token);
              // 跳转页面：首页
              router.push("/home");
            }).catch((err) => {
              ElMessage({
                showClose: true,
                message: "账号或者密码有误",
                type: "error",
              });
            });
        } else {
          console.log("error submit!");
          return false;
        }
      });
      // console.log(formEl);
    };

    return {
      ...toRefs(data),
      rules,
      ruleFormRef,
      submitForm,
      router,
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
.backg    {
    background-image: url("@/assets/login.jpg");
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: contain;
    background-size: 100% 100%;
    height: 100%;
    position: fixed;
    width: 100%;
    text-align: center;
}
.location {
  display: flex;
  justify-content: center;
}
.login-box {
  margin-top: 200px;
  width: 450px;
  height: 300px;
  // background: rgba(235, 235, 235, 0.7);
  border-radius: 20px;
}
</style>