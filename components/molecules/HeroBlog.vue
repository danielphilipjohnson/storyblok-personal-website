<template>
  <div
    class="
      w-full
      px-8
      lg:px-32
      xl:px-48
      py-16
      md:py-32 md:mb-4
      bg-black
      relative
    "
  >
    <div class="mx-auto relative z-10">
      <ul class="flex text-white text-sm lg:text-base py-8">
        <li class="inline-flex items-center">
          <a href="/">
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
          </a>
          <span class="ml-4 mr-5">/</span>
        </li>
      </ul>
    </div>
    <div
      class="
        section-heading
        w-full
        absolute
        object-cover
        inset-0
        flex flex-col
        items-start
      "
    >
      <NuxtImg
        class="absolute inset-0 w-full h-full object-cover"
        :src="blok.Background.filename"
        provider="storyblok"
      />
    </div>

    <div class="py-8">
      <div class="w-full text-white group relative">
        <div class="md:mb-4">
          <header>
            <h1
              class="
                text-2xl
                md:text-4xl
                lg:text-6xl
                font-semibold
                mb-2
                md:mb-6
                font-wotfard
              "
            >
              {{ blok.Heading }}
            </h1>
          </header>
          <p>{{ blok.Subheading }}</p>
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