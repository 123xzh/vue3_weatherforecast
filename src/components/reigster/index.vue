<template>
  <div class="backg">
    <div class="location">
      <div class="login-box">
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          status-icon
          :rules="rules"
          label-width="80px"
          class="demo-ruleForm"
          :hide-required-asterisk="false"
        >
          <h2>天气预报系统</h2>
          <h2>注册</h2>
          <el-form-item label="用户名：" prop="account">
            <el-input v-model.trim="ruleForm.account" autocomplete="off" />
          </el-form-item>
          <el-form-item label="账号：" prop="username">
            <el-input v-model.trim="ruleForm.username" autocomplete="off" />
          </el-form-item>
          <el-form-item label="邮箱：" prop="email">
            <el-input v-model.trim="ruleForm.email" autocomplete="off" />
          </el-form-item>
          <el-form-item label="密码1：" prop="password1">
            <el-input
              v-model.trim="ruleForm.password1"
              type="password"
              autocomplete="off"
            />
          </el-form-item>
          <el-form-item label="密码2：" prop="password2">
            <el-input
              v-model.trim="ruleForm.password2"
              type="password"
              autocomplete="off"
            />
          </el-form-item>
          <el-form-item label="地区：" prop="zone">
            <el-autocomplete
              v-model="state"
              :fetch-suggestions="querySearchAsync"
              @select="handleSelect"
              bottom-start
            />
          </el-form-item>

          <el-form-item>
            <router-link to="/login" replace>
              <el-button type="primary">返回登录</el-button>
            </router-link>
            <el-button type="primary" @click="submitForm(ruleFormRef)"
              >注册</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  reactive,
  toRefs,
  ref,
  onMounted,
  toRaw,
  inject,
} from "vue";
import { register } from "@/request/api";
import { useRouter } from "vue-router";
import { ElMessage } from 'element-plus'
export default defineComponent({
  setup() {
    const data = reactive({
      ruleForm: {
        username: "",
        account: "",
        email: "",
        password1: "",
        password2: "",
        zone: [],
      },
    });
    const links = ref([]);
    let aa = inject("linkdata");

    onMounted(() => {
      
      links.value = aa._value;
      // console.log(aa._value);
    });
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("密码不能为空"));
      } else if (value !== data.ruleForm.password1) {
        // console.log();
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    const handleSelect = (item1) => {
      let arr1 = [];
      arr1 = links.value.find((item) => item.value == item1.value);
      data.ruleForm.zone = arr1.link;
    };
    var validatePass3 = (rule, value, callback) => {
      var a = links.value.map((v) => v.value);
      if (a.indexOf(state._value) == -1) {
        callback(new Error("地区不存在"));
      } else {
        callback();
      }
    };

    const rules = {
      account: [
        {
          required: true,
          message: "请输入用户名",
          trigger: "blur",
        },
        {
          min: 3,
          max: 10,
          message: "用户名的长度在3到10之间",
          trigger: "blur",
        },
      ],
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
      email: [
        {
          required: true,
          message: "请输入邮箱",
          trigger: "blur",
        },
        {
          pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
          message: "邮箱格式错误",
          trigger: "blur",
        },
      ],
      password1: [
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
      password2: [
        // {
        //   required: true,
        //   message: "请再次输入你的密码",
        //   trigger: "blur",
        // },
        {
          //   min: 3,
          //   max: 10,
          // message: "两次密码不一致",
          validator: validatePass2,
          trigger: "blur",
        },
      ],
      zone: [
        {
          message: "所选的地区不存在",
          validator: validatePass3,
          trigger: "blur",
        },
      ],
    };

    const ruleFormRef = ref();
    const router = useRouter();
    const submitForm = (formEl) => {
      // console.log(state._value);

      // console.log(links.value);
      var linksdataget = toRaw(links._value);
      // console.log(linksdataget);
      var a1 = linksdataget.find((item) => item.value ==state._value);
      // console.log(a1.link);
      // console.log(data.ink);
      if (!formEl) return;
      //   对表单的内容进行验证
      //   valid布尔类型，为true表示验证成功，反之失败
      formEl.validate((valid) => {
        if (valid) {
          register({

            username: data.ruleForm.username,
            account: data.ruleForm.account,
            password: data.ruleForm.password2,
            mail: data.ruleForm.email,
            zone: a1.link,         
          }).then((res) => {
            // localStorage.setItem("token", res.data.token);
            // 跳转页面：首页
            router.push("/login");
          }).catch((err) => {
              ElMessage({
                showClose: true,
                message: "账号已注册",
                type: "error",
              })
               })
        } else {
          console.log("error submit!");
          return false;
        }
      });
    };
    const state = ref("");
    let timeout = 4;
    const querySearchAsync = (queryString, cb) => {
      const results = queryString
        ? links.value.filter(createFilter(queryString))
        : links.value;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    };
    const createFilter = (queryString) => {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    };

    return {
      ...toRefs(data),
      rules,
      ruleFormRef,
      submitForm,
      router,
      validatePass2,
      validatePass3,
      links,
      state,
      timeout,
      querySearchAsync,
      createFilter,
      handleSelect,
      aa,
      // actionget
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
.backg {
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
  margin-top: 150px;
  width: 450px;
  height: 300px;
  // background: rgba(235, 235, 235, 0.7);
  border-radius: 20px;
}
</style>