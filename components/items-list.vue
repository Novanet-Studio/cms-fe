<template>
  <section class="box--noborder">
    <accordion-list
      v-model:state="state"
      :open-multiple-items="openMultipleItems"
      ref="accordionListRef"
    >
      <accordion-item
        v-for="(item, index) in items"
        :key="index"
        :defaultOpened="defaultOpened"
      >
        <template #summary>
          <div class="summary">
            <div class="summary-icon-container" v-if="item.icono">
              <img
                class="summary-icon"
                :src="item.icono.data.attributes.url"
                :alt="item.icono.data.attributes.alternativeText"
              />
            </div>
            <h2 v-if="item.titulo" class="summary-title">
              {{ item.titulo }}
            </h2>
            <h2 v-else class="summary-title">
              {{ item.attributes.titulo }}
            </h2>
          </div>
        </template>
        <template #icon>⌃</template>

        <div
          v-if="item.descripcion"
          class="summary-content"
          v-html="item.descripcion"
        ></div>

        <div
          v-else
          class="summary-content"
          v-html="item.attributes.descripcion"
        ></div>

        <div
          v-if="item.horarios"
          class="summary-content"
          v-html="item.horarios"
        ></div>

        <div
          v-if="item.planes"
          class="summary-content"
          v-html="item.planes"
        ></div>
      </accordion-item>
    </accordion-list>
  </section>
</template>

<script lang="ts" setup>
type Props = {
  items: any;
  defaultOpened?: boolean;
};

type State = Record<string, boolean>;
const accordionListRef = ref();

const state = ref<State>({});
const openMultipleItems = ref(false);

// watch(state, () => {
//   console.log(state.value);
// });

defineProps<Props>();
</script>

<style scoped>
:global(.accordion-list) {
  @apply p-3 border rounded-xl border-light-gray !important;
}

:global(.accordion-list .accordion-item) {
  @apply shadow shadow-xl mt-6 px-6 bg-gradient-to-tr from-white to-light-gray
  <sm:(px-2);
}

:global(.accordion-list .accordion-item:first-child) {
  @apply mt-0;
}

:global(.accordion-list .accordion-item:last-child) {
  @apply mb-0;
}

:global(.accordion-list .accordion-item--open) {
  @apply pb-20;
}

:global(.accordion-list .accordion-item--open > .accordion-item__summary) {
  @apply bg-transparent border-transparent;
}

:global(.accordion-item__summary-icon) {
  @apply text-secondary;
}

:global(.accordion-list .accordion-item > .accordion-item__content) {
  @apply bg-transparent;
}

:global(
    .accordion-list
      .accordion-item
      > .accordion-item__content
      > .summary-content
  ) {
  @apply mb-6;
}

:global(
    .accordion-list
      .accordion-item
      > .accordion-item__content
      > .summary-content
      > ol
  ) {
  @apply list-none;
  counter-reset: item;
}

:global(
    .accordion-list
      .accordion-item
      > .accordion-item__content
      > .summary-content
      > ol
      > li
  ) {
  @apply my-4;
  counter-increment: item;
}

:global(
    .accordion-list
      .accordion-item
      > .accordion-item__content
      > .summary-content
      > ol
      > li:before
  ) {
  @apply font-bold mr-1;
  content: counter(item) ".";
}

:global(.accordion-list .accordion-item > .accordion-item__summary) {
  @apply bg-transparent;
}
</style>
