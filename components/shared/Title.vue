<template>
  <div class="py-3 md:py-6">
    <h2 class="title-primary mb-2">
      <slot />
    </h2>
    <span v-if="underlined" class="fill-primary dark:fill-primary-dark">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="71px" height="11px"> <path fill-rule="evenodd" d="M59.669,10.710 L49.164,3.306 L39.428,10.681 L29.714,3.322 L20.006,10.682 L10.295,3.322 L1.185,10.228 L-0.010,8.578 L10.295,0.765 L20.006,8.125 L29.714,0.765 L39.428,8.125 L49.122,0.781 L59.680,8.223 L69.858,1.192 L70.982,2.895 L59.669,10.710 Z" /></svg>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    underlined: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
