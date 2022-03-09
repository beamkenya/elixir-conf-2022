<template>
  <div class="d-container">
    <div class="flex items-center">
      <div class="w-2/3 md:w-1/3">
        <div>
          <h5 class="text-secondary text-sm md:text-base dark:text-secondary-dark mt-12 md:mt-32">
            #The Largest Elixir Conference in Africa
          </h5>
          <h1 class="text-primary dark:text-primary-dark text-4xl md:text-7xl font-bold py-4 md:py-4">
            ElixirConfAfr 2022
          </h1>
          <h3 class="pb-2 md:pb-4 text-2xl text-secondary dark:text-secondary-dark">Elixir as a power tool</h3>
          <h5 class="text-primary dark:text-primary-dark">
            <i class="fa fa-calendar" /> Conference: May 2022
          </h5>
          <h5 class="text-primary dark:text-primary-dark">
            <i class="fa fa-map-marker" /> Virtual, Africa
          </h5>
        </div>
        <count-days />
        <div class="space-x-3 mt-4 md:mt-10 flex">
          <a class="btn btn-secondary">Buy Ticket</a>
          <a class="btn btn-accent">Call For Speakers</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
}
</script>
