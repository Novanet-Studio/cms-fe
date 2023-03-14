<template>
  <div class="card__outer">
    <div class="card__inner">
      <div class="card__elements">
        <div class="card__icon">
          <nuxt-img :src="logo" :alt="alternativeText" />
        </div>
        <h4 class="card__title">
          {{ title }}
        </h4>
        <p class="card__text">{{ description }}</p>       
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  logo: string;
  alternativeText: string;
  title: string;
  description: string;
};

type Emits = {
  (e: "click"): void;
};

defineProps<Props>();
defineEmits<Emits>();
</script>
