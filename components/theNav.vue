<template>
  <nav
    class="sticky top-0 z-50 px-4 py-3 text-black bg-white border-b border-grey nav dark:bg-black dark:text-white"
  >
    <div class="container flex items-center justify-between mx-auto">
      <ul class="flex justify-between">
        <li>
          <nuxt-link class="block" to="/" aria-label="home">
            <img width="16" height="16" class="w-12 h-12" src="~/assets/icon/icon.png" alt="DPJ" role="presentation" />
          </nuxt-link>
        </li>
      </ul>
      <ul class="flex justify-between nav-links">
        <li class="px-2 py-1 text-sm transition-colors duration-500">
          <span role="img" aria-label="dark mode">🌕</span>
        </li>

        <li
          class="hidden px-2 py-1 text-sm transition-colors duration-500 md:block"
        >
          <nuxt-link class="font-extrabold hover:opacity-60" to="/about"
            >About</nuxt-link
          >
        </li>
        <li class="px-2 py-1 text-sm transition-colors duration-500">
          <nuxt-link class="font-extrabold hover:opacity-60" to="/blog"
            >Blog</nuxt-link
          >
        </li>
        <li class="px-2 py-1 text-sm transition-colors duration-500">
          <nuxt-link class="font-extrabold hover:opacity-60" to="/projects">
            Projects
          </nuxt-link>
        </li>
        <li class="px-2 py-1 text-sm transition-colors duration-500">
          <nuxt-link class="font-extrabold hover:opacity-60" to="/contact">
            Contact
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
