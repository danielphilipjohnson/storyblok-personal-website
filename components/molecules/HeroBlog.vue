<template>
  <div
    class="relative w-full px-8 py-16 bg-black lg:px-32 xl:px-48 md:py-32 md:mb-4"
  >
    <div class="relative z-10 mx-auto">
      <ul class="flex py-8 text-sm text-white">
        <li class="inline-flex items-center">
          <nuxt-link class="block" to="/" aria-label="home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-house"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
              ></path>
              <path
                fill-rule="evenodd"
                d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
              ></path>
            </svg>
          </nuxt-link>
          <span class="ml-4">/</span>
          <span class="ml-4 ">Blog</span>
        </li>
      </ul>
    </div>
    <div
      class="absolute inset-0 flex flex-col items-start object-cover w-full section-heading"
    >
      <NuxtImg
        class="absolute inset-0 object-cover w-full h-full"
        :src="blok.Background.filename"
        provider="storyblok"
        role="presentation"
        alt=""
      />
    </div>

    <div class="py-8">
      <div class="relative w-full text-white group">
        <div class="md:mb-4">
          <header>
            <h1
              class="mb-2 text-3xl font-semibold md:text-4xl lg:text-6xl md:mb-6 font-wotfard"
            >
              {{ blok.Heading }}
            </h1>
          </header>
          <p class="text-xl">{{ blok.Subheading }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.banner,
.section-heading {
  background-color: #000;
  filter: brightness(0.27);
  position: absolute !important;
  width: 100% !important;
}
</style>