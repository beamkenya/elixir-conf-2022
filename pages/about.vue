<template>
  <div>
    <div class="d-container">
      <shared-banner>About</shared-banner>
      <div class="mt-4 flex justify-center">
        <shared-title>Elixir Conf Africa</shared-title>
      </div>
      <div class="py-4 lg:py-10">
        <p>
          ElixirConfAfr is an annual conference bringing together BEAM enthusiasts for collaboration, networking and learning.
          <br><br>
          Elixir communities around Africa bring you the first of many editions of ElixirConfAfr.
          This conference will be held virtually and is open to anyone from anywhere around the world, the event will incorporate among other things, technical and non technical talks, with the main focus being how Elixir has been used to craft technological solutions aimed at addressing problems and issues within and outside of Africa.

          <br><br>
          ElixConfAfr will be held at Greenwich Meridian Time (GMT) to suit attendees all over Africa for a two-day event filled with display of talks and workshops from amazing speakers and teachers.
        </p>
      </div>

      <section class="w-full container mx-auto h-auto md:px-32 px-0">
        <div class="mt-2 flex justify-center">
          <shared-title>Organizing Team</shared-title>
        </div>
        <div class="w-full px-0 md:px-24 mr-auto mb-4 md:mb-0 pb-10 lg:pb-16 mt-5 lg:mt-12">
          <div class="w-full flex flex-wrap grid sm:grid-cols-4 md:grid-cols-5 grid-cols-3 gap-2 lg:gap-8 mb-14 md:mb-0">
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
    photo: '/images/organisers/IMG_20200207_123840 - Magak Emmanuel.jpg',
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
