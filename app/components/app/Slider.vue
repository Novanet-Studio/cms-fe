<script lang="ts" setup>
import { Autoplay, Navigation, Pagination } from "swiper/modules";

type Props = {
  slides: CMS.Image[];
};

const props = defineProps<Props>();
</script>

<template>
  <div class="swiper" v-if="props.slides && props.slides.length > 0">
    <swiper-container
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :slider-per-view="1"
      :space-between="0"
      loop
      navigation
      :modules="[Autoplay, Navigation, Pagination]"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <NuxtImg :src="slide?.url" class="w-full min-h-[100dvh]" />
      </swiper-slide>
    </swiper-container>
  </div>
</template>
