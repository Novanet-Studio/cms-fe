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
        <nuxt-picture
          :src="slide?.attributes?.url"
          sizes="xs:100vw sm:640 md:768 lg:1024 xl:1280 xxl:1920"
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
