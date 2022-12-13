<template>
  <div class="aliado" :class="aliadoClass">
    <div class="aliado__logo" :class="logoClass">
      <nuxt-picture :src="logo" :alt="alternativeText"/>
    </div>
    <div class="aliado__info" v-if="(title || description)">
      <h3 class="aliado__title" v-html="title"></h3>
      <div class="aliado__description" v-html="description"></div>
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
  logoClass?: string; 
}

defineProps<Props>();
</script>