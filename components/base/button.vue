<template>
  <NuxtLink
    v-if="type === 'primary'"
    class="px-3 py-2 mr-4 text-sm font-bold text-white border border-white bg-primary hover:opacity-75"
    :to="link"
  >
    {{ text }}
  </NuxtLink>

  <NuxtLink
    v-else-if="type === 'secondary'"
    class="px-4 py-2 text-sm font-bold text-white border border-white bg-primary-dark hover:opacity-75"
    :to="link"
  >
    {{ text }}
  </NuxtLink>

  <NuxtLink
    v-else
    class="px-4 py-2 text-sm font-bold text-white border border-white hover:opacity-75"
    :to="link"
  >
    {{ text }}
  </NuxtLink>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
};
</script>
