<template>
    <h2 class="titlelogo">请选择地区</h2>
  <div class="cityselectbox">
    <div class="content" v-for="citydata in citycatelist" :key="citydata">
      <div id="citybox">
        <el-tag class="ml-2" id="cityname" type="danger">{{ citydata }}</el-tag>
        <div
          v-for="citydata in cityjson[citydata]"
          :key="cityjson"
          class="citybox"
        >
          <el-tag
            class="ml-3"
            type="success"
            @click="getcity(citydata.value)"
            >{{ citydata.value }}</el-tag
          >
        </div>
      </div>
    </div>
  </div>
  <el-button class="butt" @click="getcitylist">点击加载更多</el-button>
</template>

<script>
import { reactive, toRefs, inject, onMounted, toRaw, computed } from "vue";
// import { zonedata } from "@/request/api";
import { editzone } from "@/request/api";
import { ElMessage } from "element-plus";
import { ElLoading } from "element-plus";
export default {
  setup() {
    let aa = inject("linkdata");
    const state = reactive({
      count: 0,
      FristPin: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "M",
        "N",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "W",
        "X",
        "Y",
        "Z",
      ],
      //   cityData:{
      cityjson: {},
      //   cityname: {},
      citycate: {},
      //   }
      limit: 3,
      page: 2,
      citydata: {},
      citycatelist: ["A", "B", "C"],
    });
    // const getzonedata = async ()=>{
    //    state.citydata = await zonedata();
    // }

    onMounted(() => {
      // getzonedata();
      // console.log("city",state.citydata);
      let pinyin = require("js-pinyin");
      pinyin.setOptions({ checkPolyphone: false, charCase: 0 });
      const list = toRaw(aa._value);
      let cityArr = [];
      for (let i = 0; i < list.length; i++) {
        let cityName = list.map((v) => v.value)[i];
        let fristName = pinyin.getCamelChars(cityName).substring(0, 1);
        // console.log(fristName);
        list[i].first = fristName;
        cityArr.push(list[i]);
      }
      //   console.log(cityArr);
      let cityJson = {};
      for (let i = 0; i < state.FristPin.length; i++) {
        cityJson[state.FristPin[i]] = cityArr.filter(function (value) {
          return value.first === state.FristPin[i];
        });
      }

      state.cityjson = cityJson;
      //   console.log(state.cityjson['A']);
      state.citycate = Object.keys(cityJson);
      // console.log(state.cityjson);
      // console.log(state.citycate.slice((state.page - 1) * state.limit, state.page * state.limit));
    });
    const getcity = (value) => {
      var linksdataget = toRaw(aa._value);
      var a1 = linksdataget.find((item) => item.value == value);
      // console.log(value);
      // console.log(a1.link);
      editzone({
        zone: a1.link,
      })
        .then((res) => {
          console.log(res);
          loading.close();
          ElMessage({
            message: "修改成功,请返回主页面查看",
            type: "success",
          });
        }).catch((err) => {
          loading.close();
          ElMessage({
            message: "修改失败,请检查地区是否有误,或者重新选择",
            type: "error",
          });
          // data.dialogVisible = false;
          console.log(err);
        });
      const loading = ElLoading.service({
        lock: true,
        text: "Loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
    };
    const Datatoal = computed(() => {
      // 该函数的返回值就是计算属性的值
      return state.citycate.slice(
        (state.page - 1) * state.limit,
        state.page * state.limit
      );
    });
    const getcitylist = () => {
      var a = state.citycate.slice(
        (state.page - 1) * state.limit,
        state.page * state.limit
      );
      const list = toRaw(state.cityjson);
      state.page++;
      console.log("a", a);
      state.citycatelist.push(...a);
      // console.log("b", state.citycatelist);
      // console.log(a.length);
      for (let i = 0; i < a.length; i++) {
        var a1 = list[a[i]];
        // console.log(a[i],a1);
      }
      if (a1 == undefined) {
        ElMessage({
          message: "很抱歉，当前省份地区没有那么多 ╮(๑•́ ₃•̀๑)╭",
          type: "warning",
        });
      }
      // console.log(a1);
      // console.log(list);
    };
    return {
      ...toRefs(state),
      aa,
      getcity,
      Datatoal,
      getcitylist,
      //   getzonedata
    };
  },
};
</script>

<style lang="scss" scoped>
.cityselectbox {
  height: 400px;
  width: 407px;
  overflow: scroll;
}
.content {
  width: 400px;
  // height: 150px;
  background-color: aqua;
  //   float: left;
  // overflow: hidden;
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

.citybox {
  width: 70px;
  float: left;
  height: 20px;
  cursor: pointer;
  //   padding-left: 20px;
  //   background-color: red;
  margin-left: 30px;
  text-align: center;
  line-height: 10px;
}
#citybox {
  height: 100%;
  width: 400px;
  background-color: azure;
  // border-radius: 5% 5%;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden; /*这个参数根据需求来决定要不要*/
  border: solid red 1px;
  //   box-sizing: abs($number: 0);
}
.ml-2 {
  position: relative;
  // transform:translateX(-125px);
  // z-index: 99;
  float: right;
  // left: 50px;

  right: 20px;
}
#cityname {
  // position: relative;
  // left: 10px;
}
.butt{
  margin-left: -100px;
}
 //显示时按钮样式 

.titlelogo{
  // float: left;
  // position: absolute;
  // left:20px;
  margin-right: 70px;
}
</style>