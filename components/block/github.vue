<template>
  <section class="px-8 max-w-4xl mx-auto mb-16">
    <h2 class="text-2xl font-bold text-purple skill-heading mb-4">
      {{ blok.heading }}
    </h2>

    <div class="grid lg:grid-cols-2 gap-4 justify-between pb-4">
      <div v-for="repo in blok.repositories" :key="repo._uid">
        <base-github
          :title="repo.title"
          :introduction="repo.introduction"
          :link="repo.link.url"
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

<style scoped>
.skill-heading {
        border-bottom: 1px solid #e4e4e4;
    padding: 1rem 0;
}
</style>