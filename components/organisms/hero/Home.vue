<template>
  <section id="hero" class="relative bg-black">
    <NuxtImg
      class="img-bg h-banner"
      height="590"
      provider="storyblok"
      format="webp"
      quality="80"
      :src="blok.background"
      alt=""
      role="presentation"
    />
    <div class="absolute inset-0 flex flex-col justify-center px-8">
      <h1
        class="mb-4 text-4xl font-bold text-center text-white lg:text-6xl xl:text-7xl lg:mb-6"
      >
        {{ blok.first_name }}
        <span id="secondary" class="text-secondary">
          {{ blok.middle_name }}
        </span>
        <span> {{ blok.last_name }}</span>
      </h1>

      <div id="icons" class="icons">
        <h2
          class="max-w-4xl px-8 mx-auto mb-8 text-lg text-center text-white md:px-0 md:text-2xl"
        >
          {{ blok.subheading }}
        </h2>
        <div id="social-icons" class="flex justify-center pb-8 text-white">
          <div
            class="flex justify-center mr-4 text-white space-between"
            v-for="link in blok.social_links"
            :key="link._uid"
          >
            <div class="w-10 transition-colors duration-500 lg:w-14 hover:text-green-300">
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
  </section>
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
