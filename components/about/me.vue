<template>
  <section class="max-w-4xl px-8 mx-auto md:px-0">
    <div class="py-8 mb-4 border-b border-highlight">
      <header>
        <h2 class="text-3xl">
          {{ blok.heading }}
        </h2>
        <h3 class="pt-2 text-xl">{{ blok.subheading }}</h3>
      </header>
      <div
        class="px-3 py-3 mt-4 font-bold transition duration-500 rounded w-max bg-badge hover:shadow-md"
      >
        <span class="mr-2 raise" role="img" aria-label="my resume"> 📝 </span>
        <a
          href="/cv/Daniel_Philip_Johnson.pdf"
          download
          aria-label="This will download my resume which is a pdf"
        >
          Resume PDF
        </a>
      </div>
    </div>
    <storyblokRichTextBlockQuote :text="blok.Paragraph" />
    <div class="pb-3 badge-container">
      <NuxtLink to="/about">
        <div
          class="px-3 py-3 mt-4 mb-2 font-bold transition duration-500 rounded w-max bg-badge hover:shadow-md slide"
        >
          <span role="img" aria-label="go here">👉 </span>
          If you want to know about me
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
