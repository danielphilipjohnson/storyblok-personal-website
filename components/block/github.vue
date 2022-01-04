<template>
  <section class="max-w-4xl mx-auto">
    <h2 class="mb-4 text-2xl font-bold text-purple skill-heading">
      {{ blok.heading }}
    </h2>

    <div class="grid justify-between gap-4 pb-4 lg:grid-cols-2">
      <div class="contents" v-for="repo in blok.repositories" :key="repo._uid">
        <base-github
          :title="repo.title"
          :introduction="repo.introduction"
          :link="repo.link.url"
          :path="repo.path"
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