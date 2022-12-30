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
  <div class="disciplinas__button">
    <app-button
      class="button--blue"
      prefix="fas"
      iconName="caret-left"
      iconSize="1x"
      @click="$router.push('/disciplinas')"
    >
      Volver
    </app-button>
  </div>

  <section
    class="box"
    v-html="disciplina?.attributes?.descripcion || `<span>Cargando...</span>`"
  ></section>
  <div class="dots">
    <logo-dots />
  </div>

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
  </section>
  <div class="dots">
    <logo-dots />
  </div>

  <section v-if="disciplina?.attributes.planes.length >= 1" class="box">
    <h2 class="summary-title">Planes</h2>
    <div v-for="(plan, index) in disciplina?.attributes.planes" :key="index">
      <div v-html="plan.planes"></div>
    </div>
  </section>
  <div class="dots">
    <logo-dots />
  </div>
  <section class="box">
    <h3 class="box__title">
      {{ disciplina?.attributes.informacion_adicional.titulo }}
    </h3>
    <p
      v-html="
        disciplina?.attributes.informacion_adicional.descripcion ||
        `<span>Cargando...</span>`
      "
    ></p>
  </section>
  <div class="dots">
    <logo-dots />
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const id = route.params.id as string;
const { discipline: disciplina } = useDisciplines({
  link: id,
});
</script>
