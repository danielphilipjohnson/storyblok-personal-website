<template>
  <div class="px-8 py-4 mx-auto lg:px-32 xl:px-48">
    <component :is="blok.tag" :class="classes[blok.tag]">
      {{ blok.content }}
    </component>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      classes: {
        h1: "text-3xl md:text-4xl font-bold pb-2 mb-3 border-b border-grey",
        h2: "text-3xl md:text-4xl  text-sm font-bold mb-2",
        h3: "text-2xl md:text-3xl  text-sm font-bold mb-2",
        h4: "text-xl md:text-2xl  text-sm font-bold  mb-2",
        h5: "text-sm font-bold mb-2",
        h6: "text-sm font-bold mb-2",
      },
    };
  },
};
</script>