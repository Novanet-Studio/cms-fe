<template>
  <section class="disciplina__header">
    <img
      class="disciplina__cover"
      :src="disciplina?.attributes?.imagen.data.attributes.url"
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
  <section class="disciplina__box">
    <p
      v-html="disciplina?.attributes?.descripcion || `<span>Cargando...</span>`"
    ></p>
  </section>
  <div class="disciplina__dots">
    <logo-dots />
  </div>

  <div v-if="disciplina?.attributes.clases?.length >= 1">
    <items-list :items="disciplina?.attributes.clases" />
  </div>

  <section
    v-if="disciplina?.attributes.horarios.length >= 1"
    class="disciplina__box"
  >
    <h2 class="disciplina__summary-title">Horarios</h2>
    <div
      v-for="(horario, index) in disciplina?.attributes.horarios"
      :key="index"
    >
      <div v-html="horario.horarios"></div>
    </div>
  </section>
  <div class="disciplina__dots">
    <logo-dots />
  </div>

  <section
    v-if="disciplina?.attributes.planes.length >= 1"
    class="disciplina__box"
  >
    <h2 class="disciplina__summary-title">Planes</h2>
    <div v-for="(plan, index) in disciplina?.attributes.planes" :key="index">
      <div v-html="plan.planes"></div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const route = useRoute();
const id = route.params.id as string;
const { discipline: disciplina } = useDisciplines({
  link: id,
});
</script>
