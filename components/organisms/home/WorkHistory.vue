<template>
  <section class="max-w-4xl px-8 mx-auto md:px-0">
    <h2 class="text-2xl font-bold text-purple skill-heading">
      {{ blok.heading }}
    </h2>

    <ul v-for="job in blok.jobs" :key="job._uid">
      <li class="pb-4 mb-3 border-highlight">
        <div class="flex items-center mb-3">
          <NuxtImg
            class="border-2 border-highlight"
            width="72"
            height="72"
            provider="storyblok"
            :src="job.logo.filename"
            :alt="job.logo.alt"
          />
          <header class="ml-4 leading-normal">
            <h3 class="text-lg font-extrabold">
              {{ job.position }}
            </h3>
            <h4 class="font-bold">
              <a
                class="text-purple"
                href="https://hiyield.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ job.company }}
              </a>
            </h4>
            <h5 class="font-italic">
              {{ job.date }}
            </h5>
          </header>
        </div>
        
        <base-blockquote class="italic" :text="job.excerpt"/> 

        <div v-for="p in job.Paragraph" :key="p._uid">
          <storyblokRichText :text="p.text" />
        </div>       
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
.skill-heading {
  /* font-weight: 600; */
  margin-bottom: 1rem;
  border-bottom: 1px solid #e4e4e4;
  padding: 1rem 0;
}
</style>