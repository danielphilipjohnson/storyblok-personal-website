<template>
  <ul class="flex items-center">
    <li class="mb-2 mr-4" v-for="link in links" :key="link.link">
      <!-- <External-Link
        class="text-white"
        link="https://dev.to/danielphilipjohnson"
      >
        <BaseIcon
          icon="github"
          :link="'/github'"
          accessible_text="link.accessible_text"
        />
      </External-Link> -->

      <BaseIcon
        :icon="link.icon"
        :link="link.link"
        :accessible_text="link.alt"
      />
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