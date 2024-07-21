<script setup lang="ts">
const items = [
  "https://picsum.photos/1920/1080?random=1",
  "https://picsum.photos/1920/1080?random=2",
  "https://picsum.photos/1920/1080?random=3",
  "https://picsum.photos/1920/1080?random=4",
  "https://picsum.photos/1920/1080?random=5",
  "https://picsum.photos/1920/1080?random=6",
];

const accordionItems = [
  {
    label: "Normas del centro deportivo",
    icon: "i-fa-solid-info-circle",
    content: "<ol><li>Regla 1</li> <li>Regla 2</li> <li>Regla 3</li></ol>",
    slot: "rules",
  },
  {
    label: "Normas del centro deportivo",
    icon: "i-fa-solid-info-circle",
    content: "<ol><li>Regla 1</li> <li>Regla 2</li> <li>Regla 3</li></ol>",
    slot: "rules",
  },
  {
    label: "Normas del centro deportivo",
    icon: "i-fa-solid-info-circle",
    content: "<ol><li>Regla 1</li> <li>Regla 2</li> <li>Regla 3</li></ol>",
    slot: "rules",
  },
];
</script>

<template>
  <section>
    <CommonBanner
      title="¿En qué podemos ayudarte?"
      description="Estás son las preguntas que responden a alguna de sus inquietudes. Contáctanos para mayor información"
      :ui="{
        aside: {
          base: '!bg-[#E6E7E8] justify-center',
          title: 'text-[var(--color-tertiary)]',
          description: 'text-[var(--color-tertiary)]',
        },
      }"
    >
      <template #main>
        <UCarousel
          v-slot="{ item }"
          :items="items"
          :ui="{ item: 'basis-full' }"
          class="overflow-hidden rounded-l-md"
        >
          <img :src="item" class="w-full" draggable="false" />
        </UCarousel>
      </template>
    </CommonBanner>

    <div class="mt-4 w-full">
      <h3 class="font-black text-3xl">Preguntas frecuentes</h3>

      <div class="grid lg:grid-cols-[1fr_25rem] lg:gap-8 mt-6">
        <div>
          <UAccordion
            class="rounded-xl"
            color="transparent"
            size="xl"
            :items="accordionItems"
            :ui="{
              container:
                'bg-gradient-to-r from-[#f3f3f4] to-[#E6E7E8] shadow-sm rounded-lg ring-1 ring-offset-8 ring-[#E6E7E8] border border-[#9E9E9E]',
              item: {
                base: 'text-[#001E61] font-black',
              },
            }"
          >
            <template #rules="{ item }">
              <div class="text-black" v-html="item.content"></div>
            </template>
          </UAccordion>
        </div>
        <div>Asde here...defineOptions</div>
      </div>
    </div>
  </section>
</template>
