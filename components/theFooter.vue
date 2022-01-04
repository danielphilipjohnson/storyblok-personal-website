<template>
  <footer class="w-full text-white bg-primary-mid">
    <div class="w-full max-w-screen-xl px-16 mx-auto">
      <div
        class="grid py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 md:pt-16"
      >
        <Link-Section
          :classes="'col-span-1'"
          title="Internal Links"
          :links="internalLinks"
        />

        <Link-Section
          :classes="'col-span-1'"
          title="Blog Links"
          :links="blogLinks"
        />

        <Link-Section
          :classes="'col-span-1'"
          title="Project Links"
          :links="projectLinks"
        />

        <Link-Section
          :classes="'col-span-1'"
          title="External Links"
          :links="externalLinks"
        />

        <div class="flex flex-col col-span-1 mr-4 lg:col-span-2">
          <h2 class="mb-2 mr-8 text-sm font-bold uppercase text-light-gray">
            Developer links
          </h2>

          <nav class="mb-4">
            <Link-Socials :links="developerLinks" />
          </nav>
        </div>

        <div class="flex flex-col col-span-1 mb-8 lg:col-span-2">
          <h2 class="mb-2 mr-8 text-sm font-bold uppercase text-light-gray">
            Social links
          </h2>
          <nav class="mb-4">
            <Link-Socials :links="socialLinks" />
          </nav>
        </div>
      </div>
    </div>

    <div class="w-full border-t"></div>
    <div
      class="grid justify-between max-w-screen-xl p-4 mx-auto lg:grid-cols-2"
    >
      <div class="flex flex-col mb-4 md:flex-row">
        <p class="font-bold lg:ml-8">©2020-2021</p>
        <p class="md:ml-2">Developed by Daniel Philip Johnson</p>
      </div>
      <p>
        Made with
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          style="color: rgb(148, 200, 90)"
          >#Nuxt</a
        >,
        <a
          class="mx-1"
          href="https://www.storyblok.com/"
          target="_blank"
          rel="noopener noreferrer"
          style="color: rgb(148, 200, 90)"
          >#Storyblok</a
        >

        and
        <a
          class="mx-1"
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          style="color: rgb(148, 200, 90)"
          >#TailwindCSS</a
        >
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      title: "internal",
      internalLinks: [
        {
          link: "/",
          content: "Home",
          external: false,
          alt: "Home",
        },
        {
          link: "/about/",
          content: "About",
          external: false,
          alt: "About Daniel Philip Johnson",
        },
        {
          link: "/projects/",
          content: "Projects",
          external: false,
          alt: "Work from Daniel Philip Johnson",
        },
        {
          link: "/contact/",
          content: "Contact",
          external: false,
          alt: "Contact for Daniel Philip Johnson service",
        },
      ],
      blogLinks: [
        {
          link: "/blog",
          content: "Blog",
          external: false,
          alt: "Blogs from Daniel Philip Johnson",
        },
        // {
        //   link: "/categories",
        //   content: "Categories",
        //   external: false,
        //   alt: "All Blogs Categories from Daniel Philip Johnson",
        // },
        // {
        //   link: "/series",
        //   content: "Series",
        //   external: false,
        //   alt: "All Blogs Series from Daniel Philip Johnson",
        // },
        // {
        //   link: "latest",
        //   content: "Latest",
        //   external: false,
        //   alt: "Latest Blogs from Daniel Philip Johnson",
        // },
      ],
      projectLinks: [
        {
          link: "/project",
          content: "Projects",
          external: false,
          alt: "Projects from Daniel Philip Johnson",
        },
        // {
        //   link: "/javaScript",
        //   content: "JavaScript",
        //   external: false,
        //   alt: "JavaScript projects from Daniel Philip Johnson",
        // },
        // {
        //   link: "/react",
        //   content: "React",
        //   external: false,
        //   alt: "React projects from Daniel Philip Johnson",
        // },
        // {
        //   link: "/nuxt",
        //   content: "Nuxt",
        //   external: false,
        //   alt: "Nuxt projects from Daniel Philip Johnson",
        // },
      ],
      externalLinks: [
        {
          link: "https://danielphilipjohnson.me/",
          content: "Hashnode",
          external: true,
          alt: "Hashnode of Daniel Philip Johnson",
        },
        {
          link: "https://dev.to/danielphilipjohnson",
          content: "dev.to",
          external: true,
          alt: "dev.to of Daniel Philip Johnson",
        },
      ],
      developerLinks: [
        {
          icon: "hackerrank",
          link: "https://www.hackerrank.com/daniel_p_johnson",
          alt: "hackerrank of Daniel Philip Johnson",
        },
        {
          icon: "codepen",
          link: "https://codepen.io/danielphilipjohnson",
          alt: "codepen of Daniel Philip Johnson",
        },
        {
          icon: "stackoverflow",
          link: "https://stackoverflow.com/users/13921677/daniel-philip-johnson",
          alt: "stackoverflow of Daniel Philip Johnson",
        },
        {
          icon: "github",
          link: "https://github.com/danielphilipjohnson",
          alt: "github of Daniel Philip Johnson",
        },
      ],

      socialLinks: [
        {
          icon: "linkedin",
          link: "https://www.linkedin.com/in/daniel-philip-johnson/",
          alt: "linkedin of Daniel Philip Johnson",
        },
        {
          icon: "twitter",
          link: "https://twitter.com/danielp_johnson",
          alt: "twitter of Daniel Philip Johnson",
        },
        {
          icon: "instagram",
          link: "https://www.instagram.com/danielphilipjohnson/",
          alt: "instagram of Daniel Philip Johnson",
        },
        {
          icon: "youtube",
          link: "https://www.youtube.com/c/DanielPhilipJohnson/",
          alt: "youtube of Daniel Philip Johnson",
        }, {
          icon: "dev",
          link: "https://dev.to/danielphilipjohnson",
          alt: "dev to of Daniel Philip Johnson",
        },
      ],
    };
  },
};
</script>