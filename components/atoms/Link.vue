<template>
  <nuxt-link :to="link" class="hover:text-blue-600">
    {{ content }}
    <slot></slot>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
};
</script>
