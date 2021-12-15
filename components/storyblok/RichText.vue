<template>
<div class="leading-loose rich-text">
  <RichTextRenderer :document="text" />
</div>
</template>
 
<script>
export default {
  props: {
    text: {
      type: [String, Object],
      default: '',
    },
  },
  computed: {
    richtext() {
      return typeof this.text === 'string'
        ? this.text
        : this.$storyapi.richTextResolver.render(this.text)
    },
  },
}
</script>
<style>
.rich-text span b{
  /* word-wrap: break-word; */
  background-color: #a2a7d646;
  border-radius: 5px;
  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace,Courier;
  margin: 0 .25rem;
  padding: .2rem .4rem;
  white-space: pre-wrap;
}
.rich-text p {
  margin-bottom: .5rem;
}

.rich-text ul {
  color: #292929;
  font-weight: 700;
  margin: 0 0 0 1rem;
  word-break: break-all;
}
</style>