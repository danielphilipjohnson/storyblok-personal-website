<template>
  <section id="blog" class="blog">
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component"
    />
    <div class="mx-auto px-8 lg:px-32 xl:px-48 py-16">
      <div class="text-center font-bold text-2xl">
        <header
          class="pb-6 md:pb-12 flex flex-wrap items-center justify-between"
        >
          <h1 class="text-5xl capitalize">Latest</h1>
        </header>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="w-full lg:pr-8 pb-8" v-for="blog in blogs" :key="blog.uuid">
          <div
            class="border-grey border rounded hover:shadow-md hover:opacity-90 transition duration-300"
          >
            <NuxtLink :to="'/' + blog.full_slug">
              <figure
                class="relative h-full flex flex-col justify-between border-gray shadow-sm"
              >
                <nuxt-picture
                  class="relative h-full flex flex-col justify-between"
                  provider="storyblok"
                  :src="blog.content.cover_image.filename"
                />
              </figure>
            </NuxtLink>

            <figcaption class="px-4 pt-3 md:pt-4 flex flex-col">
              <h2
                class="flex flex-wrap items-center text-2xl lg:text-3xl md:pb-2 pb-1 break-all"
              >
                {{ blog.content.title }}
              </h2>
              <p class="text-sm text-gray-600 dark:text-gray-100">
                {{ blog.content.intro }}
              </p>
              <div class="flex items-center py-4">
                <template v-if="blog.tag_list">
                  <Badges :badges="blog.tag_list" />
                </template>
                <NuxtLink
                  class="mt-auto ml-auto uppercase font-medium text-xs rounded text-white leading-tight px-2 p-1 bg-gradient-to-r from-blue-700 to-blue-800 cursor-pointer transition-cursor duration-300"
                  :to="'/' + blog.full_slug"
                >
                  <p
                    class="
                      
                    "
                  >
                    Read more
                  </p>
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
};
</script>
