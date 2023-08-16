<template>
  <div>
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
      <app-button
        class="button--blue"
        prefix="fas"
        iconName="caret-left"
        iconSize="1x"
        url="/profesionales"
      >
        Volver
      </app-button>
    </div>

    <section class="perfil">
      <div class="perfil__image-wrapper">
        <img
          :src="profesor?.attributes.imagen.data.attributes.url"
          :alt="profesor?.attributes.imagen.data.attributes.alternativeText"
          class="perfil__image"
        />
      </div>
      <div>
        <h1
          class="perfil__titulo"
          v-html="profesor?.attributes.nombre_apellido"
        ></h1>
        <div
          v-html="profesor?.attributes.extracto || `<span>Cargando...</span>`"
          class="perfil__extracto"
        ></div>
      </div>
    </section>

    <section class="box">
      <div>
        <h3 class="box__title">Resumen curricular</h3>
        <div v-if="profesor?.attributes.bio">
          <p
            v-html="
              markdown.render(profesor?.attributes.bio) ||
              `<span>Cargando...</span>`
            "
          ></p>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import MarkdownIt from "markdown-it";
const markdown = new MarkdownIt();

const route = useRoute();
const id = route.params.id as string;
const { profesional: profesor } = useProfesionals({
  link: id,
});
</script>
