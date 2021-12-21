<template>
  <ul class="flex flex-wrap">
    <li v-for="badge in badges" :key="badge">
      <p
        v-if="badge.toLowerCase() == 'php'"
        class="bg-tools-php text-xs text-white rounded px-2 py-1 mr-1"
      >
        {{ badge }}
      </p>

      <p
        v-else-if="badge.toLowerCase() == 'wordpress'"
        class="bg-tools-wordpress text-xs text-white rounded px-2 py-1 mr-1"
      >
        {{ badge }}
      </p>
      <p
        v-else-if="badge.toLowerCase() == 'tailwind'"
        class="bg-tools-tailwind text-xs text-white rounded px-2 py-1 mr-1"
      >
        {{ badge }}
      </p>

      <p
        v-else-if="badge.toLowerCase() == 'javascript'"
        class="bg-tools-javascript text-xs text-white rounded px-2 py-1 mr-1"
      >
        {{ badge }}
      </p>

      <p
        v-else-if="badge.toLowerCase() == 'docker'"
        class="bg-tools-docker text-xs text-white rounded px-2 py-1 mr-1"
      >
        {{ badge }}
      </p>

      <p
        v-else-if="badge.toLowerCase() == 'nuxt'"
        class="bg-tools-nuxt text-xs text-white rounded px-2 py-1 mr-1"
      >
        {{ badge }}
      </p>

      <p
        v-else-if="badge.toLowerCase() == 'prismic'"
        class="bg-tools-prismic text-xs text-white rounded px-2 py-1 mr-1"
      >
        {{ badge }}
      </p>

      <p
        v-else-if="badge.toLowerCase() == 'netlify'"
        class="bg-tools-netlify text-xs text-white rounded px-2 py-1 mr-1"
      >
        {{ badge }}
      </p>

      <p
        v-else-if="badge.toLowerCase() == 'typescript'"
        class="bg-tools-typescript text-xs text-white rounded px-2 py-1 mr-1"
      >
        {{ badge }}
      </p>

      <p
        v-else-if="badge.toLowerCase() == 'mailchimp'"
        class="bg-tools-mailchimp text-xs text-white rounded px-2 py-1 mr-1"
      >
        {{ badge }}
      </p>

      <p
        v-else-if="badge.toLowerCase() == 'aws'"
        class="bg-tools-aws text-xs text-white rounded px-2 py-1 mr-1"
      >
        {{ badge }}
      </p>

      <p
        v-else-if="badge.toLowerCase() == 'vue'"
        class="bg-tools-vue text-xs text-white rounded px-2 py-1 mr-1"
      >
        {{ badge }}
      </p>

      <p
        v-else-if="badge.toLowerCase() == 'vuex'"
        class="bg-tools-vuex text-xs text-white rounded px-2 py-1 mr-1"
      >
        {{ badge }}
      </p>

      <p
        v-else-if="badge.toLowerCase() == 'bootstrap'"
        class="bg-tools-bootstrap text-xs text-white rounded px-2 py-1 mr-1"
      >
        {{ badge }}
      </p>

      <p
        v-else-if="badge.toLowerCase() == 'algolia'"
        class="bg-tools-algolia text-xs text-white rounded px-2 py-1 mr-1"
      >
        {{ badge }}
      </p>

      <p
        v-else-if="badge.toLowerCase() == 'firebase'"
        class="bg-tools-firebase text-xs text-white rounded px-2 py-1 mr-1"
      >
        {{ badge }}
      </p>

      <p
        v-else-if="badge.toLowerCase() == 'html'"
        class="bg-tools-html text-xs text-white rounded px-2 py-1 mr-1"
      >
        {{ badge }}
      </p>

      <p
        v-else-if="badge.toLowerCase() == 'css'"
        class="bg-tools-css text-xs text-white rounded px-2 py-1 mr-1"
      >
        {{ badge }}
      </p>
      <p
        v-else-if="badge.toLowerCase() == 'sass'"
        class="bg-tools-sass text-xs text-white rounded px-2 py-1 mr-1"
      >
        {{ badge }}
      </p>

      <p v-else class="bg-secondary text-xs text-white rounded px-2 py-1 mr-1">
        {{ badge }}
      </p>
    </li>
  </ul>
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
