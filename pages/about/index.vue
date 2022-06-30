<template>
  <main>
    <section>
      <div class="relative z-0 w-full" style="z-index: -99">
        <div class="card-head-bg">
          <NuxtImg
            class="object-cover w-full"
            src="linkedinBanner.png"
            alt="linkedin banner"
            format="webp"
            width="1680"
            height="600"
            role="presentation"
          />
        </div>
      </div>
      <div class="z-50 bg-white lg:-mt-52">
        <div class="max-w-4xl px-8 mx-auto">
          <NuxtImg
            class="relative z-10 w-32 h-32 border-2 border-white rounded-full bottom-12"
            src="profile.jpg"
            alt="Daniel Philip Johnson"
            role="presentation"
            width="100"
            height="100"
            format="webp"
            quality="80"
          />

          <div class="profile-card-body">
            <Heading class="-my-6" tag="h1" content="Daniel Philip Johnson" />

            <div class="grid justify-between gap-4 mb-3 lg:grid-cols-2">
              <header>
                <h2 class="mb-1 text-2xl font-bold">Full-stack developer</h2>
                <h3 class="text-sm text-gray">
                  👨&zwj;💻 I work remote 🏠 in Cornwall
                </h3>
              </header>
              <div class="flex w-full mb-3 lg:justify-end">
                <div
                  class="flex items-center h-8 px-3 py-4 border rounded w-max bg-badge border-grey"
                >
                  <img
                    src="https://img.icons8.com/ios/20/000000/resume.png"
                    alt="resume icon"
                    width="20"
                    height="20"
                    class="mr-2"
                    format="webp"
                    quality="80"
                  /><a
                    class="text-sm"
                    href="/static/Daniel_Philip_Johnson_Front_End_Engineer-afc8e0c1b966394ae65c1dbd9697fd63.pdf"
                    download=""
                    >Version PDF</a
                  >
                </div>
              </div>
            </div>
            <p class="mb-4">
              My personal goal is to help others get their first programming job
              and work my way towards becoming a senior.
            </p>
            <ul class="mb-8 ml-8 space-y-3 list-disc">
              <li>😄 Pronouns: Him, he, they</li>
              <li>📌 Cornwall 🏴󠁧󠁢󠁥󠁮󠁧󠁿</li>
              <li>🎓 Bsc Psychology | University of Plymouth 🏫</li>
              <li>🥼 Psychologist turned React developer 🖥️</li>
              <li>🖥️ I’m currently using Kubuntu 20.04 and Manjaro 20.0.3</li>
              <li>🔭 In my spare time I build linux from scratch</li>
            </ul>
            <div
              class="flex items-center p-6 mb-8 border rounded bg-badge border-grey"
            >
              <p class="text-sm leading-7">
                ⚡ <span class="font-bold">Fun fact:</span> I started
                programming with Basic on Commodore 64 (CBM 64) but never owned
                a pc until Windows Vista in 2008 😑. My desktop 🖥️ was Packard
                Bell iMedia x2414 with an enormous amount of Ram totalling 2GB.
                It did not take too long for me to consider my options and use
                Ubuntu 9.04 (Jaunty Jackalope). From, there I have used Linux
                ever since and yes, I use KDE for my GUI "you know what they say
                old habits die hard."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="max-w-4xl px-8 mx-auto">
      <Header />
    </section>
    <section class="max-w-4xl px-8 mx-auto">
      <header>
        <h2 class="mb-2 font-bold">Current Focus:</h2>
      </header>

      <Highlight
        emoji="⚡"
        content="// Accessibility // React // Performance // Responsive"
      />
      <header><h2 class="mb-2 font-bold">Technologies:</h2></header>
      <Highlight
        emoji="⚡"
        content="React, Next, Vue, Nuxt,
          Javascript(ES6), Python, django-rest, Tailwind, Docker, Kubernetes"
      />
    </section>

    <About-Value-Mission />

    <About-Quick-Bio />

    <About-Outside-Programming />

    <About-Future-Plans />

    <About-Contact-Me />

    <About-Find-Me />

    <About-Wanna-Chat />
  </main>
</template>


<script>
import { createSEOMeta } from "../../utils/seo";
export default {
  async asyncData(context) {
    const { story } = await context.app.$storyapi
      .get("cdn/stories/about", {
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
          url: "https://www.danielphilipjohnson.com//",
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
                  name: "About",
                  item: "https://www.danielphilipjohnson.com/about/",
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