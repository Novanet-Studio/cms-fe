<script lang="ts" setup>
import { DISCIPLINES_EXTRA_QUERY } from "~/schemas/modules/disciplines";

const { getDisciplines } = useDisciplines();
const graphql = useStrapiGraphQL();

const { data, pending: loading } = await useAsyncData(
  "disciplines-index",
  async () => {
    const [disciplinas, extra] = await Promise.all([
      getDisciplines(),
      graphql<any>(DISCIPLINES_EXTRA_QUERY),
    ]);

    return {
      disciplinas,
      carrusel: extra.data.carruseles[0]?.imagenes || [],
      normas: extra.data.norma?.normas || [],
      requisitos: extra.data.requisito?.requisitos || [],
      descuentos: extra.data.descuento?.descuentos || [],
    };
  }
);
</script>

<template>
  <div>
    <AppSlider :slides="data?.carrusel" />

    <section class="disciplinas">
      <div class="disciplinas__container">
        <h2 class="disciplinas__title">Disciplinas</h2>
        <div class="cards__wrapper">
          <template v-if="loading">
            <AppCardSkeleton v-for="i in 4" :key="i" />
          </template>
          <template v-else-if="data?.disciplinas?.length">
            <NuxtLink
              :to="`/disciplinas/${disciplina.link}`"
              v-for="(disciplina, index) in data.disciplinas"
              :key="index"
            >
              <AppCard
                :logo="disciplina.icono?.url"
                :alternativeText="disciplina.icono?.alternativeText"
                :title="disciplina.nombre"
                description="Ver información y planes"
              />
            </NuxtLink>
          </template>
        </div>
      </div>
    </section>

    <AppHighlight
      estilo="highlight"
      title="Nuestra piscina es un <br /> lugar de encuentro, es nuestra <br /> casa, es CCS Multisport"
      description="Esta piscina alberga los sueños y las ilusiones de muchos y el escape de la rutina para otros. Aquí nadan los que entrenan duro, los que entrenan para competir, para relajarse y para llevar una una vida saludable"
      image="https://res.cloudinary.com/novanet-studio/image/upload/v1679082237/ccs-multisport/cms_disciplinas_hombre_nadando_estilo_mariposa_8740ad8328.webp"
      url="/disciplinas/natacion"
      alt="Hombre nadando estilo mariposa"
    />

    <div class="dots"></div>

    <section class="box" v-if="data?.requisitos?.length">
      <div>
        <h3 class="box__title">{{ data.requisitos[0]?.titulo }}</h3>
        <div v-html="data.requisitos[0]?.descripcion"></div>
      </div>
    </section>

    <section class="box" v-if="data?.descuentos?.length">
      <div>
        <h3 class="box__title">{{ data.descuentos[0]?.titulo }}</h3>
        <div v-html="data.descuentos[0]?.descripcion"></div>
      </div>
    </section>

    <div v-if="data?.normas?.length">
      <AppItemsList :items="data.normas" :defaultOpened="false" />
    </div>
  </div>
</template>

<style scoped>
:global(.box > div > div > ul ul) {
  @apply list-disc pl-4;
}
:global(.box > div > div > ul p) {
  @apply text-lg;
}
:global(.box > div > div > ul p + ul) {
  @apply pl-2;
}
:global(.box > div > div > p + ul) {
  @apply list-disc pl-4;
}
</style>
