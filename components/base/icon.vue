<template>
  <div v-if="source === 'fa'">
    <font-awesome-icon :icon="icon" />
  </div>

  <IconSocial v-else :icon="icon" :link="link" :accessible_text="accessible_text" />

</template>

<script>
export default {
  props: {
    source: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    accessible_text: {
      type: String,
      required: true,
    },
  },
};
</script>