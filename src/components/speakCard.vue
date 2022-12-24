<template>
  <div class="speakCard">
    <div class="title">{{ props.title }}</div>
    <div class="info">
      <span>{{ props.author }}</span> | <span>{{ props.time }}</span>
    </div>
    <div class="content">{{ props.content }}</div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["title", "content", "author", "time"]);
</script>

<style lang="scss" scoped>
.speakCard {
  box-shadow: gray 2px 3px 3px;
  border: 1px solid;
  padding: 4vw;
  margin-bottom: 2vh;
  background-color: white;
  .title {
    font: 30px;
    line-height: 30px;
    font-weight: 600;
  }
  .info {
    line-height: 20px;
    color: gray;
  }
  .content {
    margin-top: 5px;
  }
}
</style>
