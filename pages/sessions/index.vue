<template>
  <div>
    <div class="d-container">
      <shared-banner>Sessions</shared-banner>
      <div class="w-full flex flex-wrap mt-2 md:mt-4">
        <div v-if="!pending" class="w-full container mx-auto flex flex-wrap px-4 md:px-12 py-4">
          <div class="flex flex-row lg:flex-col w-full lg:w-1/12 h-auto lg:h-64 bor border-r-0 lg:border-r border-primary dark:border-primary-dark space-y-0 lg:space-y-6 space-x-6 lg:space-x-0 items-center lg:items-start justify-center lg:justify-start py-2 lg:py-0 sticky nav-bg nav-side z-30">
            <div v-for="(days, $index, $key) in schedule" :key="$key" :class="['w-4/12 px-3 py-1 lg:w-full cursor-pointer rounded-tl-lg rounded-bl-lg rounded-r-lg lg:rounded-r-none', currentTab === $key ? 'bg-primary dark:bg-primary-dark' : 'border border-r-1 lg:border-r-0 border-primary dark:border-primary-dark' ]" @click.prevent="showTab($key)">
              <h4 :class="['text-px-16-slab', currentTab === $key ? 'text-white' : 'text-primary dark:text-primary-dark']">
                {{ $timeDay($index) }} <small :class="['text-px-13 capitalize', currentTab === $key ? 'text-white' : 'text-primary dark:text-primary-dark']">Day {{ $key+1 }}</small>
              </h4>
            </div>
          </div>
          <div class="w-full lg:w-11/12">
            <div v-for="(days, $index, $key) in schedule" :id="$index" :key="$key">
              <Transition
                name="fade"
                enter-active-class="transition duration-300 ease-out transform"
                enter-class="-translate-y-3 scale-95 opacity-0"
                enter-to-class="translate-y-0 scale-100 opacity-100"
                leave-active-class="transition duration-150 ease-in transform"
                leave-class="translate-y-0 opacity-100"
                leave-to-class="-translate-y-3 opacity-0"
              >
                <div v-if="currentTab === $key" class="flex-wrap w-full flex space-y-6 mb-2 lg:mb-10">
                  <div v-if="days.length > 0">
                    <div v-for="(session, $ind) in days" :key="$ind" class="flex w-full px-0 lg:px-2 mb-4 lg:mb-10">
                      <div :class="['w-2/12 flex items-center justify-center text-right hidden lg:grid', session.is_serviceSession ? 'h-24' : 'h-32']">
                        <h3 class="text-px-14-slab text-primary dark:text-primary-dark uppercase">
                          {{ $time(session.start_date_time) }} <br> {{ $timeAm(session.start_date_time) }}
                        </h3>
                      </div>
                      <div class="w-full lg:w-10/12 flex rounded-tr-lg rounded-br-lg">
                        <nuxt-link v-if="!session.is_serviceSession" :to="'/sessions/' + session.slug" class="h-20 w-20  lg:h-40 lg:w-40 flex-none bg-cover rounded-tl rounded-bl text-center overflow-hidden">
                          <div v-if="session.speakers.length === 1">
                            <img v-for="(speaker, $i) in session.speakers" :key="$i" :src="speaker.avatar" :alt="speaker.name" :title="speaker.name">
                          </div>
                          <div v-else>
                            <client-only>
                              <carousel
                                :items-to-show="1"
                                :transition="1000"
                                :items-to-scroll="1"
                              >
                                <!--                              :per-page="1"-->
                                <!--                              :autoplay="true"-->
                                <!--                              :nav="false"-->
                                <!--                              :loop="true"-->
                                <!--                              :pagination-enabled="true"-->
                                <!--                              :autoplay-timeout="2000"-->
                                <!--                              :mouse-drag="false"-->
                                <!--                            >-->
                                <slide v-for="(speaker, $i) in session.speakers" :key="$i">
                                  <img :src="speaker.avatar" :alt="speaker.name" :title="speaker.name">
                                </slide>
                              </carousel>
                            </client-only>
                          </div>
                        </nuxt-link>
                        <div v-else class="h-12 w-20 lg:h-24 lg:w-36 flex-none bg-cover rounded-tl rounded-bl text-center overflow-hidden" style="background-image: url('/images/speakers/arrive.png')" :title="session.title" />
                        <div :class="['h-auto w-full shadow-sm rounded-tr-lg bg-white dark:bg-dark rounded-br-lg px-4 flex flex-col justify-between', session.is_serviceSession ? 'lg:h-24 py-2': 'lg:h-40 py-3']">
                          <div class="flex flex-wrap items-start">
                            <div class="w-10/12">
                              <nuxt-link v-if="!session.is_serviceSession" :to="'/sessions/' + session.slug">
                                <div class="text-xl text-primary dark:text-primary-dark mb-2">
                                  {{ session.title }}
                                </div>
                                <div class="text-base text-dark-text dark:text-dark-text-dark">
                                  {{ $truncateString(session.description, 100) }}
                                </div>
                              </nuxt-link>
                              <div v-else>
                                <div class="text-xl text-primary dark:text-primary-dark mb-2">
                                  {{ session.title }}
                                </div>
                                <div class="text-base text-dark-text dark:text-dark-text-dark">
                                  {{ $truncateString(session.description, 100) }}
                                </div>
                              </div>
                              <div class="text-xs text-dark-text dark:text-dark-text-dark  uppercase mt-2">
                                {{ $hour(session.start_date_time) }} - {{ $hour(session.end_date_time) }} | <span v-for="(room, $r) in session.rooms" :key="$r">{{ room.title }}<span v-if="$r+1 < session.rooms.length">, </span> </span>
                              </div>
                              <div v-if="!session.is_serviceSession" class="text-sm text-secondary dark:text-primary-dark pt-3">
                                <i class="fa fa-user pr-1" /> <span v-for="(speaker, $s) in session.speakers" :key="$s"><a
                                  :href="speaker.twitter"
                                >{{ speaker.name }}</a><span v-if="$s+1 < session.speakers.length">, </span> </span>
                              </div>
                            </div>
                          <!--                            <div class="w-2/12 flex items-center justify-center">-->
                          <!--                              <star-session v-if="!session.is_serviceSession" :session-id="session.id" :is-bookmarked="session.is_bookmarked" :session-slug="session.slug" />-->
                          <!--                            </div>-->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <no-session v-else />
                </div>
              </Transition>
            </div>
          </div>
        </div>
        <sessions-skeleton v-else />
      </div>
    </div>
  </div>
</template>

<script setup>
import data from '../../api/sessions.json'
import SessionsSkeleton from '../../components/session/SessionsSkeleton'
import NoSession from '../../components/session/NoSession'
import 'vue3-carousel/dist/carousel.css'

const currentTab = ref(0)
const pending = ref(true)

const showTab = (id) => {
  currentTab.value = id
}

const schedule = data.data
onMounted(() => {
  setTimeout(() => {
    pending.value = false
  }, 100)
})
</script>

<style lang="scss" scoped>
.all-sessions {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.nav-side {
  top: 52px;
  @media screen and (max-width: 360px) {
    top:60px;
  }
}
</style>
