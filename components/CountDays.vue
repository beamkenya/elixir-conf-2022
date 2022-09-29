<template>
  <div class="pt-4 md:pt-8 ml-0 md:-ml-7 text-2xl md:text-5xl font-bold text-primary dark:text-primary-dark text-center">
    <client-only>
      <vue-countdown v-slot="props" :time="time" :interval="100" tag="div">
        <div class="w-full flex grid-cols-4 gap-8">
          <div class="w-full px-1 md:px-6">
            <p>{{ props.days }}</p>
            <span class="text-xs text-light-text dark:text-light-text-dark">DAYS</span>
          </div>
          <div class="w-full px-1 md:px-6">
            <p>{{ props.hours }}</p>
            <span class="text-xs text-light-text dark:text-light-text-dark">HOURS</span>
          </div>
          <div class="w-full px-1 md:px-6">
            <p>{{ props.minutes < 10 ? '0' + props.minutes : props.minutes }}</p>
            <span class="text-xs text-light-text dark:text-light-text-dark">MINUTES</span>
          </div>
          <div class="w-full px-1 md:px-6">
            <p>{{ props.seconds < 10 ? '0' + props.seconds : props.seconds }}</p>
            <span class="text-xs text-light-text dark:text-light-text-dark">SECONDS</span>
          </div>
        </div>
      </vue-countdown>
    </client-only>
  </div>
</template>

<script>
import VueCountdown from '@chenfengyuan/vue-countdown'
export default {
  name: 'CountDays',
  components: { VueCountdown },
  data () {
    const now = new Date()
    const d = new Date('2022-10-7')

    return {
      time: d - now,
    }
  },
}
</script>
