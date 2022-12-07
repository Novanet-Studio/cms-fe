<template>
  <div class="aliado">
    <div class="aliado__logo">
      <nuxt-img :src="logo" :alt="alternativeText"/>
    </div>
    <div class="aliado__info" v-if="(title || description)">
      <h3 class="aliado__title" v-html="title"></h3>
      <div class="" v-html="description"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>

type Props = {
  logo: string;
  alternativeText: string
  title?: string;
  description?: string;
  aliadoClass?: string; 
}

defineProps<Props>();
</script>