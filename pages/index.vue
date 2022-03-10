<template>
  <div class="d-container">
    <div class="flex items-center">
      <div class="w-full md:w-1/3">
        <div>
          <h5 class="text-secondary text-sm md:text-base dark:text-secondary-dark mt-12 md:mt-32">
            #The Largest Elixir Conference in Africa
          </h5>
          <h1 class="text-primary dark:text-primary-dark text-4xl md:text-7xl font-bold py-4 md:py-4">
            ElixirConfAfr <br> 2022
          </h1>
          <h3 class="pb-2 md:pb-4 title-2-secondary">
            Elixir as a power tool
          </h3>
          <h5 class="text-primary dark:text-primary-dark">
            <i class="fa fa-calendar" /> Conference: May 2022
          </h5>
          <h5 class="text-primary dark:text-primary-dark">
            <i class="fa fa-map-marker" /> Virtual, Africa
          </h5>
        </div>
        <count-days />
        <div class="space-x-3 mt-5 md:mt-10 flex justify-center md:justify-start">
          <a class="btn-secondary">Buy Ticket</a>
          <a class="btn-accent">Call For Speakers</a>
        </div>
      </div>
    </div>
    <section id="about" class="mt-10 md:mt-32">
      <div class="row">
        <div class="w-full md:w-1/3">
          <img src="/images/logo-purple-square.png" alt="logo 2">
        </div>
        <div class="w-full md:w-2/3">
          <shared-title>About Elixir Conf Africa</shared-title>
          <h4 class="title-2-secondary">
            The Largest Elixir Conference in Africa
          </h4>

          <p class="py-4 md:py-8">
            Elixir communities around Africa bring you the second edition of ElixirConfAfr.
            This conference will be held virtually and is open to anyone from anywhere around the world, the event will incorporate among other things, technical and non-technical talks, with the main focus being how Elixir has been used to craft technological solutions aimed at addressing problems and issues within and outside of Africa.
          </p>
          <div class="my-5 md:my-10">
            <router-link to="/about" class="btn-accent">
              More ABout ElixirConfAfr
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div class="bg-secondary dark:bg-secondary-dark">
    <section id="why-attend" class="d-container pb-6 md:pb-16">
      <div class="flex justify-center py-4 md:py-10">
        <shared-title>What's in it for you</shared-title>
      </div>
      <div class="row items-center">
        <div class="w-full md:w-1/3">
          <div class="flex flex-col text-left md:text-right">
            <i class="fa fa-microphone text-6xl" />
            <h5 class="text-white text-2xl py-2 md:py-4">
              Great Speakers
            </h5>
            <p class="text-white">
              How you transform your business as technology, consumer, habits industry dynamic
            </p>
          </div>
          <div class="flex flex-col text-left md:text-right mt-5 md:mt-12">
            <i class="fa fa-rss text-6xl" />
            <h5 class="text-white text-2xl py-2 md:py-4">
              Networking
            </h5>
            <p class="text-white">
              How you transform your business as technology, consumer, habits industry dynamic
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-2 md:px-10 py-10 md:py-0">
          <iframe
            class="w-full h-80"
            src="https://www.youtube.com/embed/3_pQ3CS85Lw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          />
        </div>
        <div class="w-full md:w-1/3">
          <div class="flex flex-col text-left">
            <i class="fa fa-group text-6xl" />
            <h5 class="text-white text-2xl py-2 md:py-4">
              New People
            </h5>
            <p class="text-white">
              How you transform your business as technology, consumer, habits industry dynamic
            </p>
          </div>
          <div class="flex flex-col text-left mt-5 md:mt-12">
            <i class="fa fa-puzzle-piece text-6xl" />
            <h5 class="text-white text-2xl py-2 md:py-4">
              Have Fun
            </h5>
            <p class="text-white">
              How you transform your business as technology, consumer, habits industry dynamic
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'index',
}
</script>
