<template>
  <div>
    <div class="d-container">
      <shared-banner>Session detail</shared-banner>
      <section class="w-full px-0 sm:px-10">
        <div class="w-full container mx-auto flex flex-wrap items-start px-0 md:px-12 py-0 md:py-3">
          <div class="w-full flex-wrap lg:w-4/12 flex border-r-0 lg:border-r border-primary dark:border-primary-dark pr-0 lg:pr-4 mb-6 md:mb-0">
            <div class="w-full py-4">
              <h4 v-if="!pending" class="w-full text-xl text-primary dark:text-primary-dark">
                Speaker{{ session.speakers.length > 1 ? 's' : '' }}
              </h4>
            </div>
            <client-only v-if="!pending">
              <carousel
                :per-page="1"
                :nav="false"
                wrap-around
                pause-autoplay-on-hover
                :loop="true"
                :pagination-enabled="true"
                :transition="500"
                :autoplay="3000"
                :mouse-drag="false"
              >
                <slide v-for="(speaker, $index) in session.speakers" :key="$index" class="w-full">
                  <div class="flex flex-col text-left">
                    <div class="w-full flex items-start flex">
                      <div class="w-28  md:w-40  p-2 md:p-3 flex-none bg-secondary dark:bg-secondary-dark rounded">
                        <img class="w-full p-0 rounded-xl border-2 border-primary dark:border-primary-dark" :src="speaker.avatar" :alt="speaker.name">
                      </div>
                      <div class="w-full text-left px-2 py-1 lg:py-4">
                        <p class="text-base">
                          {{ speaker.name }}
                        </p>
                        <p class="text-sm text-dark-text dark:text-dark-text-dark">
                          {{ speaker.tagline }}
                        </p>
                        <p class="text-px-13 pt-1">
                          <a :href="speaker.twitter" target="_blank"><i class="fa fa-twitter" /> {{ speaker.name }}</a>
                        </p>
                      </div>
                    </div>
                    <div class="w-full">
                      <h4 v-if="speaker.biography !== null" class="text-primary dark:text-primary-dark text-base mt-2 md:mt-4">
                        Bio:
                      </h4>
                      <p class="text-dark-text dark:text-dark-text-dark text-sm mt-2 md:mt-4 mb-4 lg:mb-16">
                        {{ speaker.biography }}
                      </p>
                    </div>
                  </div>
                </slide>
              </carousel>
            </client-only>
            <speaker-skeleton v-else />
          </div>
          <div class="w-full flex-wrap content-start items-start lg:w-6/12 px-0 lg:px-6 flex">
            <div class="w-full flex items-center py-4">
              <h4 class="text-xl text-primary dark:text-primary-dark mr-0 md:mr-10">
                Session
              </h4>
              <!--              <p v-if="!pending" class="text-base gray w-full">-->
              <!--                <span class="mr-2 ml-4 lg:ml-0">Level:</span> <span class="uppercase text-sm">#{{ session.session_level }}</span>-->
              <!--              </p>-->
            </div>
            <div v-if="!pending" class="w-full flex items-start flex-col">
              <div v-if="session.session_image !== null" class="rounded-lg">
                <img class="h-48" :src="session.session_image" alt="session image">
              </div>
              <h4 class="text-primary dark:text-primary-dark text-base mt-4">
                {{ session.session_format }}
              </h4>
              <p class="text-xl gray mt-2 font-bold">
                {{ session.title }}
              </p>
              <p class="text-sm text-dark-text dark:text-dark-text-dark uppercase mt-1">
                {{ $hour(session.start_date_time) }} - {{ $hour(session.end_date_time) }} (GMT+3)
                <!--                | <span v-for="(room, $r) in session.rooms" :key="$r" class="green-dark">{{ room.title }}<span v-if="$r+1 < session.rooms.length">, </span>  </span>-->
              <!--              | <span :style="{ color: session.backgroundColor }">{{ session.session_format }}</span>-->
              </p>
              <h6 class="text-base font-bold text-primary dark:text-primary-dark mt-4 md:mt-10 w-full">
                Session Description
              </h6>
              <p class="p gray mt-2">
                {{ session.description }}
              </p>

              <div v-if="!session.is_serviceSession" class="w-full justify-center md:justify-start flex flex-col mt-4 md:mt-10 mb-4 lg:mb-16">
                <div class="w-full flex">
                  <!--                  <a class="text-primary dark:text-primary-dark text-px-13-b black-persist mr-4 lg:mr-6" href="#" @click.prevent="share">share <i class="fa fa-share" /></a>-->
                  <!--                  <button class="text-primary dark:text-primary-dark text-px-13-b white" @click="toggleModal">-->
                  <!--                    Session Feedback <i class="fa fa-share" />-->
                  <!--                  </button>-->
                </div>
                <!--                <transition name="fade">-->
                <!--                  <div v-if="!webShare" class="w-full flex mt-4 justify-between border rounded-lg p-4 shadow" @click="webShare= true">-->
                <!--                    <ShareNetwork-->
                <!--                      v-for="network in networks"-->
                <!--                      :key="network.key"-->
                <!--                      :network="network.network"-->
                <!--                      class="text-px-14-slab cursor-pointer"-->
                <!--                      :url="sharing.url"-->
                <!--                      :title="session.title"-->
                <!--                      :description="$truncateString(session.description, 100)"-->
                <!--                      :quote="$truncateString(session.description, 100)"-->
                <!--                      :hashtags="sharing.hashtags"-->
                <!--                      :twitter-user="sharing.twitterUser"-->
                <!--                    >-->
                <!--                      <i :style="{color: network.color}" :class="network.icon" />-->
                <!--                      <span>{{ network.name }}</span>-->
                <!--                    </ShareNetwork>-->
                <!--                  </div>-->
                <!--                </transition>-->
              </div>
            </div>
            <session-skeleton v-else />
          </div>
        <!--        <div v-if="!pending" class="w-full flex-wrap items-start justify-center lg:w-2/12 flex py-4 mb-16 lg:mb-0">-->
        <!--          <star-session v-if="!session.is_serviceSession" :session-id="session.id" :is-bookmarked="session.is_bookmarked" :session-slug="session.slug" />-->
        <!--        </div>-->
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import data from '../../api/sessions.json'
import SpeakerSkeleton from '../../components/session/SpeakerSkeleton'
const pending = ref(true)
const route = useRoute()
const config = useRuntimeConfig()

// const sharing = {
//   url: config.BASE_URL + route.fullPath,
//   hashtags: 'elixirconf,elixirconfafrica',
//   twitterUser: 'elixirconfafrica',
// }

// const networks = [
//   { network: 'linkedin', name: 'LinkedIn', icon: 'fa fa-linkedin', color: '#007bb5' },
//   { network: 'telegram', name: 'Telegram', icon: 'fa fa-telegram', color: '#0088cc' },
//   { network: 'twitter', name: 'Twitter', icon: 'fa fa-twitter', color: '#1da1f2' },
//   { network: 'whatsapp', name: 'Whatsapp', icon: 'fa fa-whatsapp', color: '#25d366' },
// ]
// const webShare = ref(true)

let sessions = []
for (const key in data.data) {
  // console.log(key, data.data[key])
  sessions = [...sessions, ...data.data[key]]
}

const session = sessions.find(s => s.slug === route.params.slug)

// const { $truncateString } = useNuxtApp()

// const share = () => {
//   if (navigator.share) {
//     navigator.share({
//       title: session.title,
//       text: $truncateString(session.description, 100),
//       url: config.BASE_URL + route.fullPath,
//     })
//       .then(() => console.log('Successful share'))
//       .catch(error => console.log('Error sharing', error))
//   } else {
//     webShare.value = false
//     console.log('not supported')
//   }
// }

onMounted(() => {
  setTimeout(() => {
    pending.value = false
  }, 100)
})

useMeta({
  title: session.title,
  meta: [
    { hid: 'description', name: 'description', content: session.description.slice(0, 100) + '...' },
    { hid: 'og:description', name: 'description', content: session.description.slice(0, 100) + '...' },
    { hid: 'og:url', property: 'og:url', content: config.BASE_URL + route.fullPath },
    { hid: 'twitter:url', name: 'twitter:url', content: config.BASE_URL + route.fullPath },
    { hid: 'og:title', property: 'og:title', content: session.title },
    { hid: 'twitter:title', name: 'twitter:title', content: session.title },
    { hid: 'og:image', property: 'og:image', content: session.session_image !== null ? session.session_image : '/images/logo-purple.png' },
    { hid: 'twitter:image', name: 'twitter:image', content: session.session_image !== null ? session.session_image : '/images/logo-purple.png' },
  ],
})
</script>

<style scoped>
  .VueCarousel , .VueCarousel-inner {
    width: 100%
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
