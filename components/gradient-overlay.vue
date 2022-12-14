<template>
  <div class="tienda__category">
    <nuxt-picture :src="image" quality=".7" :alt="alternativeText" />
    <div class="tienda__overlay">
      <h3 class="tienda__name">{{ text }}</h3>
    </div>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  image: string;
  alternativeText: string;
  text: string;
};

defineProps<Props>();
</script>
