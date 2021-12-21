<template>
    <blockquote class="leading-loose mb-3 blockquote">
        {{ text }}
         <slot></slot>
    </blockquote>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>
<style scoped>
.blockquote {
    border-left: 3px solid #3a3c55;
    padding-left: 1.25rem
}
</style>