<template>
  <div class="flex flex-wrap">
    <template v-for="logo in badges">
      <div
        class="mb-2 text-white"
        v-if="logo.Text.toLowerCase() == 'php'"
        :key="logo._uid"
      >
        <Badge
          :classes="'bg-tools-' + logo.Text.toLowerCase()"
          :text="logo.Text"
        />
      </div>
      <div
        class="mb-2 text-white"
        v-else-if="logo.Text.toLowerCase() == 'wordpress'"
        :key="logo._uid"
      >
        <Badge
          :classes="'bg-tools-' + logo.Text.toLowerCase()"
          :text="logo.Text"
        />
      </div>
      <div
        class="mb-2 text-white"
        v-else-if="logo.Text.toLowerCase() == 'tailwind'"
        :key="logo._uid"
      >
        <Badge
          :classes="'bg-tools-' + logo.Text.toLowerCase()"
          :text="logo.Text"
        />
      </div>
      <div
        class="mb-2 text-white"
        v-else-if="logo.Text.toLowerCase() == 'javascript'"
        :key="logo._uid"
      >
        <Badge
          :classes="'bg-tools-' + logo.Text.toLowerCase()"
          :text="logo.Text"
        />
      </div>
      <div
        class="mb-2 text-white"
        v-else-if="logo.Text.toLowerCase() == 'docker'"
        :key="logo._uid"
      >
        <Badge
          :classes="'bg-tools-' + logo.Text.toLowerCase()"
          :text="logo.Text"
        />
      </div>
      <div
        class="mb-2 text-white"
        v-else-if="logo.Text.toLowerCase() == 'nuxt'"
        :key="logo._uid"
      >
        <Badge
          :classes="'bg-tools-' + logo.Text.toLowerCase()"
          :text="logo.Text"
        />
      </div>
      <div
        class="mb-2 text-white"
        v-else-if="logo.Text.toLowerCase() == 'prismic'"
        :key="logo._uid"
      >
        <Badge
          :classes="'bg-tools-' + logo.Text.toLowerCase()"
          :text="logo.Text"
        />
      </div>
      <div
        class="mb-2 text-white"
        v-else-if="logo.Text.toLowerCase() == 'netlify'"
        :key="logo._uid"
      >
        <Badge
          :classes="'bg-tools-' + logo.Text.toLowerCase()"
          :text="logo.Text"
        />
      </div>
      <div
        class="mb-2 text-white"
        v-else-if="logo.Text.toLowerCase() == 'typescript'"
        :key="logo._uid"
      >
        <Badge
          :classes="'bg-tools-' + logo.Text.toLowerCase()"
          :text="logo.Text"
        />
      </div>
      <div
        class="mb-2 text-black"
        v-else-if="logo.Text.toLowerCase() == 'mailchimp'"
        :key="logo._uid"
      >
        <Badge
          :classes="'bg-tools-' + logo.Text.toLowerCase()"
          :text="logo.Text"
        />
      </div>
      <div
        class="mb-2 text-black"
        v-else-if="logo.Text.toLowerCase() == 'aws'"
        :key="logo._uid"
      >
        <Badge
          :classes="'bg-tools-' + logo.Text.toLowerCase()"
          :text="logo.Text"
        />
      </div>
      <div
        class="mb-2 text-black"
        v-else-if="logo.Text.toLowerCase() == 'vue'"
        :key="logo._uid"
      >
        <Badge
          :classes="'bg-tools-' + logo.Text.toLowerCase()"
          :text="logo.Text"
        />
      </div>
      <div
        class="mb-2 text-white"
        v-else-if="logo.Text.toLowerCase() == 'vuex'"
        :key="logo._uid"
      >
        <Badge
          :classes="'bg-tools-' + logo.Text.toLowerCase()"
          :text="logo.Text"
        />
      </div>
      <div
        class="mb-2 text-white"
        v-else-if="logo.Text.toLowerCase() == 'bootstrap'"
        :key="logo._uid"
      >
        <Badge
          :classes="'bg-tools-' + logo.Text.toLowerCase()"
          :text="logo.Text"
        />
      </div>
      <div
        class="mb-2 text-white"
        v-else-if="logo.Text.toLowerCase() == 'algolia'"
        :key="logo._uid"
      >
        <Badge
          :classes="'bg-tools-' + logo.Text.toLowerCase()"
          :text="logo.Text"
        />
      </div>
      <div
        class="mb-2 text-black"
        v-else-if="logo.Text.toLowerCase() == 'firebase'"
        :key="logo._uid"
      >
        <Badge
          :classes="'bg-tools-' + logo.Text.toLowerCase()"
          :text="logo.Text"
        />
      </div>
      <div
        class="mb-2 text-white"
        v-else-if="logo.Text.toLowerCase() == 'html'"
        :key="logo._uid"
      >
        <Badge
          :classes="'bg-tools-' + logo.Text.toLowerCase()"
          :text="logo.Text"
        />
      </div>
      <div
        class="mb-2 text-white"
        v-else-if="logo.Text.toLowerCase() == 'css'"
        :key="logo._uid"
      >
        <Badge
          :classes="'bg-tools-' + logo.Text.toLowerCase()"
          :text="logo.Text"
        />
      </div>
      <div
        class="mb-2 text-white"
        v-else-if="logo.Text.toLowerCase() == 'sass'"
        :key="logo._uid"
      >
        <Badge
          :classes="'bg-tools-' + logo.Text.toLowerCase()"
          :text="logo.Text"
        />
      </div>
      <div class="mb-2 text-white" v-else :key="logo._uid">
        <Badge :classes="'bg-secondary'" :text="logo.Text" />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    badges: {
      type: Array,
      required: true,
    },
  },
};
</script>
