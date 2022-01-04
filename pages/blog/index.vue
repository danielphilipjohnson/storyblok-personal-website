<template>
  <section id="blog" class="blog">
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component"
    />
    <div class="px-8 py-16 mx-auto lg:px-32 xl:px-48">
      <div class="text-2xl font-bold text-center">
        <header
          class="flex flex-wrap items-center justify-between pb-6 md:pb-12"
        >
          <h1 class="text-5xl capitalize">Latest</h1>
        </header>
      </div>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div class="w-full pb-8 lg:pr-8" v-for="blog in blogs" :key="blog.uuid">
          <div
            class="transition duration-300 border rounded border-grey hover:shadow-md hover:opacity-90"
          >
            <NuxtLink :to="'/' + blog.full_slug">
              <figure
                class="relative flex flex-col justify-between h-full shadow-sm border-gray"
              >
                <nuxt-picture
                  class="relative flex flex-col justify-between h-full"
                  provider="storyblok"
                  :src="blog.content.cover_image.filename"
                />
              </figure>
            </NuxtLink>

            <figcaption class="flex flex-col px-4 pt-3 md:pt-4">
              <h2
                class="flex flex-wrap items-center pb-3 text-xl font-bold break-all lg:text-3xl md:pb-2"
              >
                {{ blog.content.title }}
              </h2>
              <p class="pb-4 text-sm text-gray-600 dark:text-gray-100">
                {{ blog.content.intro }}
              </p>
              <div class="flex items-center py-4">
                <template v-if="blog.tag_list">
                  <Badges :badges="blog.tag_list" />
                </template>
                <NuxtLink
                  class="p-1 px-2 mt-auto ml-auto text-xs font-medium leading-tight text-white uppercase duration-300 rounded cursor-pointer bg-gradient-to-r from-blue-700 to-blue-800 transition-cursor"
                  :to="'/' + blog.full_slug"
                >
                  Read more
                </NuxtLink>
              </div>
            </figcaption>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { createSEOMeta } from "../../utils/seo";

export default {
  async asyncData(context) {
    const res = await context.app.$storyapi.get("cdn/stories/", {
      starts_with: "blog",
    });
    const blogs = res.data.stories.filter((story) => {
      if (!story.is_startpage) {
        story.content.date = new Date(story.content.date);
        return story;
      }
    });

    const { story } = await context.app.$storyapi
      .get("cdn/stories/blog", {
        version: "draft",
      })
      .then((res) => {
        return res.data;
      })
      .catch((res) => {
        if (!res.response) {
          console.error(res);
          context.error({
            statusCode: 404,
            message: "Failed to receive content form api",
          });
        } else {
          console.error(res.response.data);
          context.error({
            statusCode: res.response.status,
            message: res.response.data,
          });
        }
      });

    return {
      story,
      blogs,
    };
  },
  head() {
    const { title, description } = this.story.content.metadata;
    const seoImage = this.story.content.seoImage;
    const url = this.$config.BASE_URL + this.$route.path;

    return {
      link: [
        {
          rel: "canonical",
          href: url,
        },
      ],
      title,
      meta: createSEOMeta({
        title,
        description,
        image: seoImage.filename,
        url,
      }),
    };
  },

  jsonld() {
    const BASE_URL = this.$config.BASE_URL;
    const FULL_URL = this.$config.BASE_URL + this.$route.path; 

    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: BASE_URL,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Blog",
              item: FULL_URL,
            },
          ],
        },
      ],
    };
  },
};
</script>
