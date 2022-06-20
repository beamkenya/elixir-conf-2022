<template>
  <div class="bg-secondary dark:bg-secondary-dark">
    <section id="why-attend" class="d-container pb-6 md:pb-16">
      <div class="flex justify-center py-4 md:py-10">
        <shared-title>What's in it for you</shared-title>
      </div>
      <div class="row items-center">
        <div class="w-full md:w-1/3">
          <div class="flex flex-col text-left md:text-right">
            <i class="fa fa-microphone text-6xl" />
            <h5 class="dark-text text-2xl py-2 md:py-4">
              Great Speakers
            </h5>
            <p class="dark-text">
              How you transform your business as technology, consumer, habits industry dynamic
            </p>
          </div>
          <div class="flex flex-col text-left md:text-right mt-5 md:mt-12">
            <i class="fa fa-rss text-6xl" />
            <h5 class="dark-text text-2xl py-2 md:py-4">
              Networking
            </h5>
            <p class="text-white dark:text-secondary-dark-text">
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
            <h5 class="text-white dark:text-secondary-dark-text text-2xl py-2 md:py-4">
              New People
            </h5>
            <p class="text-white dark:text-secondary-dark-text">
              How you transform your business as technology, consumer, habits industry dynamic
            </p>
          </div>
          <div class="flex flex-col text-left mt-5 md:mt-12">
            <i class="fa fa-puzzle-piece text-6xl" />
            <h5 class="text-white dark:text-secondary-dark-text text-2xl py-2 md:py-4">
              Have Fun
            </h5>
            <p class="text-white dark:text-secondary-dark-text">
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
  name: 'WhyAttend',
}
</script>
