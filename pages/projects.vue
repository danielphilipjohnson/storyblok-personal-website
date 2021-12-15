<template>
  <section id="work" class="work">
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component"
    />
    <div class="mb-8 max-w-6xl mx-auto px-8 flex flex-wrap items-start">
      <div
        class="w-full lg:w-1/2 lg:pr-8 pb-8"
        v-for="article in articles"
        :key="article._uid"
      >
        <div v-if="article.content.External_Link">
          <a
            :href="article.content.External_Link.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure class="relative h-full flex flex-col justify-between border-gray shadow-sm">
              <nuxt-picture
                class="relative h-full flex flex-col justify-between"
                provider="storyblok"
                :src="article.content.Background_Image.filename"
              />
            </figure>
          </a>
          
          <figcaption class="pt-3 md:pt-4 flex flex-col ">
            <h2
              class="
                flex flex-wrap
                items-center
                text-xl
                md:text-3xl md:pb-2
                pb-1
                break-all
              "
            >
              {{ article.name }}
            </h2>
            <p class="text-sm text-gray-600 dark:text-gray-100">
              {{ article.content.category }}
            </p>
          </figcaption>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { createSEOMeta } from "../utils/seo";
export default {
  async asyncData(context) {
    const res = await context.app.$storyapi.get("cdn/stories/", {
      starts_with: "project",
    });

    const articles = res.data.stories.filter((story) => {
      if (!story.is_startpage) {
        story.content.date = new Date(story.content.date);
        return story;
      }
    });

    const { story } = await context.app.$storyapi
      .get("cdn/stories/projects", {
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
      articles,
      story,
    };
  },

  jsonld() {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          name: "Daniel Philip Johnson",
          "@id":
            "https://www.danielphilipjohnson.com/#/schema/organization/danielphilipjohnson",
          url: "https://www.danielphilipjohnson.com",
          sameAs: [
            "https://www.instagram.com/danielphilipjohnson/",
            "https://www.linkedin.com/in/daniel-philip-johnson/",
            "https://twitter.com/danielp_johnson",
            "https://dev.to/danielphilipjohnson",
            "https://github.com/danielphilipjohnson",
            "https://www.polywork.com/danielpjohnson",
          ],
          logo: {
            "@type": "ImageObject",
            "@id": "https://danielphilipjohnson.com/favicon-32x32.png",
            inLanguage: "en-US",
            url: "https://danielphilipjohnson.com/favicon-32x32.png",
            contentUrl: "https://danielphilipjohnson.com/favicon-32x32.png",
            caption: "Daniel Philip Johnson",
          },
          image: {
            "@id": "https://danielphilipjohnson.com/favicon-32x32.png",
          },
        },
        {
          "@type": "Person",
          "@id":
            "https://danielphilipjohnson.com/#/schema/person/danielphilipjohnson",
          name: "Daniel Philip Johnson",
          image: {
            "@type": "ImageObject",
            inLanguage: "en-US",
            url: "https://a.storyblok.com/f/136938/1440x1440/a555ac83ae/profile.jpg",
            contentUrl:
              "https://a.storyblok.com/f/136938/1440x1440/a555ac83ae/profile.jpg",
            caption: "Daniel Philip Johnson",
          },
          description: `He is a Fullstack developer at hiyield. He is currently focusing on migrating WordPress projects to Nust and Storyblok as well as contributing to opensource`,
          sameAs: [
            "https://danielphilipjohnson.com",
            "https://twitter.com/danielp_johnson",
          ],
          url: "https://danielphilipjohnson.com",
        },
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.danielphilipjohnson.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Projects",
                  item: "https://www.danielphilipjohnson.com/projects/",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  head() {
    const { title, description } = this.story.content.metadata;
    const seoImage = this.story.content.seoImage;

    return {
      title,
      meta: createSEOMeta({ title, description, image: seoImage.filename }),
    };
  },
};
</script>