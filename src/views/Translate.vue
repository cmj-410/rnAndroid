<template>
  <div class="chatWrapper bg">
    <div class="back" @click="goBack">返回</div>
    <div class="content">
      <div class="bigFont">{{ fromText }}</div>
      <div style="font-weight: 600" @click="changeLan">翻译为</div>
      <div class="bigFont">{{ toText }}</div>
    </div>
    <div class="card a">
      <textarea
        v-model="queryTotal.content"
        style="width: 92vw; height: 95%; outline: none"
        @keyup.enter="startTrans"
      ></textarea>
    </div>
    <div class="clickTrans" style="font-weight: 600" @click="startTrans">
      开始翻译
    </div>
    <div class="card b">{{ translateRes }}</div>
    <div class="bottom" style="font-weight: 600" @click="clearAll">
      全部清空
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import router from "../routers/index.js";
import apiTrans from "../components/utils/trans";

const goBack = () => {
  router.push("/home");
};

const fromText = computed(() =>
  queryTotal.value.from == "en" ? "英语" : "中文"
);
const toText = computed(() => (queryTotal.value.to == "en" ? "英语" : "中文"));

const changeLan = () => {
  if (queryTotal.value.from == "en") {
    queryTotal.value.from = "zh";
    queryTotal.value.to = "en";
  } else {
    queryTotal.value.from = "en";
    queryTotal.value.to = "zh";
  }
};
const translateRes = ref("");

const queryTotal = ref({
  from: "en",
  to: "zh",
  content: "",
});
const startTrans = async () => {
  const res = await apiTrans(queryTotal.value);
  translateRes.value = res.data.trans_result[0].dst;
};

const clearAll = () => {
  queryTotal.value.content = "";
  translateRes.value = "";
};
</script>

<style lang="scss" scoped>
.chatWrapper {
  position: fixed;
  z-index: 12;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.bg {
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
}
.back {
  font-weight: 600;
  font-size: 18px;
  position: absolute;
  top: 3vh;
  left: 3vw;
  border: solid 1px;
  background-color: #337ecc;
  padding: 2vw;
  border-radius: 6%;
}
.content {
  position: fixed;
  top: 10vh;
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 3vw;
  box-sizing: border-box;
}
.bigFont {
  font-size: 20px;
}
.card {
  width: 100vw;
  background-color: white;
  position: fixed;
  height: 35vh;
  padding: 0 3vw;
  box-sizing: border-box;
  overflow: scroll;
}

.a {
  top: 18vh;
}
.b {
  bottom: 6vh;
}
.clickTrans {
  position: fixed;
  top: 54.5vh;
  width: 100%;
  text-align: center;
}
.bottom {
  position: fixed;
  bottom: 1vh;
  width: 100%;
  text-align: center;
}
</style>
