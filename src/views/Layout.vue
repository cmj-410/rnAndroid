<template>
  <div class="LayoutWrapper">
    <RouterView />
    <div class="footerWrapper">
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Footer from "../components/Footer.vue";
</script>

<style lang="scss" scoped>
.LayoutWrapper {
  height: 100vh;
  position: relative;
  .footerWrapper {
    width: 100%;
    position: fixed;
    bottom: 0;
  }
}
</style>
