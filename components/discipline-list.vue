<template>
  <accordion-list v-model:state="state" :open-multiple-items="openMultipleItems" ref="accordionListRef">
    <accordion-item>
      <template #summary>
        <div class="flex items-center">
          <app-icon logo="natacion.svg" />
          <h4 class="ml-4">My titulo</h4>
        </div>
      </template>
      <template #icon>+</template>
      <section>
        <div class="w-full mb-10">
          <h5 class="text-xl text-secondary font-bold mb-2">Matronación</h5>
          <p class="text-black text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae distinctio aut
            sapiente explicabo cumque,
            tempora mollitia cum porro saepe quis blanditiis laboriosam velit harum in, dolor voluptatibus ipsam laborum
            facere quibusdam tenetur, repudiandae eius! Dolores laboriosam obcaecati voluptas, deserunt, quam reiciendis
            dolor id expedita ducimus mollitia enim possimus, animi sapiente iste quisquam molestias eos in nihil quod
            dolore? Tempore, voluptatem.</p>
        </div>
        <div class="flex">
          <div class="flex-1">
            <h5 class="text-lg font-extrabold text-secondary mb-4">Condiciones</h5>
            <ul class="list-disc ml-4 leading-6">
              <li>list - 1</li>
              <li>list - 2</li>
              <li>list - 3</li>
              <li>list - 4</li>
              <li>list - 5</li>
            </ul>
          </div>
          <div class="flex-1">
            <h5 class="text-lg font-extrabold text-secondary mb-8">Horarios disponibles</h5>
            <span class="p-4 border border-[#231F20] rounded-full">Plan de 2 días. Lunes y miércoles</span>
          </div>
        </div>
      </section>
    </accordion-item>
  </accordion-list>
</template>

<script lang="ts" setup>
type State = Record<string, boolean>;
const accordionListRef = ref();

const state = ref<State>({});
const openMultipleItems = ref(false);

// onMounted(() => {
//   console.log(accordionListRef.value);
// });

watch(state, () => {
  console.log(state.value);
});
</script>

<style scoped>
:global(.accordion-list) {
  @apply p-3 border rounded-[1.25rem];
}

:global(.accordion-list .accordion-item) {
  @apply border-none mt-0 shadow shadow-xl h-auto px-6 transition ease;
  @apply from-[#E6E7E8] bg-gradient-to-tl to-[#FFFFFF];
}

/* background: linear-gradient(149.7deg, #E6E7E8 19.91%, #FFFFFF 96.2%); */

:global(.accordion-list .accordion-item--open) {
  @apply h-auto;
}

:global(.accordion-list .accordion-item--open > .accordion-item__summary) {
  @apply bg-transparent text-black border-transparent text-xl text-secondary;
}

:global(.accordion-list .accordion-item--open > .accordion-item__summary:hover) {
  @apply text-[#02297c];
}

:global(.accordion-list .accordion-item > .accordion-item__content) {
  @apply mt-6 mb-6 bg-transparent;
}

:global(.accordion-list .accordion-item > .accordion-item__summary) {
  @apply bg-transparent;
}
</style>