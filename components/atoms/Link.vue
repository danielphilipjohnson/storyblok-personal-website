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

<style>
.nav-links .nuxt-link-exact-active {
  @apply px-2 py-1;
  background: rgba(55, 53, 47, 0.1);
  border-radius: 5px;
}
</style>