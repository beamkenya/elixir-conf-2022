<template>
  <div>
    <div class="d-container">
      <shared-banner>Sponsors</shared-banner>
      <div class="mt-4 flex justify-center">
        <shared-title>Why Sponsor ElixirConfAfri</shared-title>
      </div>
      <div class="py-4 md:pb-20 md:px-32 px-0">
        <div>
          <h5 class="title-2-secondary py-3 md:py-5 p-0 md:px-4">
            Attendee Profile
          </h5>
          <div class="flex flex-wrap">
            <p class="w-full md:w-1/3 p-0 md:px-4">
              The event targets students, professional software developers who work in mid to large sized organizations and who develop systems of all sizes for enterprise companies. The event aims to attract attendees across industries such as financial services, media houses, telco’s etc.
              <br> NOTE: We need content here
            </p>
            <img class="w-full md:w-2/3 p-0 md:px-4 my-10 md:0" src="https://droidcon.co.ke/images/NUMBERS.svg" alt="sponsorship">
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
            <p class="text-white">
              Sponsorship benefits here, promote, engage, sell, hire etc
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
