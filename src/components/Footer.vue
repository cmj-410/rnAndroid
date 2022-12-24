<template>
  <div class="footer">
    <div
      class="block colora"
      @click="goto('/home')"
      :class="{ activated: active == '/home' }"
    >
      功能区
    </div>
    <div
      class="block colorb"
      @click="goto('/speakHome')"
      :class="{ activated: active == '/speakHome' }"
    >
      讨论区
    </div>
    <div
      class="block colorc"
      @click="goto('/personal')"
      :class="{ activated: active == '/personal' }"
    >
      个人中心
    </div>
  </div>
</template>

<script setup>
import router from "../routers";
import { useRoute } from "vue-router";
import { watch, ref } from "vue";
const goto = (place) => {
  router.push(place);
};
const route = useRoute();
const active = ref("/home");
watch(route, () => {
  active.value = route.path;
});
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  display: flex;
  background: lightgray;
  text-align: center;
  border-top: 1px solid gray;
  .block {
    flex: 1;
    line-height: 7vh;
    :active {
      color: red;
    }
  }
}
.colora {
  background-color: #409eff;
}
.colorb {
  background-color: #909399;
}
.colorc {
  background-color: #67c23a;
}
.activated {
  color: white;
  font-weight: 700;
}
</style>
