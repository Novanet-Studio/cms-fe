<template>
  <div class="blog swiper">
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
          :image="articulo.attributes.imagen.data.attributes.url"
          :alt="articulo.attributes.imagen.data.attributes.alternativeText"
          :url="`/blog/${articulo.attributes.slug}`"
        />
      </swiper-slide>
    </swiper>
  </div>

  <section class="blog">
    <div class="blog__wrapper">
      <h2 class="blog__title">Artículos</h2>
      <template v-if="loading">
        <article-summary-skeletor v-for="i in 3" />
      </template>
      <template v-else>
        <article
          class="blog-item"
          v-for="(post, index) in articulos"
          :key="index"
        >
          <div class="blog-item__img-container">
            <nuxt-picture
              :src="post.attributes.imagen.data.attributes.url"
              :alt="post.attributes.imagen.data.attributes.alternativeText"
              class="blog-item__imagen"
            />
          </div>
          <div class="blog-item__info">
            <h3 class="blog-item__title">
              {{ post.attributes.titulo }}
            </h3>
            <div v-html="excerpt(post.attributes.descripcion, 90)"></div>
            <app-button
              class="button--yellow button--small blog-item__boton"
              :url="`/blog/${post.attributes.slug}`"
            >
              Leer más
            </app-button>
          </div>
        </article>
      </template>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const { articles: articulos, loading } = useArticles();

const excerpt = (string: string, indexEnd: number) => {
  const subconcat = string.substring(0, indexEnd).concat("...");
  return subconcat;
};
</script>
