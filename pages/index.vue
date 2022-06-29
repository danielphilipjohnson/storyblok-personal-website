<template>
  <section id="home" className="home">
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component"
    />
    <CallToAction />
  </section>
</template>

<script>
import { createSEOMeta } from "../utils/seo";

export default {
  layout: "default",
  data() {
    return {
      story: { content: {} },
    };
  },
  mounted() {
    this.$storybridge(
      () => {
        const storyblokInstance = new StoryblokBridge();

        // Use the input event for instant update of content
        storyblokInstance.on("input", (event) => {
          if (event.story.id === this.story.id) {
            this.story.content = event.story.content;
          }
        });

        // Use the bridge to listen the events
        storyblokInstance.on(["published", "change"], (event) => {
          // window.location.reload()
          this.$nuxt.$router.go({
            path: this.$nuxt.$router.currentRoute,
            force: true,
          });
        });
      },
      (error) => {
        //console.error(error);
      }
    );
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
          url: "https://www.danielphilipjohnson.com/",
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
      ],
    };
  },
  asyncData(context) {
    let version =
      context.query._storyblok || context.isDev ? "draft" : "published";
    return context.app.$storyapi
      .get("cdn/stories/home", {
        version: version,
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
