<template>
  <nav>
    <div class="container mx-auto px-2 md:px-12 lg:px-32 py-2 md:py-4">
      <div class="navbar bg-base-100 bg-transparent">
        <div class="navbar-start">
          <div class="dropdown">
            <label class="btn btn-ghost lg:hidden text-primary dark:text-primary-dark">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 text-primary dark:text-primary-dark">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <router-link to="/">
            <img class="w-72 md:w-52" src="/images/logo.png" alt="logo">
          </router-link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0 text-primary dark:text-primary-dark">
            <li><a>Item 3</a></li>
            <li><a>Item 4</a></li>
            <li><a>Item 5</a></li>
          </ul>
        </div>
        <div class="navbar-end">
          <a class="btn btn-primary">Buy Ticket</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TopNav',
}
</script>

<style scoped>

</style>
