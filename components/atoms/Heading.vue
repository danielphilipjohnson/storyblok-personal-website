<template>
  <component :is="tag" :class="classes[tag]">
    {{ content }}
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      classes: {
        h1: "text-3xl md:text-4xl font-bold pb-2 mb-3 border-b border-grey",
        h2: "mr-8 uppercase text-sm font-bold text-light-gray mb-2",
        h3: "mr-8 uppercase text-sm font-bold text-light-gray mb-2",
        h4: "mr-8 uppercase text-sm font-bold text-light-gray mb-2",
        h5: "mr-8 uppercase text-sm font-bold text-light-gray mb-2",
        h6: "mr-8 uppercase text-sm font-bold text-light-gray mb-2",
      },
    };
  },
};
</script>