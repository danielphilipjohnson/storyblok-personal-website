<template>
    <div class="flex space-x-2 mb-4">
      <div class="text-xl">
        <icon-service :icon="iconName" />
      </div>
      <div class="">
        <h3 class="text-dark font-bold mb-2">{{ heading }}</h3>
        <p class=" text-sm">
          {{ text }}
        </p>
      </div>
    </div>
</template>
<script>
export default {
  props: {
    heading: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    iconName: {
      type: String,
      required: true,
    },
  },
};
</script>
