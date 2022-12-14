<template>
  <div class="basic" :class="viewClass">
    <div class="basic__logo" :class="logoClass">
      <nuxt-picture :src="logo" :alt="alternativeText" />
    </div>
    <div class="basic__info">
      <h3 
        v-if="title"
        class="basic__title" 
        v-html="title"></h3>
      <div
        v-if="description"
        class="basic__description"
        v-html="description"
      ></div>
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
