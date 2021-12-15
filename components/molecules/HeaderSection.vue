<template>
  <header>
    <Section-Heading :tag="tag" emoji="💚" :content="headingContent" />

    <Paragraph :content="paragraphContent" />
  </header>
</template>

<script>
export default {
  props: {
    headingContent: {
      type: String,
      required: true,
    },
    paragraphContent: {
      type: String,
      required: true,
    },
    emoji: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
  },
};
</script>