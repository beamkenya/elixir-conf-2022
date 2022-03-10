<template>
  <nav>
    <div class="d-container py-2 md:py-4">
      <div class="navbar bg-base-100 bg-transparent">
        <div class="navbar-start">
          <div class="dropdown">
            <label class="btn btn-ghost lg:hidden text-primary dark:text-primary-dark">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 text-primary dark:text-primary-dark">
              <nav-links />
            </ul>
          </div>
          <router-link to="/">
            <img class="w-80 md:w-60 -ml-4" src="/images/logo-purple.png" alt="logo">
          </router-link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0 text-primary dark:text-primary-dark">
            <nav-links />
          </ul>
        </div>
        <div class="navbar-end">
          <a class="btn-primary">Buy Ticket</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import NavLinks from './NavLinks'
export default {
  name: 'TopNav',
  components: { NavLinks },
}
</script>

<style scoped>

</style>
