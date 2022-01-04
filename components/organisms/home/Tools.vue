<template>
  <section class="max-w-4xl mx-auto">
    <header>
      <h2 class="text-2xl font-extrabold text-purple skill-heading">
        {{ blok.Heading }}
      </h2>
      <h3>Here are a list of tools, I use daily during my job.</h3>
    </header>
    <div class="specializes">
      <div v-for="tool in blok.Tools" :key="tool._uid">
          <base-tool :filename="tool.Logo.filename"
          :alt="tool.Logo.alt"
          :heading="tool.Heading"
          :skill="tool.Skill"
          />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.specializes {
  margin-top: 1rem;
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: 1fr;
  margin-bottom: 3rem;
}
.specialize {
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  text-align: center;
}

.img-container {
  margin-bottom: 0.5rem;
}

.specialize__header {
  margin-bottom: 0.5rem;
  color: #0a2540;
  font-weight: 700;
  font-size: 1rem;
}
.specialize__paragraph {
  font-size: 0.95rem;
}

@media (min-width: 800px) {
  .specializes {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
  }
  .img-container {
    margin-right: 1rem;
  }
  .specialize__header {
    margin-bottom: 0.5rem;
  }
  .specialize {
    grid-template-columns: 1fr 3fr;
    justify-items: self-start;
    text-align: left;
  }
}

@media (min-width: 1500px) {
  .specialize__header {
    font-size: 1.25rem;
  }
}
</style>