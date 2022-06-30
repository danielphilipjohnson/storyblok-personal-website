<template>
  <article class="max-w-4xl px-8 pb-16 mx-auto md:px-16 lg:px-24">
    <Badges :badges="article.tag_list" class="pt-10 pb-4" />
    <header>
      <h1
        class="mb-2 text-5xl font-extrabold leading-tight tracking-tight md:leading-snug"
      >
        {{ article.content.title }}
      </h1>
    </header>

    <div class="flex pt-4">
      <div>
        <p class="font-bold text-gray-800">Created by Daniel Philip johnson</p>
        <div class="text-gray-500 date">
          Published on<span class="pl-1 font-bold">
            <time :datetime="article.content.date">
              {{ article.content.date.toLocaleDateString() }}
            </time>
          </span>
        </div>
      </div>
    </div>

    <figure class="py-4">
      <NuxtImg
        class="object-cover w-full rounded-lg shadow-lg"
        :src="article.content.cover_image.filename"
        :alt="article.content.cover_image.alt"
        format="webp"
        quality="80"
        provider="storyblok"
      />
      <figcaption class="pt-4">
        <p class="leading-7">
          {{ article.content.excerpt }}
        </p>
      </figcaption>
    </figure>

    <div class="content-custom">
      <template v-for="text in article.content.long_text.content">
        <Heading
          v-if="text.type == 'heading' && text.attrs"
          :tag="'h' + text.attrs.level"
          :content="text.content[0].text"
          :key="text._uid"
        />
        <p v-else-if="text.type == 'paragraph'" :key="text._uid">
          <template v-for="p_text in text.content">
            <RichTextRenderer :document="p_text" :key="p_text._uid" />
          </template>
        </p>
        <template
          v-else-if="text.type == 'blockquote'"
          v-for="block_quote in text.content"
          
        >
          <BlockQuote
            :text="block_quote.content[0].text"
            :key="block_quote._uid"
          />
        </template>
        <ul v-else-if="text.type == 'bullet_list'" :key="text._uid">
          <template v-for="p_text in text.content">
            <RichTextRenderer :document="p_text" :key="p_text._uid" />
          </template>
        </ul>
        <template v-else v-for="p_text in text.content">
          <RichTextRenderer :document="p_text" :key="p_text._uid" />
        </template>
      </template>
    </div>
  </article>
</template>

<script>
import { createSEOMeta } from "../../utils/seo";

export default {
  async asyncData({ app, route }) {
    // Get the slug from the route
    const slug = route.params.slug;

    const res = await app.$storyapi.get("cdn/stories", {
      starts_with: "blog/",
      by_slugs: "*/" + slug,
      resolve_relations: "author",
    });

    const article = res.data.stories[0];
    article.content.date = new Date(article.content.date);

    return { article, author: article.content.author };
  },
  head() {
    const { title, intro, cover_image } = this.article.content;
    const url = this.$config.BASE_URL + "/" + this.article.full_slug;       

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
        description: intro,
        image: cover_image.filename,
        publish_date: this.article.published_at,
        type: "article",
        url,
      }),
    };
  },
  jsonld() {
    const BASE_URL = process.env.BASE_URL;

    const { title, intro, cover_image, created_at, published_at } =
      this.article.content;

    const tags = this.article.tag_list.join(", ");

    const getAllTextLength = this.article.content.long_text.content.map(
      (innerContent) => {
        if (innerContent.content) {
          return innerContent.content.map((innerContent) => {
            if (innerContent.type === "text") {
              return innerContent.text.length ? innerContent.text.length : 0;
            } else if (innerContent.type === "paragraph") {
              return innerContent.content.map((i) => {
                return i.text.length;
              });
            } else {
              return [];
            }
          });
        } else {
          return [];
        }
      }
    );

    function flatDeep(arr, d = 1) {
      return d > 0
        ? arr.reduce(
            (acc, val) =>
              acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
            []
          )
        : arr.slice();
    }
    const flatterned = flatDeep(getAllTextLength, Infinity);
    const wordcount = flatterned.reduce((acc, val) => acc + val, 0);

    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          headline: title,
          image: cover_image.filename,
          thumbnailUrl: cover_image.filename,
          author: {
            "@id": BASE_URL + "/#/schema/person/danielphilipjohnson",
          },
          genre: "web development",
          keywords: tags,
          wordcount: wordcount,
          publisher: {
            "@id": BASE_URL + "/#/schema/organization/danielphilipjohnson",
          },
          url: BASE_URL + this.$route.path,
          mainEntityOfPage: { "@type": "WebPage" },
          datePublished: created_at,
          dateModified: published_at,
          description: intro,
        },
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
              item: BASE_URL + "/blog/",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: title,
              item: BASE_URL + this.$route.path,
            },
          ],
        },
      ],
    };
  },
};
</script>
<style>
.content-custom {
  /* font-family: "Quattrocento Sans"; */
  @apply text-lg;
}
.content-custom h1,
.content-custom h2,
.content-custom h3,
.content-custom h4,
.content-custom h5,
.content-custom h6 {
  color: #102a43;
  line-height: 2.25rem;
  font-weight: bolder;
  text-transform: uppercase;
  padding-top: 1rem;
}

.content-custom p {
  @apply leading-7;
  margin-bottom: 1.25rem;
}
.content-custom img {
  border-style: solid;
  border-radius: 0.5rem;
  margin: 0 auto;
  margin-bottom: 1rem;
}
.content-custom a {
  text-decoration: underline;
  color: rgb(74 127 15);
}
.content-custom ul,
ol {
  padding-left: 1rem;
  margin-left: 0.5rem;
  margin-bottom: 1.25rem;
}
.content-custom ul {
  list-style: circle;
}
.content-custom ol {
  list-style: lower-greek;
}

.content-custom li p {
  margin-bottom: 0.25rem;
}

.content-custom blockquote {
  border-left-width: 4px;
  border-color: #570577;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-style: italic;
  font-style: italic;
  color: #570577;
  margin-bottom: 2rem;
}

.content-custom i {
  background-color: #a2a7d646;
  border-radius: 5px;
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace,
    Courier;
  font-weight: bolder;
  margin: 0 0.25rem;
  padding: 0.2rem 0.4rem;
  white-space: pre-wrap;
}
</style>
