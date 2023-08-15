<template>
  <div class="swiper" v-if="slides.length">
    <swiper
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
    </swiper>
  </div>
</template>

<script lang="ts" setup>
import { Autoplay, Navigation, Pagination } from "swiper/modules";

type Props = {
  slides: any;
};

defineProps<Props>();
</script>
