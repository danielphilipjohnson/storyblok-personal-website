<template>
  <section id="education" class="px-8 max-w-4xl mx-auto">
    <h2 class="text-2xl font-extrabold text-purple skill-heading">
      {{ blok.Heading }}
    </h2>
    <ul class="work-experience">
      <li class="job-current" v-for="education in blok.Education">
        <div class="flex items-center mb-3">
          <div class="border-2 border-highlight">
            <picture>
              <img
                layout="fixed"
                width="72"
                height="72"
                :src="education.School_Logo.filename"
                :alt="education.School_Logo.alt"
                style="object-fit: cover; opacity: 1"
            /></picture>
          </div>
          <header class="ml-4 leading-normal">
            <h3 class="text-lg font-extrabold">
              {{ education.Heading }}
            </h3>
            <h4 class="font-bold">
              <a
                class="text-purple"
                href="https://www.plymouth.ac.uk/courses/undergraduate/bsc-psychology"
                target="_blank"
                rel="noopener noreferrer"
                >{{ education.school }}</a
              >
            </h4>

            <h5 class="font-italic"></h5>
          </header>
        </div>

        <ul class="job-description mb-4">
          <div v-for="p in education.Paragraphs" :key="p._uid">
            <storyblokRichText :text="p.text" />
          </div>
        </ul>
      </li>
    </ul>
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
.svg-inline--fa.fa-w-20 {
  width: 1.25em;
}
</style>