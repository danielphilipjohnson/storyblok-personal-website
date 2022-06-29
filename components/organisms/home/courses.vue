<template>
  <section class="max-w-4xl px-8 mx-auto md:px-0">
    <h2 class="text-2xl font-extrabold text-purple skill-heading">
      {{ blok.Heading }}
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div
        v-for="course in filteredContent"
        class="grid grid-cols-3 course"
        :key="course._uid"
      >
        <div class="col-span-1 mr-3">
          <picture>
            <NuxtImg
              height="75"
              width="75"
              format="webp"
              quality="80"
              class="p-2 mr-2 course-logo"
              provider="storyblok"
              :src="course.Logo.filename"
              :alt="course.Logo.alt"
              loading="lazy"
            />
          </picture>
        </div>
        <div class="col-span-2 course-content">
          <h3 class="course-title">
            {{ course.Title }}
          </h3>
          <p class="course-info">
            {{ course.School }}
          </p>
          <p class="course-grade">
            <span class="date">
              {{ course.Issued }}
            </span>
          </p>
          <a
            class="block h-8 btn-certificate w-max"
            :href="course.Certificate_Link.url"
          >
            <div class="flex">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="graduation-cap"
                class="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  fill="currentColor"
                  d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"
                ></path>
              </svg>
              <p>View Certificate</p>
            </div>
          </a>
        </div>
      </div>
    </div>

    <read-more-button :showButton="showButton" @customClick="readMore" />
  </section>
</template>

<script>
import { useReadMore } from "../../../composables/useReadMore.js";

export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  setup(context) {
    const { Courses } = context.blok;
    const { readMore, filteredContent, showButton } = useReadMore(Courses, 4);

    return { readMore, filteredContent, showButton };
  },
};
</script>
<style scoped>
@media screen and (min-width: 576px) {
  .container.education-container {
    margin-right: auto;
    margin-left: auto;
    padding-right: 15px;
    padding-left: 15px;
  }
}

.education-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
}
@media screen and (min-width: 772px) and (max-width: 1194px) {
  .education-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (min-width: 1195px) {
  .education-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.course {
  margin-bottom: 0.25rem;
  border-radius: 2px;
  padding: 2rem;
  border: 2px solid rgba(235, 236, 237, 0.8);
}

@media screen and (min-width: 620px) {
  .course {
    margin-right: 0.5rem;
    margin-bottom: 1rem;
  }
}

/* located in utils */
.course-logo {
  border: 1px solid #eee;
  border-radius: 6px;
  margin-bottom: 1rem;
}

.course-title {
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}
.course-info {
  font-size: 0.85rem;
  font-weight: 500;
  margin: 0;
}
.course-grade {
  font-size: 0.75rem;
  margin-bottom: 1rem;
  color: #6e7881;
}
.btn-certificate {
  padding: 0.5rem;
  font-size: 0.7rem;
  border-radius: 4px;
  background: #303146;
  color: #fff;
  border: 0;
  padding: 0.5rem 1rem;
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
  display: inline-flex;
}
.btn-certificate svg {
  margin-right: 0.5rem;
}

@media screen and (min-width: 650px) {
  .course {
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 1rem;
  }
  .course-logo {
    margin-right: 0.75rem;
  }
  .course-content {
    text-align: left;
  }
}

.show-more {
  background: none;
  border: none;
  color: rgb(10, 102, 194);
  font-weight: 700;
  padding-bottom: 1rem;
  width: 100%;
}
.show-more:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>