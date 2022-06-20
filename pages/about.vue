<template>
  <div>
    <div class="d-container">
      <shared-banner>About</shared-banner>
      <div class="mt-4 flex justify-center">
        <shared-title>Elixir Conf Africa</shared-title>
      </div>
      <div class="py-4 lg:py-10">
        <p class="md:px-32 px-0">
          ElixirConfAfr is an annual conference bringing together BEAM enthusiasts for collaboration, networking and learning.
          <br><br>
          <!--          Elixir communities around Africa bring you the first of many editions of ElixirConfAfr.-->
          <!--          This conference will be held virtually and is open to anyone from anywhere around the world, the event will incorporate among other things, technical and non technical talks, with the main focus being how Elixir has been used to craft technological solutions aimed at addressing problems and issues within and outside of Africa.-->

          <!--          <br><br>-->
          <!--          ElixConfAfr will be held at Greenwich Meridian Time (GMT) to suit attendees all over Africa for a two-day event filled with display of talks and workshops from amazing speakers and teachers.-->

          From the creators of the first ever Elixir Conference that took place in May 2021, we feel indebted and excited to bring you yet another stupendous ElixirConf virtual experience.
          <br> Ever since their inception, BEAM languages have grown tremendously, we've all in a way witnessed this growth, kind of like parenting :) So, as Elixir/Erlang die hards we are excited to show off the amazing progress the language as made over the years.
          <br> We've all (or know someone who has) built amazing products and services running on this  language that has a therapeutic effect, and these have gone a long way to provide solutions to various problems we may know about.
          <br><br>So, this year, as we bring light to the various technologies and trends hooked to Elixir, we'd also like to showcase real life exemplar of how the language has been used effectively as a solution power tool. That's what ElixirConf Africa is about this year.
          <br><br> Gear up for the amazing roller coaster of amazing talks, game-time sessions, code and coffee booths and above all NETWORKING! Cheers!
        </p>
      </div>

      <section class="w-full container mx-auto h-auto md:px-32 px-0">
        <div class="mt-2 flex justify-center">
          <shared-title>Organizing Team</shared-title>
        </div>
        <div class="w-full px-0 md:px-24 mr-auto mb-4 md:mb-0 pb-8 lg:pb-16 mt-5 lg:mt-12">
          <div class="w-full flex flex-wrap grid sm:grid-cols-4 md:grid-cols-5 grid-cols-3 gap-2 lg:gap-8 mb-5 md:mb-0">
            <a v-for="(member, $index) in members" :key="$index" :href="member.link" class="text-center flex justify-center flex-wrap" target="_blank">
              <div class="w-24 h-24 md:w-36 md:h-36 p-2 md:p-4 flex justify-center bg-secondary dark:bg-secondary-dark rounded">
                <img
                  class="w-full p-0 rounded-full border-2 border-primary dark:border-primary-dark"
                  :src="member.photo === null ? '/icon.png' : member.photo"
                  :alt="member.name"
                >
              </div>
              <p class="text-base capitalize font-bold black mt-2 w-full">
                {{ member.name }}
              </p>
              <p class="text-xs gray">
                {{ member.tagline }}
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script setup>
const members = [
  {
    name: 'Sigu Magwa',
    photo: '/images/organisers/siguinwhiteblurredbg.jpg',
    link: 'https://www.linkedin.com/in/sigu/',
    tagline: 'Lead Conference Organiser, Sponsorship Manager',
  },
  {
    name: 'Chantelle Kyendereta',
    photo: '/images/organisers/chantelleblurredbg.png',
    link: 'https://www.linkedin.com/in/chantelle-kyendereta-70993719b/',
    tagline: 'Creative Director, Co-director',
  },
  {
    name: 'Collins Mucheru',
    photo: '/images/organisers/mushblurredbg.png',
    link: 'https://www.linkedin.com/in/cmush',
    tagline: 'IT Support, Conference Coach',
  },
  {
    name: 'Wanjiku Macharia',
    photo: '/images/organisers/wanjikures.png',
    link: 'https://www.linkedin.com/in/wanjiku-macharia-b4b95a94',
    tagline: 'IT Support, Time Keeper',
  },
  {
    name: 'Okoth Kong\'o',
    photo: '/images/organisers/okothres.png',
    link: 'https://www.linkedin.com/in/okoth-kongo-232633163/',
    tagline: 'IT Support, Attendees\' Manager',
  },
  {
    name: 'Tracey Onim',
    photo: '/images/organisers/TraceyOnimres.png',
    link: 'https://www.linkedin.com/in/tracey-onim-420b3316a/',
    tagline: 'Speakers\' Manager, Session Moderator',
  },
  {
    name: 'Njoki Kiarie',
    photo: '/images/organisers/njoki.jpg',
    link: 'https://www.linkedin.com/in/njoki-kiarie-4312528a',
    tagline: 'Attendees\' Manager, Speakers\' Manager',
  },
  {
    name: 'Pollet Obuya',
    photo: '/images/organisers/apopi.png',
    link: 'https://www.linkedin.com/in/pollet-obuya-664436127/',
    tagline: 'Attendees\' Manager, IT Support',
  },
  {
    name: 'Getty Orawo',
    photo: '/images/organisers/GettyOrawoblurredbg.png',
    link: 'https://www.linkedin.com/in/gettyorawo',
    tagline: 'Creative Director, Co-director',
  },
  {
    name: 'Ruyonga Daniel',
    photo: '/images/organisers/ruyongaDan.png',
    link: 'https://www.linkedin.com/in/ruyongadaniel/',
    tagline: 'Sponsors\' Manager, Speakers\' Manager',
  },
  {
    name: 'Magak Emmanuel',
    photo: '/images/organisers/MagakEmmanuel.jpg',
    link: 'https://www.linkedin.com/in/manuelgeek',
    tagline: 'Creative Director',
  },
  {
    name: 'Imo Inyang',
    photo: '/images/organisers/imo.png',
    link: 'https://www.linkedin.com/in/imoinyang',
    tagline: 'Conference Moderator, Speakers\' Manager',
  },
  {
    name: 'Jackie Kaunda',
    photo: '/images/organisers/wayua.jpg',
    link: 'https://www.linkedin.com/in/jackline-kaunda-54779b157/',
    tagline: 'Speakers\' Manager',
  },
  {
    name: 'Frank Midigo',
    photo: '/images/organisers/frank.jpg',
    link: 'https://www.linkedin.com/in/midigo-f-023450123/',
    tagline: 'Time Keeper, IT Support',
  },
]
</script>
