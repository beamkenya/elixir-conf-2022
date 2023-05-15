<template>
  <div>
    <div class="d-container">
      <div class="flex items-center">
        <div class="w-full md:w-1/3">
          <div class="mb-8 md:mb-0">
            <h5 class="text-secondary text-sm md:text-base dark:text-secondary-dark-text mt-48 md:mt-32">
              #The Largest Elixir Conference in Africa
            </h5>
            <h1 class="text-primary dark:text-primary-dark text-4xl md:text-7xl font-bold py-4 md:py-4 -mt-2 md:mt-0">
              ElixirConfAfr <br> 2023
            </h1>
            <h3 class="pb-2 md:pb-4 title-2-secondary">
              Elixir as a power tool
            </h3>
            <h5 class="text-primary dark:text-primary-dark mt-10 md:mt-0">
              <i class="fa fa-calendar" /> Conference: 26th - 27th May 2023
            </h5>
            <h5 class="text-primary dark:text-primary-dark">
              <i class="fa fa-map-marker" /> Virtual, Africa
            </h5>
          </div>
          <count-days />
          <div class="space-x-3 mt-5 md:mt-10 flex justify-center md:justify-start">
            <a href="https://t.co/YpZdlgxwG1" target="_blank" rel="noopener noreferrer" class="btn-secondary">Buy Ticket</a>
            <!-- <a class="btn-accent" href="https://sessionize.com/elixir-conf-africa-2023" target="_blank" rel="noreferrer noopener">Call For Speakers</a> -->
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
              ElixirConf Africa 2023 comes back as a Virtual event
            </h4>

            <p class="py-4 md:py-8">
              Hosting the Conf 2023 gives us great pleasure in being able to bring forth , the Communities together for
              exquisite learning ,networking sessions , growth and expansion on certain skills presented ; in a bid to
              ensure we accommodate beamers from all levels . We have tickets already up for sale <a href="https://t.co/YpZdlgxwG1" target="_blank" rel="noopener noreferrer" class="link text-blue-500">here</a> grab one /two and
              tag a friend along . <br><br>
              We have avenues for new encouraged ideas and thinking. We get to discover great works being done with Elixir
              by individuals and companies . It helps those new to the community find their feet, and even greater
              experience for those who have attended before, to champion and progress the uptake and development of Elixir
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
        <p class="text-white dark:text-secondary-dark-text text-center">
          Want to become a sponsor? Take a look at our &nbsp; <a
            class="text-primary dark:text-primary-dark text-xl"
            href="/docs/ElixirConf_Africa_Prospectus_2023.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >Sponsorship
            prospectus</a>
        </p>
        <div class="flex justify-center pt-3 md:pt-6">
          <!-- <a class="btn-accent" href="mailto:jambo@elixirconf.africa">Become A Sponsor</a> -->
          <router-link class="btn-accent" to="/sponsors">
            Become A Sponsor
          </router-link>
        </div>
      </section>
    </div>
    <!-- <home-sponsors /> -->
  </div>
</template>
