<template>
  <section class="disciplina__box--noborder">
    <accordion-list
      v-model:state="state"
      :open-multiple-items="openMultipleItems"
      ref="accordionListRef"
    >
      <accordion-item v-for="(clase, index) in items" :key="index">
        <template #summary>
          <div class="disciplina__summary">
            <div class="disciplina__summary-icon-container" v-if="clase.icono">
              <img
                class="disciplina__summary-icon"
                :src="clase.icono.data.attributes.url"
                :alt="clase.icono.data.attributes.alternativeText"
              />
            </div>

            <h2 class="disciplina__summary-title">{{ clase.titulo }}</h2>
          </div>
        </template>
        <template #icon>⌃</template>

        <div
          class="disciplina__summary-content"
          v-html="clase.descripcion"
        ></div>
      </accordion-item>
    </accordion-list>
  </section>
</template>

<script lang="ts" setup>
type Props = {
  items: any;
};

type State = Record<string, boolean>;
const accordionListRef = ref();

const state = ref<State>({});
const openMultipleItems = ref(false);

watch(state, () => {
  console.log(state.value);
});

defineProps<Props>();
</script>

<style scoped>
:global(.accordion-list) {
  @apply p-3 border rounded-xl border-light-gray !important;
}

:global(.accordion-list .accordion-item) {
  @apply mt-5 shadow shadow-xl h-auto px-6 transition ease bg-gradient-to-tr from-white to-light-gray;
}

:global(.accordion-list .accordion-item--open) {
  @apply h-auto;
}

:global(.accordion-list .accordion-item--open > .accordion-item__summary) {
  @apply bg-transparent border-transparent;
}

:global(.accordion-item__summary-icon) {
  @apply text-secondary;
}

:global(.accordion-list .accordion-item > .accordion-item__content) {
  @apply mt-6 mb-6 bg-transparent;
}

:global(.accordion-list .accordion-item > .accordion-item__summary) {
  @apply bg-transparent;
}
</style>
