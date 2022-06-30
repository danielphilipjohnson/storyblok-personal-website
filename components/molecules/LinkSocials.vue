<template>
  <ul class="flex items-center">
    <li class="mb-2 mr-4 " v-for="link in links" :key="link.link">
      <div class="w-6 transition-colors duration-500 hover:text-green-400">
        <BaseIcon
          :icon="link.icon"
          :link="link.link"
          :accessible_text="link.alt"
        />
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
};
</script>