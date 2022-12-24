<template>
  <div class="recognizeWrapper" @click="$emit('someEvent')"></div>
  <div class="content">
    <div class="dotbox">点击上传图片</div>
    <div style="margin-top: 2vh; color: red">
      {{ fileName ? "已上传：" + fileName : "" }}
    </div>
    <div>{{ res }}</div>
    <form ref="formRef">
      <button type="submit" class="btn btnLeft">开始识别</button>
      <input
        type="file"
        name="image"
        accept="image/*"
        class="upfile"
        @change="dealFile"
      />
    </form>
    <div class="btn btnRight" @click="againFunc">再来一次</div>
    <div class="show" v-if="isShow" style="color: gray">
      {{ result }}
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const emits = defineEmits(["someEvent"]);

const fileName = ref("");
const res = ref("");
const dealFile = (e) => {
  fileName.value = e.target.files[0].name;
  console.log(e.target.files[0]);
};

const formRef = ref(null);
onMounted(() => {
  formRef.value.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(formRef.value);

    // console.log(formData, formRef.value);
    axios
      .post("/my/image-recognize", formData, { timeout: 10000 })
      .then((response) => {
        // handle success
        console.log(response.data);
      })
      .catch((error) => {
        // handle error
      });

    isShow.value = true;
  });
});

const isShow = ref(false);
const result = "12574756382";

const againFunc = () => {
  isShow.value = false;
  fileName.value = "";
};
</script>

<style lang="scss" scoped>
.recognizeWrapper {
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: black;
  opacity: 0.3;
}
.content {
  top: 10vh;
  left: 7vw;
  position: fixed;
  z-index: 11;
  background-color: white;
  border: solid 1px black;
  width: 79vw;
  height: 70vh;
  padding: 3vw;
  .dotbox {
    border: dashed 1px;
    padding: 5vw 2vw;
    font-size: 20px;
    text-align: center;
  }
  .btn {
    position: absolute;
    bottom: 5vh;
    border: solid 1px;
    background-color: #79bbff;
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
  .upfile {
    position: relative;
    width: 80vw;
    height: 9vh;
    top: -9vh;
    opacity: 0;
  }
}
</style>
