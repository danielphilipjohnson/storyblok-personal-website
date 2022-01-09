<template>
  <span :class="'px-2 py-1 mr-1 text-xs text-white rounded ' + classes">{{
    text
  }}</span>
</template>
<script>
export default {
  setup() {},
  props: {
    text: {
      type: String,
      required: true,
    },
    classes: {
      type: String,
      default: "bg-secondary",
    },
  },
};
</script>