<template>
  <div  class="specialize">
    <div class="img-container">
       <NuxtImg
          class="w-full"
          provider="storyblok"
          format="webp"
          quality="80"
          width="64"
          height="64"
         :src="filename"
        :alt="alt"
          role="presentation"
        />
     
    </div>

    <div>
      <h3 class="specialize__header">{{ heading }}</h3>
      <p class="text-black specialize__paragraph">
        {{ skill }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    filename: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    heading: {
      type: String,
      required: true,
    },skill: {
      type: String,
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