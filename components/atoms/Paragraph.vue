<template>
  <p class="pb-2 leading-7">
    {{ content }}
  </p>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
  },
}
</script>