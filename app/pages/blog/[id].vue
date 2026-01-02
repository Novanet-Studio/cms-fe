<script lang="ts" setup>
import MarkdownIt from "markdown-it";

const markdown = new MarkdownIt();
const route = useRoute();
const { getArticleBySlug } = useArticles();

definePageMeta({
  layout: "articulo",
});

const { data: articulo, pending: loading } = await useAsyncData(
  `article-${route.params.id}`,
  () => getArticleBySlug(route.params.id as string)
);
</script>

<template>
  <div>
    <ArticleSkeleton v-if="loading" />

    <section v-else-if="articulo">
      <h1 class="articulo__title mb-4">
        {{ articulo.titulo }}
      </h1>
      <template v-if="articulo.imagen?.url">
        <NuxtPicture
          :src="articulo.imagen.url"
          :alt="articulo.imagen.alternativeText"
          class="articulo__image"
        />
      </template>

      <div
        class="articulo__description"
        v-html="markdown.render(articulo.descripcion ?? '')"
      />
    </section>
  </div>
</template>
