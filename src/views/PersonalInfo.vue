<template>
  <div class="personalInfo">
    <div class="basicInfo">
      <div class="avater"></div>
      <div class="name">{{ name }}</div>
      <div class="id">ID:1271267</div>
      <div class="qianming">{{ qianming }}</div>
    </div>
    <div class="edit">
      <div
        class="mima"
        @click="
          () => {
            cur = 'name';
            isShow = true;
          }
        "
      >
        修改用户名称
      </div>
      <div
        class="mima"
        @click="
          () => {
            cur = 'qianming';
            isShow = true;
          }
        "
      >
        修改个性签名
      </div>
      <div class="mima" style="color: red">退出登录</div>
    </div>
  </div>
  <PersonalModal
    v-if="isShow"
    @someEvent="isShow = false"
    @submit="dealSubmit"
    :type="cur"
  />
</template>

<script setup>
import { ref } from "vue";
import PersonalModal from "../components/PersonalModal.vue";

const cur = ref("name");
const name = ref("朝花夕拾");
const qianming = ref("面对疾风吧！");
const dealSubmit = (data) => {
  if (data.type == "name") {
    name.value = data.data;
  } else {
    if (data.type == "qianming") {
      qianming.value = data.data;
    }
  }
};
const isShow = ref(false);
</script>

<style lang="scss" scoped>
.personalInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #b3e19d;
  height: 100%;
  box-sizing: border-box;
  .basicInfo {
    position: relative;
    top: 20vh;
  }
  .avater {
    height: 160px;
    width: 160px;
    border-radius: 50%;
    background-color: aquamarine;
  }
  .name,
  .id {
    font-size: 20px;
    text-align: center;
  }
  .id {
    color: green;
  }
  .qianming {
    font-weight: 600;
    text-align: center;
    margin-top: 5px;
  }
  .edit {
    width: 100%;
    background-color: #95d475;
    position: absolute;
    bottom: 26vh;
    .mima {
      font-weight: 600;
      padding: 8px;
      border-bottom: 1px solid gray;
    }
  }
}
</style>
