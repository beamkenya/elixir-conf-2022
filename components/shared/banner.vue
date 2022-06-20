<template>
  <div class="flex justify-center items-center h-[130px] lg:h-[300px] uppercase">
    <h1 class="text-white dark:text-secondary-dark-text text-4xl md:text-7xl font-bold py-4 md:py-4">
      <slot />
    </h1>
  </div>
</template>

<script>
export default {
  name: 'banner',
}
</script>
