<template>
  <nuxt-link :to="link">
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
    }
  },
}
</script>

<style>

.nuxt-link-exact-active {
  @apply border-b-2;
  @apply pb-1;
}
</style>