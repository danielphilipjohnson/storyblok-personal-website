
<template>
  <component
    :is="tag"
    :class="classes[tag]"
  >
  <span role="img" aria-label="green heart"> {{ emoji}} </span>
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
    emoji: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      classes: {
        h1: 'text-3xl font-bold mb-2 pb-2 border-b border-grey',
        h2: 'text-2xl font-bold mb-2 pb-2 border-b border-grey',
        h3: 'text-xl font-bold mb-2 pb-4 border-b border-grey',
        h4: 'text-xl font-bold mb-2 pb-2 border-b border-grey',
        h5: 'text-xl font-bold mb-2 pb-2 border-b border-grey',
        h6: 'text-xl font-bold mb-2 pb-2 border-b border-grey',
      },
    }
  },
}
</script>