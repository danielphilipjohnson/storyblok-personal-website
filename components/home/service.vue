<template>
  <section class="px-8 max-w-4xl mx-auto mb-8">
    <h2 class="text-2xl font-extrabold text-purple skill-heading">
      {{ blok.Heading }}
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
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
