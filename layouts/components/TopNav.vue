<template>
  <nav :class="['w-full py-3 md:py-3 fixed w-full z-10 top-0', changeColor ? 'bg-transparent' : 'bg-white dark:bg-dark border-b border-b-gray dark:border-0']">
    <div class="d-container flex items-center justify-between flex-wrap">
      <div class="flex items-center flex-shrink-0 text-white dark:text-secondary-dark-text mr-6">
        <router-link to="/">
          <img class="w-60 -ml-4 px-2 md:px-0" :src="defaultLayout || !changeColor ? '/images/logo-purple.png' : '/images/logo-white.png'" alt="logo">
        </router-link>
      </div>

      <div class="block lg:hidden">
        <button
            id="nav-toggle"
            :class="['flex items-center px-3 py-2 border rounded hover:text-primary hover:border-primary dark:hover:text-primary-dark dark:hover:border-primary-dark', defaultLayout ? 'text-primary dark:text-primary-dark border-primary dark:border-primary-dark' : 'text-white dark:text-secondary-dark-text border-white']"
            @click="toggleNav()"
        >
          <svg :class="[defaultLayout ? 'fill-current' : 'fill-white', 'h-3 w-3']" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <toggle-theme :default-layout="defaultLayout || !changeColor" />

      <div
          id="nav-content"
          :class="['w-full flex-grow lg:flex w-full lg:items-center lg:w-auto lg:block pt-2 lg:pt-0', navVisible ? 'dark:bg-secondary-dark pb-2' : 'hidden']"
      >
        <div class="w-full ld:w-8/12">
          <ul :class="['list-reset flex-1 lg:flex justify-start lg:justify-center items-center', defaultLayout || !changeColor ? 'text-primary dark:text-primary-dark' : 'text-white dark:text-secondary-dark-text']">
            <li class="mr-3 black">
              <router-link class="inline-block py-2 px-4 text-px-13 no-underline black nav-link" to="/">
                <i class="fa fa-home" /> Home
              </router-link>
            </li>
            <li class="mr-3">
              <router-link class="py-2 px-4 inline-block no-underline text-px-13 nav-link " to="/sessions">
                <i class="fa fa-list" /> Sessions
              </router-link>
            </li>
            <li class="mr-3">
              <router-link class="py-2 px-4 inline-block no-underline text-px-13 nav-link " to="/about">
                <i class="fa fa-info-circle" /> About
              </router-link>
            </li>
            <li class="mr-3">
              <router-link class="inline-block no-underline  py-2 px-4 text-px-13 nav-link" to="/sponsors">
                <i class="fa fa-credit-card" /> Sponsors
              </router-link>
            </li>
          </ul>
        </div>

        <div :class="['w-full lg:w-4/12 flex-grow flex justify-start lg:justify-end', navVisible ? 'px-2' : '']">
          <a :class="defaultLayout || !changeColor ? 'btn-primary' : 'btn-secondary'" href="https://www.eventbrite.com/e/elixirconf-africa-2022-tickets-334392054637" target="_blank" rel="noreferrer noopener" disabled>Get Ticket</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { useState } from '#app'
import ToggleTheme from '~/layouts/components/ToggleTheme.vue'

export default {
  name: 'TopNav',
  components: { ToggleTheme },
  props: {
    defaultLayout: {
      default: true,
      type: Boolean,
    },
  },
  setup () {
    const navVisible = useState('navVisible', () => false)
    const toggleNav = () => {
      navVisible.value ? navVisible.value = false : navVisible.value = true
    }

    const changeColor = ref(false)
    const scrollPosition = ref(null)

    const updateScroll = () => {
      scrollPosition.value = window.scrollY
      changeColor.value = scrollPosition.value <= 100
    }

    onMounted(() => {
      window.addEventListener('scroll', updateScroll)
    })

    return { toggleNav, navVisible, changeColor }
  },
  watch: {
    $route () {
      if (this.navVisible) {
        this.toggleNav()
      }
    },
  },
}
</script>

<style scoped>
#nav-content {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
