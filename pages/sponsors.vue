<template>
  <div>
    <div class="d-container">
      <shared-banner>Sponsors</shared-banner>
      <div class="mt-4 flex justify-center">
        <shared-title>Why Sponsor ElixirConfAfri</shared-title>
      </div>
      <div class="py-4 md:pb-20 md:px-32 px-0">
        <div>
          <div class="flex flex-wrap">
            <div class="w-full md:w-1/3 p-0 md:px-4">
              <h5 class="title-2-secondary py-3 md:py-5 p-0 md:px-4">
                Attendee Profile
              </h5>
              <p>
                The event targets students, professional software developers who work in mid to large sized organizations and who develop systems of all sizes for enterprise companies. The event aims to attract attendees across industries such as financial services, media houses, telco’s etc.
              </p>
            </div>
            <img class="w-full md:w-2/3 p-0 md:px-4 my-10 md:0" src="/images/NUMBERS.svg" alt="sponsorship">
          </div>
        </div>
        <div class="w-full flex flex-wrap mt-10 mb-14 mt-5 md:mt-10 md:mb-0 justify-center">
          <div class="w-full flex justify-center grid grid-cols-3">
            <div class="justify-center flex items-center px-3 py-5 text-center bg-primary dark:bg-primary-dark">
              <p class="text-sm md:text-base uppercase text-white dark:text-secondary-dark-text">
                Brand awareness
              </p>
            </div>
            <div class="justify-center flex items-center px-3 py-5 text-center bg-accent dark:bg-accent-dark">
              <p class="text-sm md:text-base uppercase text-white dark:text-secondary-dark-text">
                User adoption
              </p>
            </div>
            <div class="justify-center flex items-center px-3 py-5 text-center bg-secondary dark:bg-secondary-dark">
              <p class="text-sm md:text-base uppercase text-white dark:text-secondary-dark-text">
                Build relationships
              </p>
            </div>
            <div class="justify-center flex items-center px-3 py-5 text-center bg-secondary dark:bg-secondary-dark">
              <p class="text-sm md:text-base uppercase text-white dark:text-secondary-dark-text">
                User insights
              </p>
            </div>
            <div class="justify-center flex items-center px-3 py-5 text-center bg-primary dark:bg-primary-dark">
              <p class="text-sm md:text-base uppercase text-white dark:text-secondary-dark-text">
                Find ambassadors
              </p>
            </div>
            <div class="justify-center flex items-center px-3 py-5 text-center bg-accent dark:bg-accent-dark">
              <p class="text-sm md:text-base uppercase text-white dark:text-secondary-dark-text">
                Lead generation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-secondary dark:bg-secondary-dark">
      <section id="sponsor" class="d-container py-4 md:py-10">
        <div class="md:px-32 px-0 flex flex-wrap justify-center md:justify-between items-center">
          <div class="flex flex-col">
            <shared-title :underlined="false">
              Sponsor ElixirConfAfr
            </shared-title>
            <p class="text-white dark:text-secondary-dark-text">
              Promote, engage, sell, hire etc. Take a look at our <a class="text-primary dark:text-primary-dark" href="/docs/ElixirConf_Africa_Prospectus.pdf" target="_blank" rel="noopener noreferrer">Sponsorship prospectus</a>
            </p>
          </div>
          <a class="btn-accent my-5 md:mt-0" href="mailto:jambo@elixirconf.africa">Become A Sponsor</a>
        </div>
      </section>
    </div>
    <div class="d-container">
      <home-sponsors />
    </div>
  </div>
</template>
