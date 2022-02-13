<template>
  <div>
    <div
      v-for="p in filteredContent"
      :key="p._uid"
      class="leading-loose mb-4"
    >
      <storyblokRichText :text="p.text" />
    </div>
    <button
      v-show="showButton"
      class="border py-1 px-3 bg-highlight text-sm font-bold"
      @click="readMore()"
    >
      Read More
    </button>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
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