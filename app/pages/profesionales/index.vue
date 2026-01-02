<script lang="ts" setup>
import { EMPRESA_PROF_HEADER_QUERY } from "~/schemas/modules/profesionales";

const { getProfesionals } = useProfesionals();
const graphql = useStrapiGraphQL();

const { data } = await useAsyncData("profesionales-index", async () => {
  try {
    const [profesores, headerData] = await Promise.all([
      getProfesionals(),
      graphql<any>(EMPRESA_PROF_HEADER_QUERY),
    ]);

    return {
      profesores,
      empresa: headerData.data.empresa?.profesionales || null,
    };
  } catch (err) {
    console.error(err);
    return { profesores: [], empresa: null };
  }
});
</script>

<template>
  <div v-if="data">
    <AppHighlight
      v-if="data.empresa"
      estilo="highlight"
      :title="data.empresa.titulo"
      :description="data.empresa.descripcion"
      image="https://res.cloudinary.com/novanet-studio/image/upload/v1679081889/ccs-multisport/cms_quienes_somos_bfa5f868d7.webp"
      :alt="data.empresa.imagen?.alternativeText"
    />

    <div class="dots"></div>

    <div class="disciplinas__button">
      <AppButton
        class="button--blue"
        prefix="fas"
        iconName="caret-left"
        iconSize="1x"
        url="/quienes-somos"
      >
        Volver a la página anterior
      </AppButton>
    </div>

    <section class="profesionales">
      <div class="profesionales__container">
        <h2 class="profesionales__title">Nuestros profesores</h2>
        <div class="cards__wrapper">
          <nuxt-link
            :to="`/profesionales/${profesor.link}`"
            v-for="(profesor, index) in data.profesores"
            :key="index"
            class="profesionales__item"
          >
            <AppCard
              :logo="profesor.imagen?.url"
              :alternativeText="profesor.imagen?.alternativeText"
              :title="profesor.nombre_apellido"
              description=""
            />
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>
