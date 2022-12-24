<template>
  <div class="mask" @click="$emit('someEvent')"></div>
  <div class="speakModal">
    <h3>请发表你的贴子</h3>
    <div style="margin-bottom: 10px">标题</div>
    <input type="text" v-model="totalMsg.title" class="basicInput" />
    <div style="margin: 10px 0">作者</div>
    <input type="text" v-model="totalMsg.author" class="basicInput" />
    <div style="margin: 10px 0">内容</div>
    <textarea
      v-model="totalMsg.content"
      style="width: 76.5vw; height: 100px; outline: none"
    ></textarea>
    <div class="btn btnLeft" @click="theSubmit">提交</div>
    <div class="btn btnRight" @click="$emit('someEvent')">返回</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const emits = defineEmits(["someEvent", "submit"]);

const totalMsg = ref({
  title: "",
  author: "",
  content: "",
  time: "",
});

const theSubmit = () => {
  const temp = new Date();
  let res = "";
  res;
  const date = temp.getDate();
  const month = temp.getMonth() + 1;
  const hour = temp.getHours();
  const minute = temp.getMinutes();
  totalMsg.value.time =
    month + "月" + date + "日" + hour + "点" + minute + "分";
  emits("submit", totalMsg.value);
  emits("someEvent");
};
</script>

<style lang="scss" scoped>
.speakModal {
  top: 10vh;
  left: 7vw;
  position: fixed;
  z-index: 13;
  background-color: white;
  border: solid 1px black;
  width: 79vw;
  height: 70vh;
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
