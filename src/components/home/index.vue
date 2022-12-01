<template>
  <!-- <div id="backghome"> -->
  <div id="backghome" :style="setBgColor(bgColor)">
    <template
      v-if="
        climate === '冻雨' ||
        climate === '特大暴雨' ||
        climate === '大暴雨' ||
        climate === '暴雨' ||
        climate === '大雨' ||
        climate === '雷阵雨伴有冰雹' ||
        climate === '雷阵雨' ||
        climate === '阵雨' ||
        climate === '小雨' ||
        climate === '中雨'
      "
    >
      <rainview />
    </template>
    <template
      v-if="
        climate === '暴雪' ||
        climate === '大雪' ||
        climate == '中雪' ||
        climate == '小雪' ||
        climate === '阵雪' ||
        climate === '雨夹雪' ||
        climate === '雪'
      "
    >
      <snowview />
    </template>
    <div class="loaction">
      <div class="continer">
        <div class="common-layout">
          <el-container>
            <div class="top-box">
              <!-- <el-main> -->
              <el-row id="home" :gutter="24">
                <el-col :span="12">
                  <el-card shadow="hover" class="w1" style="height: 210px">
                    <div class="bigbox">
                      <br />
                      <div class="box1">
                        <img
                          v-if="climate == '未知'"
                          src="@/static/icon/white/unkonwn.png"
                          alt=""
                        />
                        <img
                          v-if="climate == '热'"
                          src="@/static/icon/white/Hot.png"
                          alt=""
                        />
                        <img
                          v-if="climate == '冷'"
                          src="@/static/icon/white/Cold.png"
                          alt=""
                        />
                        <img
                          v-if="climate == '雪'"
                          src="@/static/icon/white/Cold.png"
                          alt=""
                        />
                        <img
                          v-if="climate == '龙卷风'"
                          src="@/static/icon/white/Tornado.png"
                          alt=""
                        />
                        <img
                          v-if="climate == '热带风暴'"
                          src="@/static/icon/white/TropicalStorm.png"
                          alt=""
                        />
                        <img
                          v-if="climate == '飓风'"
                          src="@/static/icon/white/Hurricane.png"
                          alt=""
                        />
                        <img
                          v-if="climate == '大风'"
                          src="@/static/icon/white/Blustery.png"
                          alt=""
                        />
                        <img
                          v-if="climate == '风'"
                          src="@/static/icon/white/Windy.png"
                          alt=""
                        />
                        <img
                          v-if="climate == '霾'"
                          src="@/static/icon/white/Haze.png"
                          alt=""
                        />
                        <img
                          v-if="climate == '雾'"
                          src="@/static/icon/white/Foggy.png"
                          alt=""
                        />
                        <img
                          v-if="climate == '强沙尘暴'"
                          src="@/static/icon/white/Sandstorm.png"
                          alt=""
                          雪
                        />
                        <img
                          v-if="climate == '沙尘暴'"
                          src="@/static/icon/white/Duststorm.png"
                          alt=""
                        />
                        <img
                          v-if="climate == '扬沙'"
                          src="@/static/icon/white/Sand.png"
                          alt=""
                        />
                        <img
                          v-if="climate == '浮尘'"
                          src="@/static/icon/white/Dust.png"
                          alt=""
                        />
                        <img
                          v-if="climate == '暴雪'"
                          src="@/static/icon/white/Snowstorm.png"
                          alt=""
                        />
                        <img
                          v-if="climate == '大雪'"
                          src="@/static/icon/white/HeavySnow.png"
                          alt=""
                        />
                        <img
                          v-if="climate == '中雪'"
                          src="@/static/icon/white/ModerateSnow.png"
                          alt=""
                        />
                        <img
                          v-if="climate == '小雪'"
                          src="@/static/icon/white/LightSnow.png"
                          alt=""
                        />
                        <img
                          v-if="climate == '阵雪'"
                          src="@/static/icon/white/SnowFlurry.png"
                          alt=""
                        />
                        <img
                          v-if="climate == '雨夹雪'"
                          src="@/static/icon/white/Sleet.png"
                          alt=""
                        />
                        <img
                          v-if="climate == '冻雨'"
                          src="@/static/icon/white/IceRain.png"
                          alt=""
                        />
                        <img
                          v-if="climate == '特大暴雨'"
                          src="@/static/icon/white/SevereStorm.png"
                          alt=""
                        />
                        <img
                          v-if="climate == '大暴雨'"
                          src="@/static/icon/white/HeavyStorm.png"
                          alt=""
                        />
                        <img
                          v-if="climate == '暴雨'"
                          src="@/static/icon/white/Storm.png"
                          alt=""
                        />
                        <img
                          v-if="climate == '大雨'"
                          src="@/static/icon/white/HeavyRain.png"
                          alt=""
                        />
                        <img
                          v-if="climate == '中雨'"
                          src="@/static/icon/white/ModerateRain.png"
                          alt=""
                        />
                        <img
                          v-if="climate == '小雨'"
                          src="@/static/icon/white/LightRain.png"
                          alt=""
                        />
                        <img
                          v-if="climate == '雷阵雨伴有冰雹'"
                          src="@/static/icon/white/ThundershowerwithHail.png"
                          alt=""
                        />
                        <img
                          v-if="climate == '雷阵雨'"
                          src="@/static/icon/white/Thundershower.png"
                          alt=""
                        />
                        <img
                          v-if="climate == '阵雨'"
                          src="@/static/icon/white/Shower.png"
                          alt=""
                        />
                        <img
                          v-if="climate == '阴'"
                          src="@/static/icon/white/Overcast.png"
                          alt=""
                        />
                        <img
                          v-if="climate == '大部多云'"
                          src="@/static/icon/white/MostlyCloudynight.png"
                          alt=""
                        />
                        <!-- <img
                            v-if="climate == '大部多云'"
                            src="@/static/icon/white/MostlyCloudyhot.png"
                            alt=""
                          /> -->
                        <img
                          v-if="climate == '晴间多云'"
                          src="@/static/icon/white/MostlyCloudyhot.png"
                          alt=""
                        />
                        <img
                          v-if="climate == '多云'"
                          src="@/static/icon/white/Cloudy.png"
                          alt=""
                        />
                        <img
                          v-if="climate == '晴'"
                          src="@/static/icon/white/Fair.png"
                          alt=""
                        />
                      </div>
                      <div class="box2">{{ city_name }}</div>
                      <!-- <br> -->

                      <!-- <h3>dsfc</h3> -->

                      <div class="box3">
                        <!-- <br> -->
                        更新于{{ updatatime }}
                        <!-- <br /> -->
                        <!-- 上次登录时间:{{ lasttime }} -->
                      </div>
                      <div class="box4">
                        <h2>明天天气{{ forecastrain }}</h2>
                      </div>
                      <!-- <h1>sacfa</h1> -->
                    </div>
                  </el-card>
                </el-col>
                <!-- <el-col :span="5"> -->
                <!-- <el-card> -->
                  <div class="titlelogo">
                  气象预报可靠性大数据分析系统
                  </div>
                  <!-- </el-card> -->
                <!-- </el-col> -->
                <!-- <el-col :span="12">
                    <el-card shadow="hover" style="height: 210px; float: right"> -->
                <div class="left-box">
                  <div class="userloaction">
                    <el-avatar
                      shape="circle"
                      :size="80"
                      fit="fill"
                      :src="url"
                      class="useimg"
                      @mouseenter="enter(index)"
                    ></el-avatar>
                  </div>
                  <transition
                    appear
                    enter-active-class="animated animate__fadeIn"
                    leave-active-class="animated animate__fadeOut"
                  >
                    <div
                      class="userbox"
                      @mouseenter="enter(index)"
                      @mouseleave="leave()"
                      v-if="viseable"
                    >
                      <div class="userbigbox">
                        <div class="userbox1" id="userbox1">
                          <h2>{{ username }}</h2>
                        </div>
                        <div class="userbox1" id="userbox2" @click="modifyuser">
                          <img src="@/static/icon/设置.svg" alt="" />
                          <h3>功能</h3>
                        </div>
                        <div class="userbox1" id="userbox3" @click="delToken">
                          <img src="@/static/icon/退出-灰.svg" alt="" />
                          <h3>退出</h3>
                        </div>
                      </div>
                    </div>
                  </transition>
                </div>
                <!-- </el-card>
                  </el-col> -->
              </el-row>
              <!-- </el-main> -->
            </div>

            <el-footer>
              <div class="footer-box">
                <button class="btn1" id="btn1">
                  平均温度
                  <br />
                  <!-- <img src="@/static/icon/温度.svg" alt="" /> -->
                  {{ temperature }}°C
                </button>
                <button class="btn1" id="btn2">
                  今日湿度
                  <br />
                  {{ dampness }}%
                </button>
                <button class="btn1" id="btn3">
                  今日天气
                  <br />
                  {{ climate }}
                </button>

                <button class="btn1" id="btn5">
                  今日风力
                  <br />
                  {{ windpower }}km/h
                </button>
                <button class="btn1" id="btn4" @click="buttopen4()">
                  更多数据
                </button>
              </div>
              <div class="LjDialog">
                <el-dialog
                  class="new-dialog"
                  :destroy-on-close="true"
                  v-model="isShow"
                >
                  <editview
                    :eventname="city_name"
                    :wocastdata="wocastdata"
                  ></editview>
                </el-dialog>
                <el-dialog
                  class="new-dialog"
                  :destroy-on-close="true"
                  v-model="isShow1"
                  @close="close"
                >
                  <modifyuserbox></modifyuserbox>
                  <!-- :eventname="eventname"
                    :wocastdata="wocastdata" -->
                </el-dialog>
              </div>
            </el-footer>
          </el-container>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { Setting, Exit } from "@element-plus/icons-vue";
import { onMounted, reactive, toRefs, ref, defineAsyncComponent } from "vue";
import { useRouter } from "vue-router";
import {
  getuserdata,
  getzonedata,
  knngetdata,
  normaltdata,
} from "@/request/api";
import { ElMessage } from "element-plus";
import Cookies from "js-cookie";

export default {
  components: {
    editview: defineAsyncComponent(() =>
      import("@/components/echartsview/index.vue")
    ),
    snowview: defineAsyncComponent(() => import("./下雪/snow.vue")),
    rainview: defineAsyncComponent(() => import("./01/rain.vue")),
    modifyuserbox: defineAsyncComponent(() =>
      import("@/components/modifybox/index.vue")
    ),
  },
  setup() {
    const data = reactive({
      url: require("@/assets/logo.png"),
      username: "admin",
      dignity: "管理员",
      city_name: "",
      temperature: 29,
      climate: "霾",
      updatatime: "2022-6-11",
      lasttime: "2022年8月11日",
      isShow: false,
      isShow1: false,
      dampness: 30,
      wocast: "guide",
      wocastdata: [],
      windd: "东北风",
      windpower: 2,
      eventname: "",
      viseable: false,
      urlpath: {
        urldata1: require("@/static/img/404.jpg"),
        urldata2: require("@/static/img/hot.jpg"),
        urldata3: require("@/static/img/冷.jpg"),
        urldata4: require("@/static/img/龙卷风.jpeg"),
        urldata5: require("@/static/img/热带风暴.jpeg"),
        urldata6: require("@/static/img/风.jpeg"),
        urldata7: require("@/static/img/霾.jpg"),
        urldata8: require("@/static/img/雾.jpeg"),
        urldata9: require("@/static/img/sandstorm.jpg"),
        urldata10: require("@/static/img/扬沙.jpeg"),
        urldata11: require("@/static/img/雪.jpeg"),
        urldata12: require("@/static/img/雷阵雨.jpeg"),
        urldata13: require("@/static/img/中雨.jpg"),
        urldata14: require("@/static/img/小雨.jpg"),
        urldata15: require("@/static/img/阴.jpg"),
        urldata16: require("@/static/img/多云.jpeg"),
        urldata17: require("@/static/img/晴间多云.jpg"),
        urldata18: require("@/static/img/晴.jpg"),
        // 'urldata18':require('@/static/img/多云.jpeg'),
      },
      forecastday: 0,
      forecastrain: "下雨",
    });
    const router = useRouter();
    const buttopen4 = async () => {
      data.isShow = !data.isShow;
      var e = await normaltdata();
    };

    const modifyuser = () => {
      data.isShow1 = !data.isShow1;
      // data.eventname = "近一星期风力";
      // data.wocastdata = [2420, 3536, 1232, 4815, 2450];
    };
    // const weact = ref(true)
    onMounted(() => {
      console.log("sedkofenk");
      getzonedata()
        .then((res) => {
          console.log("欢迎进入");
        })
        .catch((err) => {
          // loading.close();
          ElMessage({
            message: "用户权限过期，请重新登录",
            type: "error",
          });
          router.push("/login");
          // data.dialogVisible = false;
          console.log(err);
        });
      getdatalist();
    });

    const getdatalist = async () => {
      var a = await getuserdata();
      var b = await getzonedata();
      var d = await knngetdata();

      console.log(d.data.result.Rain_Over);
      var g = d.data.result.Rain_Over;
      data.forecastrain = g == 1 ? "下雨" : "晴";
      data.city_name = b.data.result.city_name;
      var c = (b.data.result.high + b.data.result.low) / 2;
      // 温度
      data.temperature = c;
      // 更新时间
      data.updatatime = b.data.result.date;
      // 地区
      data.climate = b.data.result.text_day;
      // 风力
      data.windpower = b.data.result.wind_speed;
      // 用户名
      data.username = a.data.result.User_name;
      // 湿度
      data.dampness = b.data.result.humidity;
      var e = await normaltdata();
      // console.log("dssddf",e.data.result.data);
      var f = e.data.result.data.split(",");
      const arr1 = [];
      const arr2 = [];
      // const arr1 = {};
      for (let i = 0; i < f.length; i++) {
        const element = f[i];
        var a = element.split(":")[0];
        var b = parseInt(element.split(":")[1]);
        arr1.push(a);
        arr2.push(b);
      }
      let resultList2 = [];
      for (let i = 0; i < arr1.length; i++) {
        let obj = {};
        obj.name = arr1[i];
        obj.value = arr2[i];
        resultList2.push(obj);
      }
      resultList2.sort(function (a, b) {
        return b.value - a.value;
      });
      // console.log(resultList2);
      data.wocastdata = resultList2;
      // console.log(data.wocastdata);
    };

    const value = ref();
    const handleChange = (value) => {
      data.wocast = value + "";
    };

    const enter = () => {
      data.viseable = true;
      // console.log("asdd");
    };
    const leave = () => {
      data.viseable = false;
    };
    // const router = useRouter();
    const delToken = () => {
      Cookies.remove("token");
      localStorage.removeItem("token");
      router.push("/login");
    };
    const close = () => {
      // console.log("close");
      getdatalist();
    };
    const setBgColor = (bgColor) => {
      if (data.climate === "unkonow") {
        return {
          background: "url(" + data.urlpath["urldata1"] + ") no-repeat ",
          "background-size": "100% 100%",
          height: "100%",
        };
      } else if (data.climate === "热") {
        return {
          background: "url(" + data.urlpath["urldata2"] + ")  no-repeat ",
        };
      } else if (data.climate === "冷") {
        return {
          background: "url(" + data.urlpath["urldata3"] + ")  no-repeat ",
        };
      } else if (data.climate === "龙卷风" || data.climate === "飓风") {
        return {
          background: "url(" + data.urlpath["urldata4"] + ")  no-repeat ",
        };
      } else if (data.climate === "热带风暴") {
        return {
          background: "url(" + data.urlpath["urldata5"] + ")  no-repeat ",
        };
      } else if (data.climate === "大风" || data.climate === "风") {
        return {
          background: "url(" + data.urlpath["urldata6"] + ")  no-repeat ",
        };
      } else if (data.climate === "霾") {
        return {
          background: "url(" + data.urlpath["urldata7"] + ")  no-repeat ",
        };
      } else if (data.climate === "雾") {
        return {
          background: "url(" + data.urlpath["urldata8"] + ")  no-repeat ",
        };
      } else if (data.climate === "强沙尘暴" || data.climate === "沙尘暴") {
        return {
          background: "url(" + data.urlpath["urldata9"] + ")  no-repeat ",
        };
      } else if (data.climate === "扬沙" || data.climate === "浮尘") {
        return {
          background: "url(" + data.urlpath["urldata10"] + ")  no-repeat ",
        };
      } else if (
        data.climate === "暴雪" ||
        data.climate === "大雪" ||
        data.climate === "中雪" ||
        data.climate === "小雪" ||
        data.climate === "阵雪" ||
        data.climate === "雨夹雪" ||
        data.climate === "雪"
      ) {
        return {
          background: "url(" + data.urlpath["urldata11"] + ")  no-repeat ",
        };
      } else if (
        data.climate === "冻雨" ||
        data.climate === "特大暴雨" ||
        data.climate === "大暴雨" ||
        data.climate === "暴雨" ||
        data.climate === "大雨" ||
        data.climate === "雷阵雨伴有冰雹" ||
        data.climate === "雷阵雨" ||
        data.climate === "阵雨"
      ) {
        return {
          background: "url(" + data.urlpath["urldata12"] + ")  no-repeat ",
        };
      } else if (data.climate === "中雨") {
        return {
          background: "url(" + data.urlpath["urldata13"] + ")  no-repeat ",
        };
      } else if (data.climate === "小雨") {
        return {
          background: "url(" + data.urlpath["urldata14"] + ")  no-repeat ",
        };
      } else if (data.climate === "阴") {
        return {
          background: "url(" + data.urlpath["urldata15"] + ")  no-repeat ",
        };
      } else if (data.climate === "大部多云") {
        return {
          background: "url(" + data.urlpath["urldata16"] + ")  no-repeat ",
        };
      } else if (data.climate === "晴间多云" || data.climate === "多云") {
        return {
          background: "url(" + data.urlpath["urldata17"] + ")  no-repeat ",
        };
      } else {
        return {
          background: "url(" + data.urlpath["urldata18"] + ")  no-repeat ",
        };
      }
    };

    return {
      router,
      ...toRefs(data),
      getdatalist,
      Setting,
      Exit,
      value,
      handleChange,

      buttopen4,

      enter,
      leave,
      delToken,
      modifyuser,
      close,
      setBgColor,
      router,
    };
  },
};
</script>

<style lang="scss" scoped>
#backghome {
  // background-repeat: no-repeat;
  background-repeat: no-repeat;
  background-size: 100% 100% !important;
  background-attachment: fixed;

  height: 100%;
  position: fixed;
  width: 100%;
  background-image: linear-gradient(25deg, #e57382, #c699a4, #96b9c8, #00d6ed);
}

.continer {
  float: left;
  width: 100%;
  z-index: 999;
}
// .el-main {
//  width: 100%;
//  height: 100%;
// }
.el-footer {
  // background-color: aquamarine;
  height: 130px;
  width: 600px;
  position: fixed;
  bottom: 0px;
  left: 30%;
  text-align: center;
  border-radius: 10px;
  // border: solid 1px rgb(253, 253, 253);
}
.footer-box {
  display: flex;
}
.top-box {
  width: 100%;
  position: fixed;

  left: 0px;

  top: 0px;
}
.btn1 {
  margin-top: 20px;
  margin-left: 10px;
  width: 120px;
  height: 100px;
  text-decoration: none;
  font-size: 20px;
  overflow: hidden;
  border-radius: 20px;
  font-family: "楷体";
  font-weight: 900;
  cursor: pointer;
  background-image: linear-gradient(120deg, #3f3c3f 0%, #ffffff 100%);
  color: rgb(0, 0, 0);
  border: none;
}
.titlelogo{
  position: absolute;
  left: 30%;
  top: 30%;
  font-size: 40px;
  font-family: '楷体';
  color: #ffffff;
  font-weight: 900;
}
// #btn1 {
//   flex: 1 1 auto;
// }
// #btn2 {
//   flex: 1 1 auto;
// }
// #btn3 {
//   flex: 1 1 auto;
// }
// #btn4 {
//   flex: 1 1 auto;
// }
// #btn5 {
//   flex: 1 1 auto;
// }
.user {
  display: flex;
  flex-direction: row;
  // gap: 18px;
}
.demo-fit {
  position: relative;
  left: 60%;
}
.buttonbox {
  margin-left: 40px;
}
.userinfo {
  padding-top: 10px;
  padding-bottom: 10px;
  // background-color: red;
  width: 140px;
  line-height: 2.5;
  font-weight: 900;
  border: solid rgb(255, 255, 255) 1px;
  border-top: none;
  border-left: none;
  border-right: none;
  position: absolute;
  bottom: 55%;
}

.el-card {
  width: 300px;
  background-color: rgba(104, 115, 124, 0);
  border: none;
}
.userbox {
  width: 500px;
  height: 100%;
  z-index: 1;
}
.userloaction {
  position: relative;
  float: right;
  margin-top: 10px;
}
.useimg {
  position: relative;
  cursor: pointer;
  z-index: 99;
  margin-top: 20px;
  margin-right: 30px;
}

.w1 {
  width: 350px;
  background-image: linear-gradient(120deg, #3f3c3f 0%, #ffffff 100%);
  border: none;
  font-family: "楷体";
  margin-top: 20px;
  margin-left: 20px;
}
.bigbox {
  width: 250px;
  height: 200px;
}
.box1 {
  position: absolute;
  width: 120px;
  height: 90px;
  display: inline-block;
  // background-color: aqua;
  line-height: 40px;
  font-family: "楷体";
  font-weight: 900;
  font-size: 30px;
  color: rgba(255, 227, 127);
  left: 30px;
}
.box1 > img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  position: relative;
  top: -5px;
  left: 40px;
  // background-color: #00d6ed;
}
.box1 > h3 {
  float: right;
  position: relative;
  position: relative;
  bottom: 30px;
  // margin-bottom: 20px;
}
.box2 {
  position: absolute;
  width: 120px;
  height: 90px;
  display: inline-block;
  bottom: 130px;
  left: 230px;
  line-height: 70px;
  font-family: "楷体";
  font-weight: 900;
  font-size: 50px;
  color: rgba(0, 0, 0, 0.977);
}
.box3 {
  position: absolute;
  width: 240px;
  height: 100px;
  // background-color: red;
  top: 150px;
  font-family: "楷体";
  font-weight: 900;
  font-size: 17px;
  line-height: 40px;
}
.name {
  font-size: 30px;
}
.example-block {
  position: relative;
  left: 60%;
  top: 30%;
}
.select-button {
  width: 230px;
  height: 90px;
  // background-color: red;
  position: absolute;
  top: 110px;
}

h3 {
  margin-top: 5px;
  margin-left: -20px;
  float: right;
}

.userbox1 {
  cursor: pointer;
  position: relative;
  height: 32%;
  width: 100%;
  background-image: linear-gradient(135deg, #f5f7fa 0%, #3e5477 100%);
  opacity: 1;
  font-family: "楷体";
}

#userbox1 > h2 {
  font-family: "Courier New", Courier, monospace;
  margin-left: 20px;
  // background-color: red;
  width: 170px;
  white-space: nowrap;

  overflow: hidden;

  text-overflow: ellipsis;
}
.userbox1:hover {
  opacity: 0.4;
  transition: 0.8s;
}
#userbox2 > h3 {
  font-size: 35px;
  margin-top: 13px;
  margin-right: 30px;
}
#userbox3 > h3 {
  font-size: 35px;
  margin-top: 15px;

  margin-right: 150px;
}
#userbox2 > img {
  width: 50px;
  height: 50px;
  margin-left: 20px;
  margin-top: 10px;

  // float: left;
}
#userbox3 > img {
  width: 50px;
  height: 50px;
  margin-left: 20px;
  margin-top: 10px;

  // float: left;
}
.userbigbox {
  width: 300px;
  height: 200px;
}
#userbox1 > h2 {
  position: relative;
  top: 10px;
  font-size: 40px;

  font-family: "楷体";
}
.box4 {
  position: relative;
  left: 70%;
  top: 50%;
  font-family: "楷体";
  font-weight: 900;
}
.left-box {
  width: 300px;
  height: 250px;
  position: relative;
  left: 29%;
  margin-top: 20px;
}
</style>
<style lang="scss" scoped>
.LjDialog {
  ::v-deep .el-dialog {
    // background-color: #93b4c7ee;
    background-image: linear-gradient(
      107deg,
      #053c92,
      #5b69a7,
      #8f9bbc,
      #c0d0d0
    );
    // border: 1px solid rgb(13, 210, 236);

    .el-dialog__title {
      color: white;
      caret-color: transparent;
    }
    .el-icon-close {
      color: white;
      &:hover {
        color: rgb(9, 205, 219);
      }
    }
    .el-dialog__body {
      color: white;
      font-size: 18px;
    }
    .LjDialog-footer {
      text-align: right;
      margin: 30px 0 0 0;
    }
  }
}
</style>
