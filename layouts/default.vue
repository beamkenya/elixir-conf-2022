<template>
  <div class="bg-white dark:bg-dark min-h-screen">
    <div :class="['min-h-screen bg-no-repeat w-full', bgClass]">
      <top-nav :default-layout="defaultLayout" />
      <slot />
      <footer-nav />
    </div>
  </div>
</template>
<script setup>
import TopNav from './components/TopNav'
import FooterNav from './components/FooterNav'

const bg = 'bg-right-top bg-background'
const bg1 = 'bg-background-1'

const bgClass = ref(bg)
const defaultLayout = ref(true)
const route = useRoute()

watchEffect(() => {
  bgClass.value = route.name === 'index' ? bg : bg1
  defaultLayout.value = route.name === 'index'
})

const nuxtApp = useNuxtApp()

nuxtApp.hook('page:finish', () => {
  window.scrollTo(0, 0)
})

</script>

<style>
.bg-background {
  background: url(http://demo.themewinter.com/wp/exhibz/wp-content/uploads/2019/06/banner_img.png);
  background-size: 50vw auto;
}

.bg-background-1 {
  background: url(https://demo.themewinter.com/wp/exhibz/wp-content/uploads/2018/12/about-banner.jpg) 0% 0%;
  background-size: 100% 350px;
}
@media screen and (max-width: 600px) {
  .bg-background {
    background-size: 60vw auto;
  }
  .bg-background-1 {
    background-size: 100% 220px;
  }
}
</style>
