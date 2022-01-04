<template>
  <section id="home" className="home">
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component"
    />
    <section class="border-t bio border-grey" aria-label="Lets connect">
      <div class="container pt-16 pb-16">
        <div class="text-center">
          <h2 class="mb-2 text-2xl font-bold">
            Want to learn more? Lets connect!
          </h2>
          <p class="mb-12 text-xl">
            I’d love to chat about new opportunities or anything design related!
          </p>
          <a
            class="px-24 py-4 my-12 font-bold tracking-wide text-white bg-purple-500 rounded "
            href="/contact"
          >
            Contact</a
          >
          <div>
            <ul class="flex justify-center py-16 text-2xl">
              <li class="p-4 mx-3 rounded-full bg-highlight">
                <a
                  class="text-purple-500"
                  href="https://www.linkedin.com/in/daniel-philip-johnson/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="linkedin"
                  ><svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="linkedin"
                    class="w-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li class="p-4 mx-3 rounded-full bg-highlight">
                <a
                  class="text-purple-500"
                  href="https://twitter.com/danielp_johnson"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="twitter"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="twitter"
                    class="w-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    ></path></svg
                ></a>
              </li>
              <li class="p-4 mx-3 rounded-full bg-highlight">
                <a
                  class="text-purple-500"
                  href="https://www.instagram.com/danielphilipjohnson/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="instagram"
                  ><svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="instagram"
                    class="w-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li class="p-4 mx-3 rounded-full bg-highlight">
                <a
                  class="text-purple-500"
                  href="https://www.youtube.com/c/DanielPhilipJohnson/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="youtube"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="youtube"
                    class="w-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
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
