<template>
  <div class="h-banner">
    <NuxtImg
      class="img-bg h-banner"
      height="590"
      provider="storyblok"
      :src="blok.background"
    />
    <div class="absolute inset-0 py-48 px-8">
      <h1 class="text-white text-4xl lg:text-6xl xl:text-7xl mb-4 lg:mb-6 font-bold  text-center">
        {{ blok.first_name }}
        <span id="secondary" class="text-secondary">
          {{ blok.middle_name }}
        </span>
        <span> {{ blok.last_name }}</span>
      </h1>

      <div id="icons" class="icons">
        <h2 class="text-center text-white text-lg md:text-2xl mb-8 max-w-4xl mx-auto">
          {{ blok.subheading }}
        </h2>
        <div id="social-icons" class="flex justify-center text-white pb-8">
          <div
            class="flex justify-center space-between text-white mr-4"
            v-for="link in blok.social_links"
            :key="link._uid"
          >
            <div class="w-10 lg:w-14">
              <BaseIcon
                :icon="link.icon[0]"
                :link="link.link.url"
                :accessible_text="link.accessible_text"
              />
            </div>
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