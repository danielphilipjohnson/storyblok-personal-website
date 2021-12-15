<template>
    <NuxtLink
    v-if="type === 'primary'"
      class="
        border border-white
        text-white
        mr-4
        py-2
        px-3
        bg-primary
        text-sm
        font-bold
        hover:opacity-75
      "
      :to="link"
    >
      {{ text }}
    </NuxtLink>

    <NuxtLink
     v-else-if="type === 'secondary'"
      class="
        border border-white
        text-white
        py-2
        px-4
        bg-primary-dark
        text-sm
        font-bold
        hover:opacity-75
      "
      :to="link"
    >
      {{ text }}
    </NuxtLink>


    <NuxtLink
    v-else
      class="
        border border-white
        text-white
        py-2
        px-4
        text-sm
        font-bold
        hover:opacity-75
      "
      :to="link"
    >
      {{ text }}
    </NuxtLink>
 
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
};
</script>