<template>
  <div>
    <section class="disciplina__header">
      <img
        class="disciplina__cover"
        :src="disciplina?.attributes?.imagen.data.attributes.url"
        :alt="disciplina?.attributes?.imagen.data.attributes.alternativeText"
      />
      <div class="disciplina__icon-container">
        <div class="disciplina__icon-circle">
          <img
            class="disciplina__icon-image"
            :src="disciplina?.attributes?.icono.data.attributes.url"
          />
        </div>
        <h1 class="disciplina__title">
          {{ disciplina?.attributes?.nombre || "Cargando..." }}
        </h1>
      </div>
    </section>
    <div class="disciplinas__button">
      <app-button
        class="button--blue"
        prefix="fas"
        iconName="caret-left"
        iconSize="1x"
        url="/disciplinas"
      >
        Volver
      </app-button>
    </div>

    <section class="box">
      <div
        v-html="
          disciplina?.attributes?.descripcion || `<span>Cargando...</span>`
        "
      ></div>
    </section>

    <div v-if="disciplina?.attributes.clases?.length >= 1">
      <items-list :items="disciplina?.attributes.clases" />
    </div>

    <section v-if="disciplina?.attributes.horarios.length >= 1" class="box">
      <h2 class="summary-title">Horarios</h2>
      <div
        v-for="(horario, index) in disciplina?.attributes.horarios"
        :key="index"
      >
        <div v-html="horario.horarios"></div>
      </div>
      <span class="dots"> </span>
    </section>

    <section v-if="disciplina?.attributes?.planes.length >= 1" class="box">
      <h2 class="summary-title">Planes</h2>
      <div v-for="(plan, index) in disciplina?.attributes?.planes" :key="index">
        <div v-html="plan.planes"></div>
      </div>
      <span class="dots"> </span>
    </section>

    <section class="box">
      <div>
        <h3 class="box__title">
          {{ disciplina?.attributes?.informacion_adicional?.titulo }}
        </h3>
        <p
          v-html="
            disciplina?.attributes?.informacion_adicional?.descripcion ||
            `<span>Cargando...</span>`
          "
        ></p>
      </div>
    </section>

    <section class="box">
      <div>
        <h3 class="box__title">
          {{ disciplina?.attributes?.requisitos?.titulo }}
        </h3>
        <p
          v-html="
            disciplina?.attributes?.requisitos?.descripcion ||
            `<span>Cargando...</span>`
          "
        ></p>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const id = route.params.id as string;

const { discipline: disciplina } = useDisciplines({
  link: id,
});
</script>
