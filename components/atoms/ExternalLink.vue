<template>
  <a
    class="hover:text-blue-600 text-gray-500"
    target="_blank"
    rel="noopener noreferrer"
    :href="link"
    :alt="alt"
  >
    {{ content }}
    <slot></slot>
  </a>
</template>

<script>
// get generic link
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
}
</script>