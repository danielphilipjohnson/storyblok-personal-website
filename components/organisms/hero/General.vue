<template>
  <section id="work">
    <div class="image-banner">
      <div class="card-head-bg">
        <NuxtImg
          class="w-full"
          provider="storyblok"
          :src="blok.Background_Image.filename"
          :alt="blok.Background_Image.alt"
        />
      </div>
      <div class="mx-auto px-8 max-w-6xl mb-4">
        <span
          class="profile-card-image border-4 border-white  rounded-full relative z-10 text-4xl bg-white py-4 px-5 bottom-8"
          role="img"
          aria-label="project icon"
          >🖥️</span
        >
      </div>
    </div>
    <div class="px-8 max-w-6xl mx-auto mb-8">
      <h1 class="text-dark font-bold text-5xl pb-4 mb-4 capitalize border-b border-grey">
        {{ blok.heading }}
      </h1>
      <div
        class="mb-8 flex items-center bg-badge p-3 rounded border border-grey"
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