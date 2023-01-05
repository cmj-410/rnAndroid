<template>
  <div class="recognizeWrapper" @click="$emit('someEvent')"></div>
  <div class="content">
    <div class="dotbox">点击上传图片</div>
    <div style="margin-top: 2vh; color: red">
      {{ updone && fileName ? "已上传：" + fileName : "" }}
    </div>
    <form ref="formRef" enctype="multipart/form-data">
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
    <img v-if="imgUrl" :src="imgUrl" class="imgC" />
    <div
      v-if="isShow"
      style="width: 100%; height: 1px; background: black; margin-bottom: 2vh"
    ></div>
    <div v-if="isShow" style="color: red; font-weight: 600">识别结果</div>
    <div class="show" v-if="isShow" style="color: gray">
      {{ recognizeRes == "" ? "等待识别结果..." : recognizeRes }}
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Tesseract from "tesseract.js";

const recognizeRes = ref("");

async function recognizeText(base64Image) {
  // 在图像上执行 OCR
  Tesseract.recognize(base64Image, "eng", {
    logger: (m) => {},
    // logger: (m) => console.log(m),
  }).then(({ data: { text } }) => {
    console.log(text);
    recognizeRes.value = text;
  });
}

const emits = defineEmits(["someEvent"]);

const imgUrl = ref("");

// 图片是否上传成功
const updone = ref(false);

const fileName = ref("");
const dealFile = (e) => {
  // 先清空之前的结果
  recognizeRes.value = "";
  // 关闭结果的显示
  isShow.value = false;
  // 图片上传状态初始化
  updone.value = false;

  fileName.value = e.target.files[0].name;

  const reader = new FileReader();
  // 读取完毕后获取结果
  reader.onload = (event) => {
    imgUrl.value = event.target.result;
    updone.value = true;
  };
  // 把文件对象作为一个 dataURL 读入
  reader.readAsDataURL(e.target.files[0]);
};

const formRef = ref(null);
onMounted(() => {
  formRef.value.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!imgUrl.value) {
      return;
    }
    await recognizeText(imgUrl.value);
    isShow.value = true;
  });
});

const isShow = ref(false);

const againFunc = () => {
  isShow.value = false;
  fileName.value = "";
  imgUrl.value = "";
  recognizeRes.value = "";
  updone.value = false;
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
  .imgC {
    display: block;
    width: 100%;
  }
  .show {
    margin-top: 2vh;
  }
}
</style>
