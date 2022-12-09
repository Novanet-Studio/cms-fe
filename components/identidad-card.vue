<template>
  <div class="item">
    <div class="aliado__logo">
      <nuxt-img :src="imagen" :alt="alternativeText"/>
    </div>
    <div class="aliado__info" v-if="(title || description)">
      <h3 class="aliado__title" v-html="title"></h3>
      <div class="aliado__description" v-html="description"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>

type Props = {
  imagen: string;
  alternativeText: string
  title?: string;
  description?: string;
}

defineProps<Props>();
</script>