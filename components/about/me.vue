<template>
  <section class="px-8 max-w-4xl mx-auto">
    <div class="py-8 border-b border-highlight mb-4">
      <header>
        <h2 class="text-3xl">
          {{ blok.heading }}
        </h2>
        <h3 class="pt-2 text-xl">{{ blok.subheading }}</h3>
      </header>
      <div class="w-max bg-badge rounded px-3 py-3 mt-4">
        <span class="mr-2" role="img" aria-label="my resume"> 📝 </span>
        <a :href="blok.resume_link" download> Resume PDF </a>
      </div>
    </div>
    <storyblokRichTextBlockQuote :text="blok.Paragraph" />
    <div class="badge-container">
      <NuxtLink to="/about"
        >
        <div class="w-max bg-badge rounded px-3 py-3 mt-4 font-bold">
          <span role="img" aria-label="go here">👉 </span>
          If you want to know
          about me
        </div>
        </NuxtLink>
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
.border-highlight {
  border-color: #a2a7d646;
}
</style>