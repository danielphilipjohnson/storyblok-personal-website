<template>
  <div>
    <div
      v-for="p in filteredContent"
      :key="p._uid"
      class="mb-4 leading-loose"
    >
      <storyblokRichText :text="p.text" />
    </div>

    <read-more-button :showButton="showButton" @customClick="readMore" />
  </div>
</template>

<script>


import {useReadMore} from "../../composables/useReadMore.js";

export default {
  props: {
    paragraphs: {
      type: Array,
    },
  },
  setup(context) {
    const { paragraphs } = context;
    const { readMore, filteredContent, showButton } =  useReadMore(paragraphs, 1);

    return { readMore, filteredContent, showButton };
  },
};
</script>