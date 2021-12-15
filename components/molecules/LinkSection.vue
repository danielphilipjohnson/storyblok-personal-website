<template>
  <div :class="classes">
    <Heading tag="h2" :content="title" />
    <Link-List :links="links" />
  </div>
</template>

<script>
export default {
  props: {
    classes: {
       type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    links: {
      type: Array,
      required: true,
    },
  },
};
</script>