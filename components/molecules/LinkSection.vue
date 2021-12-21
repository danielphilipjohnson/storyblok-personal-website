<template>
  <div :class="classes">
    <h2 class="mr-8 uppercase text-sm font-bold text-light-gray mb-2">
      {{ title }}
    </h2>
    <Link-List :links="links" />
  </div>
</template>

<script>
export default {
  props: {
    classes: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    links: {
      type: Array,
      required: true,
    },
  },
};
</script>