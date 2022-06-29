<template>
  <section id="education" class="max-w-4xl px-8 mx-auto md:px-0">
    <h2 class="text-2xl font-extrabold text-purple skill-heading">
      {{ blok.Heading }}
    </h2>
    <ul class="work-experience">
      <li
        class="job-current"
        v-for="education in filteredContent"
        :key="education._uid"
      >
        <div class="flex items-center mb-3">
          <div class="border-2 border-highlight">
            <NuxtImg
              :src="education.School_Logo.filename"
              :alt="education.School_Logo.alt"
              width="72"
              height="72"
              format="webp"
              quality="80"
              provider="storyblok"
              loading="lazy" 
            />
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
                >{{ education.School }}</a
              >
            </h4>
            <h5 class="font-italic">{{ education.Date_Graduated }}</h5>
          </header>
        </div>

        <ul class="mb-4 leading-loose job-description rich-text">
          <li v-for="p in education.Paragraphs" :key="p._uid">
            <storyblokRichText :text="p.text" />
          </li>
        </ul>
      </li>
    </ul>
    <read-more-button :showButton="showButton" @customClick="readMore" />
  </section>
</template>
<script>
import { useReadMore } from "../../../composables/useReadMore.js";
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  setup(context) {
    const { Education } = context.blok;

    const { readMore, filteredContent, showButton } = useReadMore(Education, 1);

    return { readMore, filteredContent, showButton };
  },
};
</script>
