<script lang="ts" setup>
import { INDEX_QUERY } from "~/schemas/index-page";

const graphql = useStrapiGraphQL();

const { data } = await useAsyncData(
  async (): Promise<{
    inicio?: CMS.SingleTypeIndex_Inicio;
    carrusel: CMS.Image[];
    disciplinas: CMS.Discipline[];
    empresa?: CMS.SingleTypeEmpresa;
    aliados: CMS.Ally[];
  } | null> => {
    try {
      const response = await graphql<CMS.Response<CMS.SingleTypeIndex>>(
        INDEX_QUERY
      );

      if (!response.data) {
        throw new Error("No data returned from GraphQL query");
      }

      return {
        inicio: response.data.inicio,
        carrusel: response.data.carruseles?.[0]?.imagenes || [],
        disciplinas: response.data.disciplinas || [],
        empresa: response.data.empresa,
        aliados: response.data.aliados || [],
      };
    } catch (error) {
      console.error("Error fetching index data:", error);
      return null;
    }
  }
);
</script>

<template>
  <div>
    <client-only>
      <AppHero
        v-if="data?.inicio?.principal"
        :titulo="data.inicio.principal.titulo"
        :descripcion="data.inicio.principal.descripcion"
        :url="data.inicio.principal.imagen?.url"
        :alternativeText="data.inicio.principal.imagen?.alternativeText"
      />

      <AppSlider
        v-if="data?.carrusel && data?.carrusel?.length > 0"
        :slides="data?.carrusel"
      />

      <section class="disciplinas">
        <div class="disciplinas__container">
          <h2 class="disciplinas__title">Disciplinas</h2>
          <div class="cards__wrapper">
            <nuxt-link
              :to="`/disciplinas/${disciplina.link}`"
              v-for="(disciplina, index) in data?.disciplinas"
              :key="index"
            >
              <AppCard
                :logo="disciplina.icono?.url ?? ''"
                :alternativeText="disciplina.icono?.alternativeText ?? ''"
                :title="disciplina.nombre"
                description="Ver información y planes"
              />
            </nuxt-link>
          </div>
        </div>
      </section>

      <AppHighlight
        v-if="data?.empresa?.profesionales"
        estilo="highlight"
        :title="data.empresa.profesionales.titulo"
        :description="data.empresa.profesionales.descripcion"
        :image="data.empresa.profesionales.imagen?.url ?? ''"
        :alt="data.empresa.profesionales.imagen?.alternativeText ?? ''"
        buttonText="Ver profesores"
        url="/profesionales"
      />

      <section class="mensaje" v-if="data?.inicio?.mensaje">
        <div class="mensaje__container">
          <h2 class="mensaje__title">
            {{ data.inicio.mensaje.titulo }}
          </h2>
          <p class="text-center mb-8 text-lg mt-4">
            {{ data.inicio.mensaje.descripcion }}
          </p>
          <AppButton class="button--blue" url="/disciplinas"
            >Conoce más</AppButton
          >
        </div>
      </section>

      <section class="aliados">
        <div class="aliados__wrapper">
          <h2 class="aliados__title">Aliados</h2>
          <AppBasic
            v-for="(aliado, index) in data?.aliados"
            :link="aliado.link"
            :logo="aliado.imagen?.url"
            :alternativeText="aliado.imagen?.alternativeText"
            logoClass="basic__logo--index"
            :key="index"
          />
        </div>
      </section>
    </client-only>
  </div>
</template>
