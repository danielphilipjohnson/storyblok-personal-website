<template>
  <button
    v-show="showButton"
    type="button"
    class="px-3 py-1 text-sm font-bold border bg-highlight"
    @click="customClick"
  >
    Read More
  </button>
</template>

<script>
export default {
  component: {
    name: "ReadMoreButton",
  },
  methods: {
    customClick() {
      this.$emit("customClick");
    },
  },
  props: {
    showButton: {
      type: Boolean,
    },
  },
};
</script>