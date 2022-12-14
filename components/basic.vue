<template>
  <div class="basic" :class="viewClass">
    <div class="basic__logo" :class="logoClass">
      <nuxt-picture :src="logo" :alt="alternativeText" />
    </div>
    <div class="basic__info" v-if="title">
      <h3 class="basic__title" v-html="title"></h3>
    </div>
    <div class="basic__info" v-if="description">
      <h3 class="basic__description" v-html="description"></h3>
    </div>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  logo: string;
  alternativeText: string;
  title?: string;
  description?: string;
  viewClass?: string;
  logoClass?: string;
};

defineProps<Props>();
</script>
