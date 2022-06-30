<template>
  <main id="blog" class="blog">
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component"
    />
    <div class="container px-8 py-4 mx-auto">
      <section>
        <header class="text-2xl font-bold">
          <h2
            class="pb-4 mb-4 text-5xl font-bold capitalize border-b text-dark border-grey"
          >
            Latest
          </h2>
        </header>

        <div
          class="w-full p-3 mb-6 border rounded bg-badge border-grey md:mb-8"
        >
          <div class="text-sm leading-7">
            <span class="font-bold">
              ⚡ Here are my current collection of blogs
            </span>
            <div>
              <p>On this page, you will see a list of my blogs.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <article class="w-full pb-8" v-for="blog in blogs" :key="blog.uuid">
          <div
            class="transition duration-300 border rounded border-grey hover:shadow-md hover:opacity-90"
          >
            <NuxtLink :to="'/' + blog.full_slug">
              <figure
                class="relative flex flex-col justify-between h-full shadow-sm border-gray"
              >
                <nuxt-picture
                  v-if="blog.content.cover_image"
                  class="relative flex flex-col justify-between h-full"
                  provider="storyblok"
                  format="avif"
                  height="640"
                  width="1138"
                  loading="lazy"
                  :alt="blog.content.title"
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
              <div class="flex items-center py-4">
                <template v-if="blog.tag_list">
                  <Badges :badges="blog.tag_list" />
                </template>
                <NuxtLink
                  class="p-1 px-2 mt-auto ml-auto text-xs font-medium leading-tight text-white uppercase duration-300 rounded cursor-pointer bg-gradient-to-r from-blue-700 to-blue-800 transition-cursor"
                  :to="'/' + blog.full_slug"
                >
                  Read full article
                  <span class="sr-only">
                    {{ blog.content.title }}
                  </span>
                </NuxtLink>
              </div>
            </figcaption>
          </div>
        </article>
      </section>
    </div>
  </main>
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
