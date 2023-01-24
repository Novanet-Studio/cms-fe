<template>
  <div class="swiper">
    <swiper
      :autoplay="{ delay: 6000, disableOnInteraction: false }"
      :slider-per-view="1"
      :space-between="0"
      loop
      navigation
      :modules="[Autoplay, Navigation, Pagination]"
    >
      <swiper-slide v-for="(articulo, index) in articulos" :key="index">
        <highlight
          estilo="highlight-slide"
          :title="articulo.attributes.titulo"
          :description="excerpt(articulo.attributes.descripcion, 720)"
          :image="articulo.attributes.imagen.data.attributes.url"
          :alt="articulo.attributes.imagen.data.attributes.alternativeText"
          :url="`/blog/${articulo.attributes.slug}`"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts" setup>
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const { articles: articulos, loading } = useArticles();

const excerpt = (string: string, indexEnd: number) => {
  const subconcat = string.substring(0, indexEnd).concat("...");
  return subconcat;
};
</script>
