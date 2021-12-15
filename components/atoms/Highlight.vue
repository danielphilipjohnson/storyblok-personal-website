<template>
  <div class="mb-8 flex items-center bg-badge p-3 rounded border border-grey">
    <p class="text-sm leading-7">
      <span class="mr-4">{{ emoji }}</span>
      {{ content }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    emoji: {
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