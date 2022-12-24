<template>
  <div class="homeWrapper">
    <div class="cardWrapper">
      <div class="card" @click="myfunc">图像识别</div>
      <div class="card" @click="toChat">智能机器人</div>
      <div class="card">卡片a</div>
      <div class="card">卡片a</div>
    </div>
  </div>
  <recognize v-if="isshow" @someEvent="isshow = false" />
</template>

<script setup>
import { ref } from "vue";
import router from "../routers/index.js";
import recognize from "../components/recognize.vue";

const isshow = ref(false);
const myfunc = function (e) {
  isshow.value = true;
};
const toChat = () => {
  router.push("/chat");
};
</script>

<style lang="scss" scoped>
.homeWrapper {
  height: 100%;
  background-color: #a0cfff;
  padding: 5vw;
  box-sizing: border-box;
  .cardWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
  .card {
    width: 40vw;
    height: 30vh;
    background-color: white;
    line-height: 30vh;
    text-align: center;
    font-size: 20px;
    margin-bottom: 3vw;
    box-shadow: gray 2px 3px 3px;
  }
}
</style>
