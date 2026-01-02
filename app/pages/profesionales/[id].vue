<script lang="ts" setup>
import MarkdownIt from "markdown-it";
const markdown = new MarkdownIt();

const route = useRoute();
const id = route.params.id as string;
const { getProfesionalByLink } = useProfesionals();

const { data: profesor } = await useAsyncData(`profesional-${id}`, () =>
  getProfesionalByLink(id)
);
</script>

<template>
  <div v-if="profesor">
    <section class="disciplina__header">
      <img
        class="disciplina__cover"
        src="https://res.cloudinary.com/novanet-studio/image/upload/v1679078540/ccs-multisport/cms_natacion_mujer_nadando_crawl_73586e8d41.webp"
        alt="Mujer nadando estilo crawl"
      />
      <div class="disciplina__icon-container">
        <div class="disciplina__icon-circle">
          <img
            class="disciplina__icon-image"
            src="https://res.cloudinary.com/novanet-studio/image/upload/v1679059107/ccs-multisport/cms_natacion_cff093757a.svg"
          />
        </div>
        <h1 class="disciplina__title">Nuestros profesores</h1>
      </div>
    </section>

    <div class="disciplinas__button">
      <AppButton
        class="button--blue"
        prefix="fas"
        iconName="caret-left"
        iconSize="1x"
        url="/profesionales"
      >
        Volver
      </AppButton>
    </div>

    <section class="perfil">
      <div class="perfil__image-wrapper">
        <img
          v-if="profesor.imagen?.url"
          :src="profesor.imagen.url"
          :alt="profesor.imagen.alternativeText"
          class="perfil__image"
        />
      </div>
      <div>
        <h1 class="perfil__titulo" v-html="profesor.nombre_apellido"></h1>
        <div
          v-html="profesor.extracto || `<span>Cargando...</span>`"
          class="perfil__extracto"
        ></div>
      </div>
    </section>

    <section class="box">
      <div>
        <h3 class="box__title">Resumen curricular</h3>
        <div v-if="profesor.bio">
          <p v-html="markdown.render(profesor.bio)"></p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* DO NOT REMOVE. FIX BULLETS ISSUE FOR PROFESSIONALS DETAIL PAGE */
:global(.box > div > div > p > ul) {
  @apply list-disc list-inside;
}
</style>
