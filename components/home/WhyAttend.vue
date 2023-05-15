<template>
  <div class="bg-secondary dark:bg-secondary-dark">
    <section id="why-attend" class="d-container pb-6 md:pb-16">
      <div class="flex justify-center py-4 md:py-10">
        <shared-title>What's in it for you</shared-title>
      </div>
      <div class="row items-center">
        <div class="w-full md:w-1/4">
          <div class="flex flex-col text-center md:text-right">
            <i class="fa fa-microphone text-6xl text-white dark:text-secondary-dark-text" />
            <h5 class="text-white dark:text-secondary-dark-text text-2xl py-2 md:py-4">
              Great Speakers
            </h5>
            <p class="text-white dark:text-secondary-dark-text">
              How you transform your business as technology, consumer, habits industry dynamic
            </p>
          </div>
          <div class="flex flex-col text-center md:text-right mt-7 md:mt-12">
            <i class="fa fa-rss text-6xl text-white dark:text-secondary-dark-text" />
            <h5 class="text-white dark:text-secondary-dark-text text-2xl py-2 md:py-4">
              Networking
            </h5>
            <p class="text-white dark:text-secondary-dark-text">
              How you transform your business as technology, consumer, habits industry dynamic
            </p>
          </div>
        </div>
        <div class="w-full md:w-2/4 px-2 md:px-10 py-10 md:py-0">
          <!-- <iframe
            class="w-full h-80"
            src="https://www.youtube.com/embed/videoseries?list=PLuZrI9EyyBug8dhy3eqPggus9OvQ-9l6Z"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          /> -->
          <video
            className="rounded-xl aspect-video  w-full  md:w-[670px] "
            loop
            autoPlay
            muted
            preload="auto"
            controls
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
          >
            <source
              type="video/mp4"
              src="/video/VIDEO-2023-05-12-15-19-01.mp4"
            >
          </video>
        </div>
        <div class="w-full md:w-1/4">
          <div class="flex flex-col text-center md:text-left">
            <i class="fa fa-group text-6xl text-white dark:text-secondary-dark-text" />
            <h5 class="text-white dark:text-secondary-dark-text text-2xl py-2 md:py-4">
              New People
            </h5>
            <p class="text-white dark:text-secondary-dark-text">
              How you transform your business as technology, consumer, habits industry dynamic
            </p>
          </div>
          <div class="flex flex-col text-center md:text-left mt-7 md:mt-12">
            <i class="fa fa-puzzle-piece text-6xl text-white dark:text-secondary-dark-text" />
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
