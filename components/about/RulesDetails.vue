<script setup lang="ts">
const items = [
  {
    label: "Normas del centro deportivo",
    icon: "i-fa-solid-info-circle",
    content: "<ol><li>Regla 1</li> <li>Regla 2</li> <li>Regla 3</li></ol>",
    slot: "rules",
  },
];
</script>

<template>
  <section class="my-16">
    <h3 class="font-black text-[40px] text-center mt-[7.75rem] mb-10">
      También puede ver las normas en el siguiente desplegable
    </h3>
    <UAccordion
      class="rounded-xl"
      color="transparent"
      size="xl"
      :items="items"
      :ui="{
        container:
          'bg-gradient-to-r from-[#f3f3f4] to-[#E6E7E8] shadow-sm rounded-lg ring-1 ring-offset-8 ring-[#E6E7E8] border border-[#9E9E9E]',
        item: {
          base: 'text-[#001E61] font-black',
        },
      }"
    >
      <template #rules="{ item }">
        <div class="text-black" v-html="item.description"></div>
      </template>
    </UAccordion>
  </section>
</template>
