<template>
  <div class="speakHomeWrapper">
    <SpeakCard
      v-for="item in theList"
      :key="item.title"
      :title="item.title"
      :author="item.author"
      :time="item.time"
      :content="item.content"
    />
    <div class="yuan" @click="newSpeak">+</div>
    <SpeakModal
      v-if="isShow"
      @someEvent="isShow = false"
      @submit="dealSubmit"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import SpeakCard from "../components/speakCard.vue";
import SpeakModal from "../components/speakModal.vue";

const theList = ref([
  {
    title: "一个标题",
    author: "佚名",
    time: "12月21日18点34分",
    content: "一些作为文章主体的内容",
  },
  {
    title: "西游记好好看",
    author: "大唐皇帝",
    time: "12月20日16点22分",
    content: "哪里可以要到女儿国王的联系方式？",
  },
  {
    title: "疫情啥时候结束呀",
    author: "佚名",
    time: "12月19日11点31分",
    content: "放开了的状况下，疫情啥时候才能结束呢？",
  },
]);

const isShow = ref(false);

const newSpeak = () => {
  isShow.value = true;
};

const dealSubmit = (data) => {
  theList.value.push(data);
};
</script>

<style lang="scss" scoped>
.speakHomeWrapper {
  padding: 10px;
  overflow: scroll;
  height: 100vh;
  box-sizing: border-box;
  background-color: #c8c9cc;
}
.yuan {
  position: fixed;
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
  background-color: #73767a;
  font-size: xx-large;
  font-weight: 900;
  text-align: center;
  line-height: 10vw;
  bottom: 12vh;
  right: 5vw;
  box-shadow: gray 2px 3px 3px;
}
</style>
