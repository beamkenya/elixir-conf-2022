<template>
  <div>
    <section id="sponsor" class="d-container py-4 md:py-10">
      <div class="flex justify-center">
        <shared-title>ElixirConfAfr Sponsors</shared-title>
      </div>
      <div v-if="config.isEventLive">
        <div class="row flex-col items-center">
          <h5 class="title-2-secondary py-3 md:py-5">
            Gold
          </h5>
          <div class="flex flex-row justify-center md:justify-start items-center space-x-5 md:space-x-8">
            <a
              v-for="(p, i) in signature"
              :key="i"
              :href="p.link"
              target="_blank"
              rel="noopener noreferrer"
            ><img :src="isDarkTheme ? p.darkLogo : p.logo" :alt="p.link" :class="['space-x-4 px-0 md:px-6 py-6 md:py-0', p.class]"></a>
          </div>
        </div>
        <div class="row flex-col items-center mt-6 md:mt-10">
          <h5 class="title-2-secondary py-3 md:py-5">
            Silver
          </h5>
          <div class="flex flex-row justify-center md:justify-start items-center space-x-2 md:space-x-4">
            <a
              v-for="(p, i) in supporters"
              :key="i"
              :href="p.link"
              target="_blank"
              rel="noopener noreferrer"
            ><img :src="isDarkTheme ? p.darkLogo : p.logo" :alt="p.link" :class="['space-x-4 px-0 md:px-6 py-6 md:py-0', p.class]"></a>
          </div>
        </div>
        <div class="row flex-col items-center mt-6 md:mt-10">
          <h5 class="title-2-secondary py-3 md:py-5">
            Friendly Package
          </h5>
          <div class="flex flex-row justify-center md:justify-start items-center">
            <a v-for="(p, i) in communitiy" :key="i" :href="p.link" target="_blank" rel="noopener noreferrer"><img :src="isDarkTheme ? p.darkLogo : p.logo" :alt="p.link" class="w-24 md:w-52 space-x-4 px-0 md:px-6 py-6 md:py-0"></a>
          </div>
        </div>
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

    const { isDarkTheme } = useTheme()

    const signature = [
      // { logo: '/images/sponsors/remote.svg', link: 'https://remote.com/' },
      { logo: '/images/sponsors/pulpo-wms-logo.png', link: 'https://www.pulpowms.com/', darkLogo: '/images/sponsors/pulpo-wms-logo.png', class: 'w-24 md:w-52' },
      // { logo: '/images/partners/podii.png', link: 'https://podiihq.com/', darkLogo: '', class: '' },
      { logo: '/images/sponsors/eef-logo.svg', link: 'http://erlef.org/', darkLogo: '/images/sponsors/eef-logo-dark.png', class: 'w-36 md:w-72' },
    ]

    const supporters = [
      { logo: '/images/sponsors/optimum_v1_light.svg', link: 'http://optimum.ba/', darkLogo: '/images/sponsors/optimum_v1_dark.svg', class: 'w-28 md:w-64' },
      { logo: '/images/sponsors/_PowerGen Logo (1).png', link: 'http://powergen-re.com/', darkLogo: '/images/sponsors/Powergen Logo White with Color.png', class: 'w-[190px] md:w-[450px]' },
    ]

    const communitiy = [
      { logo: '/images/sponsors/girls get geeky logo (1).png', link: 'http://girlsgetgeeky.com/', darkLogo: '/images/sponsors/girls get geeky logo-transparent background (1).png', class: '' },
      // { logo: '/images/sponsors/binary.png', link: 'https://binarynoggin.com/' },
      // { logo: '/images/sponsors/frame.png', link: 'https://www.frame.io/' },
      // { logo: '/images/sponsors/smart.png', link: 'https://www.smartvokat.com/' },
    ]

    return {
      signature,
      supporters,
      communitiy,
      config,
      isDarkTheme,
    }
  },
}
</script>
