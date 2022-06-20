<template>
  <div>
    <section id="why-attend" class="d-container py-3 md:py-6">
      <div class="row py-4 md:py-10 items-center">
        <div class="w-full md:w-1/2 flex flex-col justify-center md:justify-start">
          <shared-title :underlined="false">
            ElixirConfAfr Partners
          </shared-title>
          <p>Who make it happen</p>
        </div>
        <div class="flex flex-row justify-center md:justify-start items-center">
          <a v-for="(p, i) in partners" :key="i" :href="p.link" target="_blank" rel="noopener noreferrer"><img :src="p.logo" :alt="p.link" class="w-20 md:w-40 space-x-4 px-0 md:px-6 py-6 md:py-0"></a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Partners',
  setup () {
    const partners = [
      { logo: '/images/partners/podii.png', link: 'https://podiihq.com/' },
      { logo: '/images/partners/erlef.png', link: 'http://erlef.org/' },
    ]

    return {
      partners,
    }
  },
}
</script>
