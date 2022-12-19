<template>
  <section>
    <template v-if="articulo?.attributes?.imagen.data.attributes.url">
      <nuxt-picture
        :src="articulo?.attributes?.imagen.data.attributes.url"
        :alt="articulo?.attributes?.imagen.data.attributes.alternativeText"
        class="articulo__image"
      />
    </template>
    <template v-else> Cargando... </template>
    <h1 class="articulo__title">
      {{ articulo?.attributes?.titulo ?? "Cargando.." }}
    </h1>
    <div
      class="articulo__description"
      v-html="articulo?.attributes?.descripcion ?? `<p>Cargando...</p>`"
    ></div>
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
