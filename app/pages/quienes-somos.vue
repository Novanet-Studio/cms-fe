<script lang="ts" setup>
import { ABOUT_US_QUERY } from "~/schemas/about-us-page";

const graphql = useStrapiGraphQL();

const { data } = await useAsyncData("quienes-somos", async () => {
  try {
    const query = await graphql<any>(ABOUT_US_QUERY);

    return {
      principal: query.data.empresa?.principal || null,
      identidad: query.data.empresa?.identidad || [],
      profesionales: query.data.empresa?.profesionales || null,
      trabajo: query.data.empresa?.trabajo || [],
      requisitos: query.data.requisito?.requisitos || [],
      normas: query.data.norma?.normas || [],
    };
  } catch (err) {
    console.error(err);

    return {
      principal: null,
      identidad: [],
      profesionales: null,
      trabajo: [],
      requisitos: [],
      normas: [],
    };
  }
});
</script>

<template>
  <div>
    <AppHero
      v-if="data?.principal"
      :titulo="data.principal.titulo"
      :descripcion="data.principal.descripcion"
      :url="data.principal.imagen?.url"
      :alternativeText="data.principal.imagen?.alternativeText"
    />

    <AppHighlight
      v-if="data?.profesionales"
      estilo="highlight"
      :title="data.profesionales.titulo"
      :description="data.profesionales.descripcion"
      image="https://res.cloudinary.com/novanet-studio/image/upload/v1679063407/ccs-multisport/cms_collage_8_coaches_3f5d08b048.webp"
      alt="Nadadora con lentes puestos mirando hacia la derecha"
      buttonText="Ver profesores"
      url="/profesionales"
    />

    <section class="identidad">
      <AppIdentCard
        v-for="(item, index) in data?.identidad"
        :imagen="item.imagen?.url"
        :alternativeText="item.imagen?.alternativeText"
        :title="item.titulo"
        :description="item.descripcion"
        :key="index"
      />
    </section>

    <div class="dots"></div>

    <div v-if="data?.trabajo?.length >= 1">
      <AppItemsList :items="data!.trabajo" :defaultOpened="false" />
    </div>

    <div v-if="data?.requisitos?.length >= 0">
      <AppItemsList :items="data!.requisitos" :defaultOpened="false" />
    </div>

    <div v-if="data?.normas?.length >= 0">
      <AppItemsList :items="data!.normas" :defaultOpened="false" />
    </div>
  </div>
</template>
