<template>
  <div class="h-banner">
    <NuxtImg
      class="img-bg h-banner"
      height="590"
      provider="storyblok"
      :src="blok.background"
    />
    <div class="absolute inset-0 py-48 px-8">
      <h1 class="text-white text-4xl lg:text-5xl font-bold mb-4 text-center">
        {{ blok.first_name }}
        <span id="secondary" class="text-secondary">
          {{ blok.middle_name }}
        </span>
        <span> {{ blok.last_name }}</span>
      </h1>

      <div id="icons" class="icons">
        <h2 class="text-center text-white text-2xl mb-8">
          {{ blok.subheading }}
        </h2>
        <div id="social-icons" class="flex justify-center text-white pb-8">
          <div
            class="flex justify-center space-between text-white pb-8 mr-4"
            v-for="link in blok.social_links"
            :key="link._uid"
          >
            <BaseIcon
              :icon="link.icon[0]"
              :link="link.link.url"
              :accessible_text="link.accessible_text"
            />
          </div>
        </div>

        <div class="flex justify-center">
          <div v-for="button in blok.buttons" :key="button._uid">
            <BaseButton
              :type="button.type"
              :link="button.link"
              :text="button.text"
            />
          </div>
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