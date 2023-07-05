<template>
  <section v-if="loading">
    <article-skeletor />
  </section>
  <section v-else>
    <template v-if="articulo?.attributes?.imagen.data.attributes.url">
      <nuxt-picture
        :src="articulo?.attributes?.imagen.data.attributes.url"
        :alt="articulo?.attributes?.imagen.data.attributes.alternativeText"
        class="articulo__image"
      />
    </template>
    <h1 class="articulo__title">
      {{ articulo?.attributes?.titulo }}
    </h1>
    <div
      class="articulo__description"
      v-html="markdown.render(articulo?.attributes?.descripcion)"
    />
  </section>
</template>
<script lang="ts" setup>
import MarkdownIt from "markdown-it";
const markdown = new MarkdownIt();

definePageMeta({
  layout: "articulo",
});

const route = useRoute();
const id = route.params.id as string;
const { article: articulo, loading } = useArticles({
  slug: id,
});

loading.value = true;
</script>
