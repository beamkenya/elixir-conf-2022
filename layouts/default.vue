<template>
  <div class="bg-white dark:bg-dark min-h-screen">
    <div class="min-h-screen bg-no-repeat bg-right-top bg-background">
      <top-nav />
      <slot />
      <footer-nav />
    </div>
  </div>
</template>
<script setup>
import TopNav from './components/TopNav'
import FooterNav from './components/FooterNav'
</script>
<style>
.bg-background {
  background: url(http://demo.themewinter.com/wp/exhibz/wp-content/uploads/2019/06/banner_img.png);
  background-size: 50vw auto;
}
@media screen and (max-width: 600px) {
  .bg-background {
    background-size: 60vw auto;
  }
}
</style>
