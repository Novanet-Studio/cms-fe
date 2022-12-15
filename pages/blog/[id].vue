<template>
  <section>
    <img
      :src="articulo?.attributes?.imagen.data.attributes.url"
      :alt="articulo?.attributes?.imagen.data.attributes.alternativeText"
      class="articulo__image"
    />
    <h1 class="articulo__title">{{ articulo?.attributes?.titulo }}</h1>
    <div class="articulo__description" v-html="articulo?.attributes?.descripcion"></div>
  </section>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: "articulo",
});

const route = useRoute();
const id = route.params.id as string;
const { article: articulo } = useArticles({
  slug: id,
});
</script>
