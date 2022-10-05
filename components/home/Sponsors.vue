<template>
  <div>
    <section id="sponsor" class="d-container py-4 md:py-10">
      <div class="flex justify-center">
        <shared-title>ElixirConfAfr Sponsors</shared-title>
      </div>
      <div v-if="config.isEventLive">
        <div class="row flex-col items-center">
          <h5 class="title-2-secondary py-3 md:py-5">
            Signature
          </h5>
          <div class="flex flex-row justify-center md:justify-start items-center">
            <a v-for="(p, i) in signature" :key="i" :href="p.link" target="_blank" rel="noopener noreferrer"><img :src="p.logo" :alt="p.link" class="w-36 md:w-72 space-x-4 px-0 md:px-6 py-6 md:py-0"></a>
          </div>
        </div>
<!--        <div class="row flex-col items-center mt-4 md:mt-8">-->
<!--          <h5 class="title-2-secondary py-3 md:py-5">-->
<!--            Conference Supporter-->
<!--          </h5>-->
<!--          <div class="flex flex-row justify-center md:justify-start items-center">-->
<!--            <a v-for="(p, i) in supporters" :key="i" :href="p.link" target="_blank" rel="noopener noreferrer"><img :src="p.logo" :alt="p.link" class="w-24 md:w-52 space-x-4 px-0 md:px-6 py-6 md:py-0"></a>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="row flex-col items-center mt-4 md:mt-8">-->
<!--          <h5 class="title-2-secondary py-3 md:py-5">-->
<!--            Community Builder-->
<!--          </h5>-->
<!--          <div class="flex flex-row justify-center md:justify-start items-center">-->
<!--            <a v-for="(p, i) in communitiy" :key="i" :href="p.link" target="_blank" rel="noopener noreferrer"><img :src="p.logo" :alt="p.link" class="w-24 md:w-52 space-x-4 px-0 md:px-6 py-6 md:py-0"></a>-->
<!--          </div>-->
<!--        </div>-->
      </div>
      <div v-else class="text-center">
        <p class="font-medium">
          Bring you logo here, sponsor Elixir Conf Africa
        </p>
      </div>

      <div class="flex justify-center pt-6 md:pt-12 mb-5 md:mb-0">
        <a class="btn-accent" href="mailto:jambo@elixirconf.africa">Become A Sponsor</a>
      </div>
    </section>
  </div>
</template>

<script>
import { useRuntimeConfig } from 'nuxt/app'

export default {
  name: 'Sponsors',
  setup () {
    const config = useRuntimeConfig()

    const signature = [
      // { logo: '/images/sponsors/remote.svg', link: 'https://remote.com/' },
      { logo: '/images/partners/podii.png', link: 'https://podiihq.com/' },
    ]

    const supporters = [
      { logo: '/images/sponsors/dockyard.svg', link: 'https://dockyard.com/' },
      { logo: '/images/sponsors/qhala.png', link: 'https://qhala.com/' },
    ]

    const communitiy = [
      { logo: '/images/sponsors/smartlogic.png', link: 'https://smartlogic.io/' },
      { logo: '/images/sponsors/binary.png', link: 'https://binarynoggin.com/' },
      { logo: '/images/sponsors/frame.png', link: 'https://www.frame.io/' },
      { logo: '/images/sponsors/smart.png', link: 'https://www.smartvokat.com/' },
    ]

    return {
      signature,
      supporters,
      communitiy,
      config,
    }
  },
}
</script>
