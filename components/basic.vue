<template>
  <div class="basic" :class="viewClass">
    <div class="basic__logo" :class="logoClass">
      <a :href="to || link" :target="linkTarget ?? ''">
        <nuxt-picture :src="logo" :alt="alternativeText" />
      </a>
    </div>
    <div class="basic__info">
      <h3 v-if="title && !to" class="basic__title" v-html="title"></h3>
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
  link?: string;
  linkTarget?: string;
  to?: string;
};

defineProps<Props>();
</script>
