<template>
  <div class="swiper" v-if="slides.length">
    <swiper-container
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :slider-per-view="1"
      :space-between="0"
      loop
      navigation
      :modules="[Autoplay, Navigation, Pagination]"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <NuxtImg
          :src="slide?.attributes?.url"
          class="w-full"
        />
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script setup>
import { Autoplay, Navigation, Pagination } from "swiper/modules";

defineProps({
  slides: Array,
});
</script>
