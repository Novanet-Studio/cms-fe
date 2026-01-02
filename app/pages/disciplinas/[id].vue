<script lang="ts" setup>
const route = useRoute();
const { getDisciplineByLink } = useDisciplines();

const { data: disciplina } = await useAsyncData(
  `discipline-${route.params.id}`,
  () => getDisciplineByLink(route.params.id as string)
);
</script>

<template>
  <div>
    <div v-if="disciplina">
      <section class="disciplina__header">
        <img
          class="disciplina__cover"
          v-if="disciplina.imagen?.url"
          :src="disciplina.imagen.url"
          :alt="disciplina.imagen.alternativeText"
        />
        <div class="disciplina__icon-container">
          <div class="disciplina__icon-circle">
            <img
              class="disciplina__icon-image"
              v-if="disciplina.icono?.url"
              :src="disciplina.icono.url"
            />
          </div>
          <h1 class="disciplina__title">{{ disciplina.nombre }}</h1>
        </div>
      </section>

      <div class="disciplinas__button">
        <AppButton
          class="button--blue"
          prefix="fas"
          iconName="caret-left"
          url="/disciplinas"
        >
          Volver
        </AppButton>
      </div>

      <section class="box">
        <div v-html="disciplina.descripcion"></div>
      </section>

      <div v-if="disciplina.clases?.length">
        <AppItemsList :items="disciplina.clases" />
      </div>

      <section v-if="disciplina.horarios?.length" class="box">
        <h2 class="summary-title">Horarios</h2>
        <div v-for="(horario, index) in disciplina.horarios" :key="index">
          <div v-html="horario.horarios"></div>
        </div>
        <span class="dots"></span>
      </section>

      <section v-if="disciplina.planes?.length" class="box">
        <h2 class="summary-title">Planes</h2>
        <div v-for="(plan, index) in disciplina.planes" :key="index">
          <div v-html="plan.planes"></div>
        </div>
        <span class="dots"></span>
      </section>

      <section class="box" v-if="disciplina.informacion_adicional">
        <div>
          <h3 class="box__title">
            {{ disciplina.informacion_adicional.titulo }}
          </h3>
          <div v-html="disciplina.informacion_adicional.descripcion"></div>
        </div>
      </section>

      <section class="box" v-if="disciplina.requisitos">
        <div>
          <h3 class="box__title">{{ disciplina.requisitos.titulo }}</h3>
          <div v-html="disciplina.requisitos.descripcion"></div>
        </div>
      </section>
    </div>

    <div v-else>
      <p class="text-center mt-10">Cargando...</p>
    </div>
  </div>
</template>

<style scoped>
ul {
  @apply list-disc list-inside;
}
:global(.summary-content > ul) {
  @apply list-disc pl-5;
}
:global(.summary-content > ul > ul) {
  @apply list-disc pl-4;
}
:global(.summary-content > ul > li > p) {
  @apply inline-block;
}
:global(.summary-content > ul > li > p + ul) {
  @apply list-disc pl-4;
}
:global(.summary-content > h3 + ul ul ul) {
  @apply list-disc;
}
:global(.summary-content > h3 + ul ul) {
  @apply list-disc pl-4;
}
:global(.box > div > h3 + div > ul p) {
  @apply inline-block;
}
:global(.box > div > h3 + div > ul) {
  @apply list-disc pl-4;
}
:global(.box p + ul) {
  @apply list-disc pl-4;
}
:global(.box > h2 + div > div > ul) {
  @apply list-disc pl-4;
}
</style>
