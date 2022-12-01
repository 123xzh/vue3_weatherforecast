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
        <el-form-item label="地区：" prop="zone">
          <el-autocomplete
            v-model="state"
            :fetch-suggestions="querySearchAsync"
            @select="handleSelect"
            bottom-start
          />
        </el-form-item>
        <el-form-item>
          <el-button @click="dialogVisible = true" type="primary" round
            >修改</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <el-dialog title="修改用户名" v-model="dialogVisible" width="30%">
      <span>确定修改该用户地区吗</span>
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
import {
  defineComponent,
  onMounted,
  reactive,
  ref,
  toRefs,
  inject,
  watch,
  toRaw,
} from "vue";
import { editzone } from "@/request/api";
import { ElLoading } from "element-plus";
import { ElMessage } from "element-plus";

export default defineComponent({
  setup() {
    const data = reactive({
      ruleForm: {
        zone: "",
      },
      dialogVisible: false,
    });
    const links = ref([]);
    const state = ref("");

    let aa = inject("linkdata");
    onMounted(() => {
      links.value = aa._value;
    });
    var validatePass3 = (rule, value, callback) => {
      // console.log(state);
      var a = links.value.map((v) => v.value);
      if (a.indexOf(state._value) == -1) {
        callback(new Error("地区不存在"));
      } else {
        callback();
      }
    };

    // watch(state, (newName, oldName) => {
    //   // console.log("newName", newName);
    //   console.log(data.ruleForm.zone);
    // });
    const rules = {
      zone: [
        {
          message: "所选的地区不存在",
          validator: validatePass3,
          trigger: "blur",
        },
      ],
    };

    const ruleFormRef = ref();

    const submitForm = (formEl) => {
      if (!formEl) return;

      //   对表单的内容进行验证
      //   valid布尔类型，为true表示验证成功，反之失败
      formEl.validate((valid) => {
        if (valid) {
          // console.log(data.ruleForm.zone);
          var aaa = state._value;
          var linksdataget = toRaw(links._value);
          var a1 = linksdataget.find((item) => item.value == aaa);
          data.ruleForm.zone = a1.link;
          // console.log(a1);
          // console.log(data.ruleForm.zone);
          //     console.log(a1.link);
          // console.log(linksdataget);
          // console.log(aaa);
          // var bbb= findSelect(aaa);
          // console.log(bbb);
          // console.log(state._value);
          var f = toRaw(aa._value);
          // console.log(f.value.find((item) => item.value == item.value));
          // console.log(valid);
          editzone({
            zone: data.ruleForm.zone,
          })
            .then((res) => {
              // console.log(res);
              setTimeout(() => {
                loading.close();
                ElMessage({
                  message: "成功",
                  type: "success",
                });
                data.dialogVisible = false;
              }, 2000);
              data.ruleForm.zone = "";
            })
            .catch((err) => {
              loading.close();
              ElMessage({
                message: "修改失败,请检查地区是否有误,或者重新选择",
                type: "error",
              });
              data.dialogVisible = false;
              console.log(err);
            });
          // console.log(res);
        } else {
          setTimeout(() => {
            loading.close();
            ElMessage({
              message: "修改失败,请检查地区是否有误,或者重新选择",
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
    const handleSelect = async (item1) => {
      // console.log(item1);
      let arr1 = "";
      data.ruleForm.zone = "";
      arr1 = await links.value.find((item) => item.value == item1.value);
      // console.log(arr1);
      data.ruleForm.zone = arr1.link;
      // console.log(data.ruleForm.zone);
    };
    const findSelect = (item1) => {
      let arr2 = "";

      arr2 = links.value.find((item) => item.value == item1.value);
      // console.log(arr1);
      return arr2;
    };

    return {
      ...toRefs(data),
      links,
      rules,
      ruleFormRef,
      submitForm,
      aa,
      state,
      timeout,
      querySearchAsync,
      createFilter,
      handleSelect,
      findSelect,
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