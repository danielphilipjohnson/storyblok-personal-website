<template>
  <section class="max-w-4xl mx-auto">
    <h2 class="text-2xl font-extrabold text-purple skill-heading">
      {{ blok.Heading }}
    </h2>
    <div class="grid grid-cols-1 gap-4 py-8 md:grid-cols-2">
      <div class="mb-4 md:mb-2" v-for="skill in blok.Skills" :key="skill._uid">
        <base-service
          :heading="skill.Heading"
          :text="skill.Text"
          :iconName="skill.Icon"
        />
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
