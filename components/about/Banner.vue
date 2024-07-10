<script setup lang="ts">
const items = [
  "https://picsum.photos/1920/1080?random=1",
  "https://picsum.photos/1920/1080?random=2",
  "https://picsum.photos/1920/1080?random=3",
  "https://picsum.photos/1920/1080?random=4",
  "https://picsum.photos/1920/1080?random=5",
  "https://picsum.photos/1920/1080?random=6",
];
</script>

<template>
  <section class="grid lg:grid-cols-[1fr_27rem] max-h-[33.75rem]">
    <UCarousel
      v-slot="{ item }"
      :items="items"
      :ui="{ item: 'basis-full' }"
      class="rounded-l-lg overflow-hidden"
    >
      <img :src="item" class="w-full" draggable="false" />
    </UCarousel>
    <aside
      class="bg-[var(--color-secondary)] text-white p-8 flex flex-col gap-4 rounded-r-md"
    >
      <h2 class="font-black text-[37px] leading-[50px] text-pretty">
        Somos un Centro Deportivo Integral
      </h2>
      <p class="text-xl">
        Que busca destacarse en la integración de los sectores del deporte y la
        salud. Nuestro principal objetivo es mejorar la calidad de vida de
        nuestros usuarios mediante la enseñanza y práctica de la natación,
        acondicionamiento físico y aplicación de terapias que proporcionan
        soluciones a los problemas que afectan la salud.
      </p>
    </aside>
  </section>
</template>
