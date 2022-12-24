<template>
  <div class="mask" @click="$emit('someEvent')"></div>
  <div class="personalModal">
    <h3>请修改你的{{ props.type == "name" ? "名称" : "签名" }}</h3>
    <input type="text" v-model="totalMsg" class="basicInput" />

    <div class="btn btnLeft" @click="theSubmit">提交</div>
    <div class="btn btnRight" @click="$emit('someEvent')">返回</div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
const emits = defineEmits(["someEvent", "submit"]);
const props = defineProps(["type"]);

const totalMsg = ref("");
const theSubmit = () => {
  emits("submit", { data: totalMsg.value, type: props.type });
  emits("someEvent");
};
</script>

<style lang="scss" scoped>
.personalModal {
  top: 20vh;
  left: 7vw;
  position: fixed;
  z-index: 13;
  background-color: white;
  border: solid 1px black;
  width: 79vw;
  height: 40vh;
  padding: 3vw;
}
.mask {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  opacity: 0.3;
}

.basicInput {
  height: 20px;
  width: 76vw;
  outline: none;
}

.btn {
  position: absolute;
  bottom: 5vh;
  border: solid 1px;
  background-color: #c8c9cc;
  font-size: 18px;
  padding: 2vw;
  border-radius: 8%;
  text-align: center;
}
.btnLeft {
  left: 5vw;
}
.btnRight {
  right: 5vw;
}
</style>
