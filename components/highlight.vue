<template>
  <section class="highlight">
    <div class="highlight__info">
      <h2 class="highlight__title" v-html="title"></h2>
      <p class="highlight__text" v-html="description"></p>
      <app-button class="button--blue">Ver más</app-button>
    </div>
    <div class="highlight__image">
      <nuxt-picture :src="image" />
    </div>
  </section>
</template>

<script lang="ts" setup>
type Props = {
  title: string;
  description: string;
  image: string;
};

type Emits = {
  (e: "click"): void;
};

defineProps<Props>();
defineEmits<Emits>();
</script>
