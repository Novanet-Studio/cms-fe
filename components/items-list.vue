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
