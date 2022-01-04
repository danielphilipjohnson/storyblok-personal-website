<template>
  <section id="work" class="work">
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component"
    />

    <div class="flex flex-wrap items-start max-w-6xl px-8 mx-auto mb-8">
      <div
        class="w-full pb-8 lg:w-1/2 lg:pr-8"
        v-for="article in articles"
        :key="article._uid"
      >
        <div
          v-if="article.content.External_Link"
          class="transition duration-300 border rounded border-grey hover:shadow-md hover:opacity-90"
        >
          <a
            :href="article.content.External_Link.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="top__bar">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="firefox"
                class="w-16 svg-inline--fa fa-firefox"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M503.52,241.48c-.12-1.56-.24-3.12-.24-4.68v-.12l-.36-4.68v-.12a245.86,245.86,0,0,0-7.32-41.15c0-.12,0-.12-.12-.24l-1.08-4c-.12-.24-.12-.48-.24-.6-.36-1.2-.72-2.52-1.08-3.72-.12-.24-.12-.6-.24-.84-.36-1.2-.72-2.4-1.08-3.48-.12-.36-.24-.6-.36-1-.36-1.2-.72-2.28-1.2-3.48l-.36-1.08c-.36-1.08-.84-2.28-1.2-3.36a8.27,8.27,0,0,0-.36-1c-.48-1.08-.84-2.28-1.32-3.36-.12-.24-.24-.6-.36-.84-.48-1.2-1-2.28-1.44-3.48,0-.12-.12-.24-.12-.36-1.56-3.84-3.24-7.68-5-11.4l-.36-.72c-.48-1-.84-1.8-1.32-2.64-.24-.48-.48-1.08-.72-1.56-.36-.84-.84-1.56-1.2-2.4-.36-.6-.6-1.2-1-1.8s-.84-1.44-1.2-2.28c-.36-.6-.72-1.32-1.08-1.92s-.84-1.44-1.2-2.16a18.07,18.07,0,0,0-1.2-2c-.36-.72-.84-1.32-1.2-2s-.84-1.32-1.2-2-.84-1.32-1.2-1.92-.84-1.44-1.32-2.16a15.63,15.63,0,0,0-1.2-1.8L463.2,119a15.63,15.63,0,0,0-1.2-1.8c-.48-.72-1.08-1.56-1.56-2.28-.36-.48-.72-1.08-1.08-1.56l-1.8-2.52c-.36-.48-.6-.84-1-1.32-1-1.32-1.8-2.52-2.76-3.72a248.76,248.76,0,0,0-23.51-26.64A186.82,186.82,0,0,0,412,62.46c-4-3.48-8.16-6.72-12.48-9.84a162.49,162.49,0,0,0-24.6-15.12c-2.4-1.32-4.8-2.52-7.2-3.72a254,254,0,0,0-55.43-19.56c-1.92-.36-3.84-.84-5.64-1.2h-.12c-1-.12-1.8-.36-2.76-.48a236.35,236.35,0,0,0-38-4H255.14a234.62,234.62,0,0,0-45.48,5c-33.59,7.08-63.23,21.24-82.91,39-1.08,1-1.92,1.68-2.4,2.16l-.48.48H124l-.12.12.12-.12a.12.12,0,0,0,.12-.12l-.12.12a.42.42,0,0,1,.24-.12c14.64-8.76,34.92-16,49.44-19.56l5.88-1.44c.36-.12.84-.12,1.2-.24,1.68-.36,3.36-.72,5.16-1.08.24,0,.6-.12.84-.12C250.94,20.94,319.34,40.14,367,85.61a171.49,171.49,0,0,1,26.88,32.76c30.36,49.2,27.48,111.11,3.84,147.59-34.44,53-111.35,71.27-159,24.84a84.19,84.19,0,0,1-25.56-59,74.05,74.05,0,0,1,6.24-31c1.68-3.84,13.08-25.67,18.24-24.59-13.08-2.76-37.55,2.64-54.71,28.19-15.36,22.92-14.52,58.2-5,83.28a132.85,132.85,0,0,1-12.12-39.24c-12.24-82.55,43.31-153,94.31-170.51-27.48-24-96.47-22.31-147.71,15.36-29.88,22-51.23,53.16-62.51,90.36,1.68-20.88,9.6-52.08,25.8-83.88-17.16,8.88-39,37-49.8,62.88-15.6,37.43-21,82.19-16.08,124.79.36,3.24.72,6.36,1.08,9.6,19.92,117.11,122,206.38,244.78,206.38C392.77,503.42,504,392.19,504,255,503.88,250.48,503.76,245.92,503.52,241.48Z"
                ></path>
              </svg>
              <i class="window-buttons"></i>
              <span class="top__bar-title">Tribute Page</span>
            </div>
            <figure
              class="relative flex flex-col justify-between h-full shadow-sm border-gray"
            >
              <nuxt-picture
                class="relative flex flex-col justify-between h-full"
                provider="storyblok"
                width="760"
                height="400"
                format="webp"
                :alt="article.content.Background_Image.alt"
                :src="article.content.Background_Image.filename"
              />
            </figure>
          </a>

          <figcaption class="flex flex-col px-4 pt-3 md:pt-4">
            <h2
              class="flex flex-wrap items-center pb-1 text-xl break-all md:text-3xl md:pb-2"
            >
              {{ article.name }}
            </h2>
            <p class="mb-4 text-sm text-gray-600 dark:text-gray-100">
              <storyblokRichText :text="article.content.Excerpt" />
            </p>
            <div class="pb-4 badges">
              <div v-for="logo in article.content.Built_With" :key="logo._uid">
                <div v-if="logo.Text.toLowerCase() == 'php'">
                  <span
                    class="px-2 py-1 mr-1 text-xs text-white rounded bg-tools-php"
                    >{{ logo.Text }}</span
                  >
                </div>
                <div v-else-if="logo.Text.toLowerCase() == 'wordpress'">
                  <span
                    class="px-2 py-1 mr-1 text-xs text-white rounded bg-tools-wordpress"
                    >{{ logo.Text }}</span
                  >
                </div>
                <div v-else-if="logo.Text.toLowerCase() == 'tailwind'">
                  <span
                    class="px-2 py-1 mr-1 text-xs text-white rounded bg-tools-tailwind"
                    >{{ logo.Text }}</span
                  >
                </div>
                <div v-else-if="logo.Text.toLowerCase() == 'javascript'">
                  <span
                    class="px-2 py-1 mr-1 text-xs text-white rounded bg-tools-javascript"
                    >{{ logo.Text }}</span
                  >
                </div>
                <div v-else-if="logo.Text.toLowerCase() == 'docker'">
                  <span
                    class="px-2 py-1 mr-1 text-xs text-white rounded bg-tools-docker"
                    >{{ logo.Text }}</span
                  >
                </div>
                <div v-else-if="logo.Text.toLowerCase() == 'nuxt'">
                  <span
                    class="px-2 py-1 mr-1 text-xs text-white rounded bg-tools-nuxt"
                    >{{ logo.Text }}</span
                  >
                </div>
                <div v-else-if="logo.Text.toLowerCase() == 'prismic'">
                  <span
                    class="px-2 py-1 mr-1 text-xs text-white rounded bg-tools-prismic"
                    >{{ logo.Text }}</span
                  >
                </div>
                <div v-else-if="logo.Text.toLowerCase() == 'netlify'">
                  <span
                    class="px-2 py-1 mr-1 text-xs text-white rounded bg-tools-netlify"
                    >{{ logo.Text }}</span
                  >
                </div>
                <div v-else-if="logo.Text.toLowerCase() == 'typescript'">
                  <span
                    class="px-2 py-1 mr-1 text-xs text-white rounded bg-tools-typescript"
                    >{{ logo.Text }}</span
                  >
                </div>
                <div v-else-if="logo.Text.toLowerCase() == 'mailchimp'">
                  <span
                    class="px-2 py-1 mr-1 text-xs text-white rounded bg-tools-mailchimp"
                    >{{ logo.Text }}</span
                  >
                </div>
                <div v-else-if="logo.Text.toLowerCase() == 'aws'">
                  <span
                    class="px-2 py-1 mr-1 text-xs text-white rounded bg-tools-aws"
                    >{{ logo.Text }}</span
                  >
                </div>
                <div v-else-if="logo.Text.toLowerCase() == 'vue'">
                  <span
                    class="px-2 py-1 mr-1 text-xs text-white rounded bg-tools-vue"
                    >{{ logo.Text }}</span
                  >
                </div>
                <div v-else-if="logo.Text.toLowerCase() == 'vuex'">
                  <span
                    class="px-2 py-1 mr-1 text-xs text-white rounded bg-tools-vuex"
                    >{{ logo.Text }}</span
                  >
                </div>
                <div v-else-if="logo.Text.toLowerCase() == 'bootstrap'">
                  <span
                    class="px-2 py-1 mr-1 text-xs text-white rounded bg-tools-bootstrap"
                    >{{ logo.Text }}</span
                  >
                </div>
                <div v-else-if="logo.Text.toLowerCase() == 'algolia'">
                  <span
                    class="px-2 py-1 mr-1 text-xs text-white rounded bg-tools-algolia"
                    >{{ logo.Text }}</span
                  >
                </div>
                <div v-else-if="logo.Text.toLowerCase() == 'firebase'">
                  <span
                    class="px-2 py-1 mr-1 text-xs text-white rounded bg-tools-firebase"
                    >{{ logo.Text }}</span
                  >
                </div>
                <div v-else-if="logo.Text.toLowerCase() == 'html'">
                  <span
                    class="px-2 py-1 mr-1 text-xs text-white rounded bg-tools-html"
                    >{{ logo.Text }}</span
                  >
                </div>
                <div v-else-if="logo.Text.toLowerCase() == 'css'">
                  <span
                    class="px-2 py-1 mr-1 text-xs text-white rounded bg-tools-css"
                    >{{ logo.Text }}</span
                  >
                </div>
                <div v-else-if="logo.Text.toLowerCase() == 'sass'">
                  <span
                    class="px-2 py-1 mr-1 text-xs text-white rounded bg-tools-sass"
                    >{{ logo.Text }}</span
                  >
                </div>
                <div v-else>
                  <span
                    class="px-2 py-1 mr-1 text-xs text-white rounded bg-secondary"
                    >{{ logo.Text }}</span
                  >
                </div>
              </div>
            </div>
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
};
</script>

<style scoped>
.top__bar {
  background-color: #ddd;
  color: #444343;
  display: block;
  height: 24px;
  position: relative;
  width: 100%;
  z-index: 10;
}

.top__bar .fa-firefox {
  color: #fd7e14;
  display: inline-block;
  height: 23px;
  left: 10px;
  position: absolute;
  top: 1px;
  width: 16px;
  z-index: 12;
}

.window-buttons,
.window-buttons:before {
  border-radius: 50%;
  display: inline-block;
  height: 12px;
  position: absolute;
  width: 12px;
}
.window-buttons {
  background-color: #ff5f57;
  right: 38px;
  top: 6px;
}

.top__bar-title {
  display: block;
  font-size: 0.8rem;
  font-weight: bolder;
  letter-spacing: -0.3px;
  padding: 0.1rem 1rem;
  text-align: center;
  width: 100%;
}

.window-buttons:before {
  background-color: #ffbd2e;
  content: " ";
  left: 16px;
  top: 0;
}

.window-buttons:after {
  background-color: #28ca41;
  border-radius: 50%;
  content: " ";
  display: inline-block;
  height: 12px;
  left: 32px;
  position: absolute;
  top: 0;
  width: 12px;
}

.badges {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
