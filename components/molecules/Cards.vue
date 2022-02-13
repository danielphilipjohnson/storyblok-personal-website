<template>
  <div class="px-8 py-4 mx-auto lg:px-32 xl:px-48">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div
        class="w-full pb-8 lg:pr-8"
        v-for="card in blok.card"
        :key="card.uuid"
      >
        <div
          class="
            transition
            duration-300
            border
            rounded
            border-grey
            hover:shadow-md hover:opacity-90
          "
        >
          <Card
            :link="card.link.url"
            :image="card.image.filename"
            :title="card.title"
            :description="card.description"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>