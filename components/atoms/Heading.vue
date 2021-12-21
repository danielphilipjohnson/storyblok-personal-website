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
        h2: "text-3xl md:text-4xl mr-8 uppercase text-sm font-bold text-light-gray mb-2",
        h3: "text-2xl md:text-3xl mr-8 uppercase text-sm font-bold text-light-gray mb-2",
        h4: "text-xl md:text-2xl mr-8 uppercase text-sm font-bold text-light-gray mb-2",
        h5: "mr-8 uppercase text-sm font-bold text-light-gray mb-2",
        h6: "mr-8 uppercase text-sm font-bold text-light-gray mb-2",
      },
    };
  },
};
</script>