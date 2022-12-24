<template>
  <div class="chatWrapper bg">
    <div class="back" @click="goBack">返回</div>
    <div class="chatborder">
      快来问我些问题吧？
      <div
        v-for="item in msgList"
        :key="item.value"
        :class="{ right: item.type == 1, tagclass: true }"
      >
        {{ item.value }}
      </div>
    </div>
    <div class="inputArea">
      <input
        type="text"
        v-model="inputmsg"
        @keyup.enter="sendmsg"
        style="outline: none"
      />
      <div @click="sendmsg" class="sendBTN">发送</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import router from "../routers/index.js";
import apiChat from "../components/utils/chatRes";

const goBack = () => {
  router.push("/home");
};

const inputmsg = ref("");
// 用户输入和返回信息的列表
const msgList = ref([]);
const sendmsg = async () => {
  msgList.value.push({
    type: 1,
    value: inputmsg.value,
  });
  const res = await apiChat(inputmsg.value);
  inputmsg.value = "";
  msgList.value.push({
    type: 0,
    value: res.data.choices[0].text,
  });
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
.chatborder {
  border: solid 1px;
  height: 80vh;
  margin: 10vh 3vw 0 3vw;
  overflow: scroll;
  line-height: 20px;
  padding: 1vw;
}
.inputArea {
  display: flex;
  justify-content: space-between;
  input {
    height: 5vh;
    margin-left: 3vw;
    width: 76%;
  }
  .sendBTN {
    margin-right: 3vw;
    margin-top: 2px;
    line-height: 36px;
    height: 36px;
    background-color: #529b2e;
    width: 12vw;
    text-align: center;
    border-radius: 6%;
  }
}
.right {
  text-align: right;
  font-weight: 600;
}
.tagclass {
  padding: 10px 0;
}
</style>
