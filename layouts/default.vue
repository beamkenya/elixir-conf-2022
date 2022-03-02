<template>
  <div class="bg-white dark:bg-dark min-h-screen">
    <top-nav />
    <slot />
  </div>
</template>
<script setup>
import TopNav from './components/TopNav'
</script>
