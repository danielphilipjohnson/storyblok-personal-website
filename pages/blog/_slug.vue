<template>
  <article class="mx-auto max-w-6xl px-8 md:px-16 lg:px-24 pb-16">
    <Badges :badges="article.tag_list" class="pt-10 pb-4" />
    <header>
      <h1
        class="
          text-5xl
          font-extrabold
          tracking-tight
          mb-2
          leading-tight
          md:leading-snug
        "
      >
        {{ article.content.title }}
      </h1>
    </header>

    <div class="flex pt-4">
      <!-- <div class="mr-4">
        <div
         
          class=""
          style="border-radius: 50%"
        >
          <div>
            <img
              alt=""
              src="https://www.danielphilipjohnson.com/static/90ff2d9e23d36ceb0d775bc4d2fb48f5/643ff/profile.webp"
            />
          </div>
         
   
        </div>
      </div> -->
      <div>
        <p class="font-bold text-gray-800">Created by Daniel Philip johnson</p>
        <div class="date text-gray-500">
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
        class="w-full shadow-lg object-cover rounded-lg"
        :src="article.content.cover_image.filename"
        provider="storyblok"
      />
      <figcaption class="pt-4">
        <p>
          {{ article.content.intro }}
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
        <p v-else-if="text.type == 'paragraph'">
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
        <ul v-else-if="text.type == 'bullet_list'">
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
};
</script>
<style>
.content-custom {
  /* font-family: "Quattrocento Sans"; */
  font-size: 1.05rem;
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
/* .content-custom h1 {
  font-size: 2.5rem;
  line-height: 3.25rem;
}
.content-custom h2 {
  font-size: 1.875rem;
}
.content-custom h3 {
  font-size: 1.575rem;
}
.content-custom h4 {
  font-size: 1.275rem;
} */

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
  --tw-text-opacity: 1;
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