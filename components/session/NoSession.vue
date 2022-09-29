<template>
  <div class="flex w-full px-0 lg:px-2">
    <div class="w-2/12 h-20 flex items-center justify-center text-right hidden lg:grid" />
    <div class="w-full lg:w-10/12 flex bg-white dark:bg-secondary-dark rounded-lg">
      <div class="h-auto w-full lg:h-24 shadow rounded-lg px-4 py-3 flex flex-col justify-center">
        <div class="flex flex-wrap items-center">
          <div class="w-10/12 text-primary">
            <div v-if="isEventLive" class="text-px-14-slab black mb-2">
              Seems there are no sessions here from the filter or saved session !
            </div>
            <div v-else class="text-px-14-slab black mb-2">
              Sessions and speakers list coming soon, stay tuned !
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoSession',
  // eslint-disable-next-line vue/require-prop-types
  props: ['isEventLive'],
}
</script>
