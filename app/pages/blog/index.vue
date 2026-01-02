<script lang="ts" setup>
const { getArticles } = useArticles();

const { data: articulos, pending: loading } = await useAsyncData(
  "articles-list",
  () => getArticles()
);

const excerpt = (string: string, indexEnd: number) => {
  if (!string) return "";
  return string.substring(0, indexEnd).concat("...");
};
</script>

<template>
  <div>
    <div class="blog swiper">
      <swiper-container
        :autoplay="{ delay: 6000, disableOnInteraction: false }"
        :slides-per-view="1"
        :space-between="0"
        loop="true"
        navigation="true"
        pagination="true"
      >
        <swiper-slide v-for="(articulo, index) in articulos" :key="index">
          <AppHighlight
            estilo="highlight-slide"
            :title="articulo.titulo"
            :image="articulo.imagen?.url"
            :alt="articulo.imagen?.alternativeText"
            :url="`/blog/${articulo.slug}`"
          />
        </swiper-slide>
      </swiper-container>
    </div>

    <section class="blog">
      <div class="blog__wrapper">
        <h2 class="blog__title">Artículos</h2>

        <template v-if="loading">
          <BlogArticleSummarySkeleton v-for="i in 3" :key="i" />
        </template>

        <template v-else>
          <article
            class="blog-item"
            v-for="(post, index) in articulos"
            :key="index"
          >
            <div class="blog-item__img-container">
              <NuxtPicture
                v-if="post.imagen?.url"
                :src="post.imagen.url"
                :alt="post.imagen.alternativeText"
                class="blog-item__imagen"
              />
            </div>
            <div class="blog-item__info">
              <h3 class="blog-item__title">
                {{ post.titulo }}
              </h3>
              <div v-html="excerpt(post.descripcion, 90)"></div>
              <AppButton
                class="button--yellow button--small blog-item__boton"
                :url="`/blog/${post.slug}`"
              >
                Leer más
              </AppButton>
            </div>
          </article>
        </template>
      </div>
    </section>
  </div>
</template>
