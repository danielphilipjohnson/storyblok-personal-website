<template>
  <footer class="bg-primary-mid text-white w-full">
    <div class="w-full mx-auto max-w-screen-xl px-16">
      <div
        class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 py-10 md:pt-16"
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

        <div class="col-span-1 lg:col-span-2 flex flex-col mr-4">
          <h2 class="mr-8 uppercase text-sm font-bold text-light-gray mb-2">
            Developer links
          </h2>

          <nav class="mb-4">
            <Link-Socials :links="developerLinks" />
          </nav>
        </div>

        <div class="col-span-1 lg:col-span-2 flex flex-col mb-8">
          <h2 class="mr-8 uppercase text-sm font-bold text-light-gray mb-2">
            Social links
          </h2>
          <nav class="mb-4">
            <Link-Socials :links="socialLinks" />
          </nav>
        </div>
      </div>
    </div>

    <div class="w-full border-t"></div>
    <div class="mx-auto max-w-screen-xl  grid lg:grid-cols-2 justify-between p-4">
      <div class="flex mb-4">
        <p class="lg:ml-8 font-bold">©2020-2021</p>
        <p class="ml-2">Developed by Daniel Philip Johnson</p>
      </div>
      <p>
        Made with
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          style="color: rgb(148, 200, 90)"
          >#Nuxt</a>,
          <a
          class="mx-1"
          href="https://www.storyblok.com/"
          target="_blank"
          rel="noopener noreferrer"
          style="color: rgb(148, 200, 90)"
          >#Storyblok</a>
          
          and
        <a
          class="mx-1"
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          style="color: rgb(148, 200, 90)"
          >#TailwindCSS</a>
        
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  color: #fff;
  width: 100%;
}
.footer__inner {
  display: grid;
  justify-content: space-between;
  padding-top: 1.5rem;
  padding-bottom: 2.5rem;
}
@media (min-width: 768px) {
  .footer__inner {
    grid-template-columns: repeat(3, 1fr);
  }
}
.footer__inner-title {
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-weight: 700;
  font-size: 1rem;
  width: 12rem;
}

.footer__box {
  margin-bottom: 2rem;
}

.footer__social-item {
  font-size: 1.875rem;
  line-height: 2.25rem;
  margin: 0.5rem 0;
  margin-right: 1rem;
}

.footer__box p {
  margin-top: 1rem;
}
</style>

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
          icon: "dev",
          link: "https://dev.to/danielphilipjohnson",
          alt: "dev to of Daniel Philip Johnson",
        },
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
        },
      ],
    };
  },
};
</script>