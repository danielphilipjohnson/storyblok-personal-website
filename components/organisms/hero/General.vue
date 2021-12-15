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
      <div class="mx-auto px-8 max-w-6xl project">
        <span
          class="profile-card-image profile-emoji mb-2"
          role="img"
          aria-label="project icon"
          >🖥️</span
        >
      </div>
    </div>
    <div class="px-8 max-w-6xl mx-auto mb-8">
      <h1 class="text-purple page-heading lg-heading border-b border-grey">
        {{ blok.heading }}
      </h1>
      <div
        class="mb-8 flex items-center bg-badge p-3 rounded border border-grey"
      >
      <div class="text-sm leading-7" v-for="p in blok.Highlight" :key="p._uid">
          <span class="font-bold"> {{p.Heading}} </span>
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

<style scoped>
.profile-emoji {
    background-color: #fff;
    bottom: -30px;
    font-size: 3rem;
    padding: 1rem 1.25rem;
}
.profile-card-image {
    border: 3px solid #fff;
    border-radius: 50%;
    bottom: 50px;
    height: 75px;
    position: relative;
    width: auto;
    z-index: 2;
}
</style>