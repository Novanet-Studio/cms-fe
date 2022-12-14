<template>
  <section class="hero">
    <div class="hero__container">
      <div class="hero__info">
        <h1 class="hero__title" v-html="titulo"></h1>
        <p class="hero__description" v-html="descripcion"></p>
      </div>
      <div class="hero__images">
        <div class="hero__image-bg">
          <nuxt-picture
            :src="url"
            :alt="alternativeText"
            class="hero__image-fg"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
type Props = {
  titulo: string;
  descripcion: string;
  url: string;
  alternativeText: string;
};

defineProps<Props>();
</script>
