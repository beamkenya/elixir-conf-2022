<template>
  <nav class="d-container py-2 md:py-4 flex items-center justify-between flex-wrap nav-bg py-5 w-full z-10 top-0">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <router-link to="/">
        <img class="w-60 -ml-4 px-2 md:px-0" :src="defaultLayout ? '/images/logo-purple.png' : '/images/logo-white.png'" alt="logo">
      </router-link>
    </div>

    <div class="block lg:hidden">
      <button
        id="nav-toggle"
        :class="['flex items-center px-3 py-2 border rounded hover:text-primary hover:border-primary dark:hover:text-primary-dark dark:hover:border-primary-dark', defaultLayout ? 'text-primary dark:text-primary-dark border-primary dark:border-primary-dark' : 'text-white border-white']"
        @click="toggleNav()"
      >
        <svg :class="[defaultLayout ? 'fill-current' : 'fill-white', 'h-3 w-3']" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <toggle-theme :default-layout="defaultLayout" />

    <div
      id="nav-content"
      :class="['w-full flex-grow lg:flex w-full lg:items-center lg:w-auto lg:block pt-2 lg:pt-0', navVisible ? '' : 'hidden']"
    >
      <div class="w-full ld:w-8/12">
        <ul :class="['list-reset flex-1 lg:flex justify-start lg:justify-center items-center', defaultLayout ? 'text-primary dark:text-primary-dark' : 'text-white']">
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

      <div class="w-full lg:w-4/12 flex-grow flex justify-start lg:justify-end">
        <a :class="defaultLayout ? 'btn-primary' : 'btn-secondary'" href="#" target="_blank" rel="noreferrer noopener" disabled>Buy Ticket</a>
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

    return { toggleNav, navVisible }
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
