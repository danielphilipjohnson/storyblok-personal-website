<template>
  <button
    v-show="showButton"
    type="button"
    class="px-3 py-1 mb-6 text-sm font-bold border bg-highlight"
    @click="$emit('customClick')"
  >
    Read More
  </button>
</template>

<script>
export default {

  props: {
    showButton: {
      type: Boolean,
    },
  },
};
</script>