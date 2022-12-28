<template>
  <div class="speakHomeWrapper">
    <SpeakCard
      v-for="item in theList"
      :key="item.title"
      :title="item.title"
      :author="item.author"
      :time="
        item.lastUpdateTime.split('T')[0] +
        item.lastUpdateTime.split('T')[1].split('.')[0]
      "
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
import { onMounted, ref } from "vue";
import SpeakCard from "../components/speakCard.vue";
import SpeakModal from "../components/speakModal.vue";
import { useRoute } from "vue-router";
import axios from "axios";

const theList = ref([]);
const routes = useRoute();
onMounted(() => {
  setInterval(getList, 3000);
});

const getList = async () => {
  if (routes.fullPath == "/speakHome") {
    const res = await axios.get("/my/speaks-list");
    theList.value = res.data.data.list;
  }
};
getList();

const isShow = ref(false);

const newSpeak = () => {
  isShow.value = true;
};

const dealSubmit = async (data) => {
  await axios.post("/my/speaks-add", data);
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
