<template>
  <div
    class="transition duration-300 border rounded border-grey hover:shadow-md hover:opacity-90"
  >
    <a
      class="block"
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <figure
        class="relative flex flex-col justify-between shadow-sm border-gray"
      >
  
        <nuxt-picture
          v-if="image"
          class="relative flex flex-col justify-between"
          provider="storyblok"
          format="avif"
          loading="lazy"
          :src="image"
        />
      </figure>
    </a>

    <figcaption class="flex flex-col px-4 pt-3 md:pt-4">
      <h2
        class="flex flex-wrap items-center pb-3 text-xl font-bold break-all lg:text-3xl md:pb-2"
      >
        {{ title }}
      </h2>
      <p class="pb-4 text-sm text-gray-600 dark:text-gray-100">
        {{ description }}
      </p>
    </figcaption>
  </div>
</template>

<script>
export default {
  props: {
    link: { type: String },
    image: { type: String },
    title: { type: String },
    description: { type: String },
  },
};
</script>