<template>
  <div>
    <div class="d-container">
      <div class="flex items-center">
        <div class="w-full md:w-1/3">
          <div>
            <h5 class="text-secondary text-sm md:text-base dark:text-secondary-dark-text mt-12 md:mt-32">
              #The Largest Elixir Conference in Africa
            </h5>
            <h1 class="text-primary dark:text-primary-dark text-4xl md:text-7xl font-bold py-4 md:py-4">
              ElixirConfAfr <br> 2022
            </h1>
            <h3 class="pb-2 md:pb-4 title-2-secondary">
              Elixir as a power tool
            </h3>
            <h5 class="text-primary dark:text-primary-dark">
              <i class="fa fa-calendar" /> Conference: 11th - 12th Aug 2022
            </h5>
            <h5 class="text-primary dark:text-primary-dark">
              <i class="fa fa-map-marker" /> Virtual, Africa
            </h5>
          </div>
          <count-days />
          <div class="space-x-3 mt-5 md:mt-10 flex justify-center md:justify-start">
            <a class="btn-secondary">Buy Ticket</a>
            <a class="btn-accent" href="https://sessionize.com/elixir-conf-africa-2022/" target="_blank" rel="noreferrer noopener">Call For Speakers</a>
          </div>
        </div>
      </div>
      <section id="about" class="mt-10 md:mt-32">
        <div class="row">
          <div class="w-full md:w-1/3">
            <img src="/images/logo-purple-square.png" alt="logo 2">
          </div>
          <div class="w-full md:w-2/3">
            <shared-title>About Elixir Conf Africa</shared-title>
            <h4 class="title-2-secondary">
              The Largest Elixir Conference in Africa
            </h4>

            <p class="py-4 md:py-8">
              Elixir communities around Africa bring you the second edition of ElixirConfAfr.
              This conference will be held virtually and is open to anyone from anywhere around the world, the event will incorporate among other things, technical and non-technical talks, with the main focus being how Elixir has been used to craft technological solutions aimed at addressing problems and issues within and outside of Africa.
              <br><br>
              Gear up for the amazing roller coaster of amazing talks, game-time sessions, code and coffee booths and above all NETWORKING! Cheers!
            </p>
            <div class="my-5 md:my-14">
              <router-link to="/about" class="btn-accent">
                More About ElixirConfAfr
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </div>
    <home-why-attend />
    <home-partners />
    <div class="bg-secondary dark:bg-secondary-dark">
      <section id="sponsor" class="d-container py-4 md:py-10">
        <div class="flex justify-center">
          <shared-title>Sponsor ElixirConfAfr</shared-title>
        </div>
        <p class="text-white text-center">
          Want to become a sponsor? Take a look at our <a class="text-primary dark:text-primary-dark" href="/docs/ElixirConf_Africa_Prospectus.pdf" target="_blank" rel="noopener noreferrer">Sponsorship prospectus</a>
        </p>
        <div class="flex justify-center pt-3 md:pt-6">
          <a class="btn-accent" href="mailto:jambo@elixirconf.africa">Become A Sponsor</a>
        </div>
      </section>
    </div>
    <home-sponsors />
  </div>
</template>
