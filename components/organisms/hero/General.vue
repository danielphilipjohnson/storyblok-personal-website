<template>
  <section id="work">
    <div class="image-banner">
      <div class="card-head-bg">
        <NuxtImg
          class="w-full"
          provider="storyblok"
          :src="blok.Background_Image.filename"
          :alt="blok.Background_Image.alt"
          role="presentation"
        />
      </div>
      <div class="max-w-6xl px-8 mx-auto mb-4">
        <span
          class="relative z-10 px-5 py-4 text-4xl bg-white border-4 border-white rounded-full profile-card-image bottom-8"
          role="img"
          aria-label="project icon"
          >🖥️</span
        >
      </div>
    </div>
    <div class="max-w-6xl px-8 mx-auto mb-8">
      <h1 class="pb-4 mb-4 text-5xl font-bold capitalize border-b text-dark border-grey">
        {{ blok.heading }}
      </h1>
      <div
        class="flex items-center p-3 mb-8 border rounded bg-badge border-grey"
      >
        <div
          class="text-sm leading-7"
          v-for="p in blok.Highlight"
          :key="p._uid"
        >
          <span class="font-bold"> {{ p.Heading }} </span>
          <storyblokRichText :text="p.Text" />
        </div>
      </div>
    </div>
  </section>
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