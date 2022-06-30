<template>
  <base-blockquote class="rich-text">
    <RichTextRenderer :document="text" />
  </base-blockquote>
</template>
 
<script>
export default {
  props: {
    text: {
      type: [String, Object],
      default: "",
    },
  },
  computed: {
    richtext() {
      return typeof this.text === "string"
        ? this.text
        : this.$storyapi.richTextResolver.render(this.text);
    },
  },
};
</script>