<template>
  <router-view v-slot="{ Component }">
    <transition name="router_animate">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import { provide, onMounted,ref,toRaw } from "vue";
import * as echarts from "echarts";
import { zonedata } from "@/request/api";
export default {
  name: "App",
  setup() {
    const links = ref([]);
    onMounted(() => {        
      getzonedata();
    });
    const getzonedata = async () => {
      var zonegetdata = await zonedata();
      var ZoneData1 = zonegetdata.data.result;
      var b = toRaw(ZoneData1.data);
      var cityname = b.map((v) => v.city_name);
      var cityid = b.map((v) => v.city_id);
      let resultList = [];
      for (let i = 0; i < cityname.length; i++) {
        let obj = {};
        obj.value = cityname[i];
        obj.link = cityid[i];
        resultList.push(obj);
      }
      links.value = resultList;
    };
    // provide("名字随便起","传递的内容")
    provide("echarts", echarts);
    provide("linkdata", links);
    return {
      links,
      getzonedata,
    };
  },
};
</script>

<style >
* {
  margin: 0;
  padding: 0;
}
.router_animate-enter-active {
  animation: fadeIn 1s;
}
.router_animate-leave-active {
  animation: fadeOutDown 0.6s;
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
