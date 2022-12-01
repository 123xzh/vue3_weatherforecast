<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="aside" width="200px">
        <el-menu
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item @click="conname='Eupw'" index="1">
            <el-icon><document /></el-icon>
            <template #title>修改密码</template>
          </el-menu-item>
          <el-menu-item @click="conname='Edun'" index="2">
            <el-icon><setting /></el-icon>
            <template #title>修改用户名</template>
          </el-menu-item>
          <!-- <router-link to=""> -->
          <el-menu-item @click="conname='Eduz'" index="3">
            <el-icon><setting /></el-icon>
            <template #title>修改地区(输入框)</template>
          </el-menu-item>
          <el-menu-item @click="conname='Edzl'" index="4">
            <el-icon><setting /></el-icon>
            <template #title>地区列表</template>
          </el-menu-item>
          <!-- </router-link> -->
        </el-menu>
      </el-aside>
      <el-main class="main">
            <!-- <transition name="router_animate"> -->
            <component :is="conname" />
          <!-- </transition> -->

        </el-main>
    </el-container>
  </div>
</template>

<script  >
import { ref, defineComponent,defineAsyncComponent, reactive, toRefs } from "vue";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
export default defineComponent({
      components: {
    Eupw: defineAsyncComponent(() => import("@/components/modify/Eupw.vue")),
    Edun: defineAsyncComponent(() => import("@/components/modify/Edun.vue")),
    Eduz: defineAsyncComponent(() => import("@/components/modify/Eduz.vue")),
    Edzl: defineAsyncComponent(() => import("@/components/modify/Edzl.vue")),
  },
  setup() {
const data = reactive({
  conname:'a'
})
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };
    return {
      ...toRefs(data),
      // isCollapse,
      handleOpen,
      handleClose,
    };
  },
});
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 168px;
  
  /* min-height: 200px; */
}

.el-menu-item{
    background-color: #091f2cee;
    color: aqua;
	  /* background: #6895b3!important; */

}
/* 改变elementui 侧边栏移入颜色 */
	.el-menu-item:hover{
	  background: #1c88cf!important;
	  color: #fff!important;
	}
	.el-submenu__title:hover {
	  background: #1c88cf!important;
	  color: #fff!important;
	}
	.el-menu-item.is-active {
	  background: #1c88cf!important;
	  color: #fff!important;
	}
	.el-submenu__title.is-active {
	  background: #1c88cf!important;
	  color: #fff!important;
	}
  body{
    background-color: #1c88cf;
  }

.aside {
  height: 400px;
  
  /* background-color: aquamarine; */
}

.main {
  /* background-color: aquamarine; */
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
