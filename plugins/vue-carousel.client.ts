import {Carousel, Slide} from 'vue3-carousel'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component(Carousel)
  nuxtApp.vueApp.component(Slide)
})
