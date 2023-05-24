<template>
  <div>
    <div class="d-container">
      <shared-banner>About</shared-banner>
      <div class="mt-4 flex justify-center">
        <shared-title>Elixir Conf Africa</shared-title>
      </div>
      <div class="py-4 lg:py-10">
        <p class="md:px-32 px-0">
          Welcome to the Elixirconfafrica website, your one-stop destination for the annual Elixir conference for Africa!
          This conference is designed to create awareness of the Elixir language and its benefits, making it an ideal
          destination for tech enthusiasts and beginners alike. <br> <br>
          Our conference covers a wide range of topics related to Elixir, including its libraries and frameworks.
          Attendees will have the opportunity to learn from industry experts and discover new ways to enhance their
          projects using this versatile language. <br> <br>
          But the Elixir conference for Africa is more than just a learning opportunity - it's also a chance to network
          with like-minded individuals and potentially form partnerships or collaborations. Our conference provides
          attendees with the chance to interact with other tech enthusiasts and industry experts, gaining inspiration,
          motivation, and potentially even new career opportunities. <br><br>
          This year, the Elixir conference for Africa will be a virtual event held on May 26th - 27th, making it easier
          than ever for anyone to participate. Don't miss out on this opportunity to learn, network, and discover the
          power of the Elixir language - sign up now and join us for an unforgettable virtual experience!
        </p>
      </div>

      <section class="w-full container mx-auto h-auto md:px-32 px-0">
        <div class="mt-2 flex justify-center">
          <shared-title>Organizing Team</shared-title>
        </div>
        <div class="w-full px-0 md:px-24 mr-auto mb-4 md:mb-0 pb-8 lg:pb-16 mt-5 lg:mt-12">
          <div class="w-full flex-wrap grid sm:grid-cols-4 md:grid-cols-4 grid-cols-3 gap-2 lg:gap-8 mb-5 md:mb-0">
            <a
              v-for="(member, $index) in members"
              :key="$index"
              :href="member.link"
              class="text-center flex justify-center flex-wrap"
              target="_blank"
            >
              <div
                class="w-24 h-24 sm:w-26 sm:h-36 md:w-44 md:h-44 p-2 md:p-4 flex justify-center bg-secondary dark:bg-secondary-dark rounded"
              >
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
    name: 'Juliet Mukami',
    photo: '/images/organisers/JulietMukami.jpeg',
    link: 'https://www.linkedin.com/in/juliet-mukami-8b6476132/',
    tagline: 'Lead Organiser',
  },
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
  // {
  //   name: 'Wanjiku Macharia',
  //   photo: '/images/organisers/wanjikures.png',
  //   link: 'https://www.linkedin.com/in/wanjiku-macharia-b4b95a94',
  //   tagline: 'IT Support, Time Keeper',
  // },
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
  // {
  //   name: 'Ruyonga Daniel',
  //   photo: '/images/organisers/ruyongaDan.png',
  //   link: 'https://www.linkedin.com/in/ruyongadaniel/',
  //   tagline: 'Sponsors\' Manager, Speakers\' Manager',
  // },
  {
    name: 'Magak Emmanuel',
    photo: '/images/organisers/MagakEmmanuel.jpg',
    link: 'https://www.linkedin.com/in/manuelgeek',
    tagline: 'Creative Director',
  },
  // {
  //   name: 'Imo Inyang',
  //   photo: '/images/organisers/imo.png',
  //   link: 'https://www.linkedin.com/in/imoinyang',
  //   tagline: 'Conference Moderator, Speakers\' Manager',
  // },
  // {
  //   name: 'Jackie Kaunda',
  //   photo: '/images/organisers/wayua.jpg',
  //   link: 'https://www.linkedin.com/in/jackline-kaunda-54779b157/',
  //   tagline: 'Speakers\' Manager',
  // },
  {
    name: 'Frank Midigo',
    photo: '/images/organisers/frank.jpg',
    link: 'https://www.linkedin.com/in/midigo-f-023450123/',
    tagline: 'Time Keeper, IT Support',
  },
]
</script>
