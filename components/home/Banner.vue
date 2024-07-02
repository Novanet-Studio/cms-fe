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
  <section class="grid lg:grid-cols-[26.5rem_1fr] max-h-[33.75rem]">
    <aside
      class="bg-[var(--color-tertiary)] text-white p-10 flex flex-col justify-center gap-4 rounded-l-md"
    >
      <h2 class="font-black text-[44px] leading-[50px] text-balance">
        Bienvenidos al Ccs MultiSport
      </h2>
      <p class="text-xl">
        Somos un centro deportivo integral para todo público; cada deportista es
        un mundo diferente, atenderlo es el motivo que nos mueve a superarnos
        para ser cada día mejor.
      </p>
    </aside>
    <UCarousel
      v-slot="{ item }"
      :items="items"
      :ui="{ item: 'basis-full' }"
      class="rounded-r-lg overflow-hidden"
      arrows
    >
      <!-- :next-button="{ icon: 'i-fa-solid-chevron-right' }"
      :prev-button="{ icon: 'i-fa-solid-chevron-left' }" -->
      <img :src="item" class="w-full" draggable="false" />
    </UCarousel>
  </section>
</template>
