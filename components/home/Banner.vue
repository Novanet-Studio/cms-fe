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
  <CommonBanner
    title="Bienvenidos al Ccs MultiSport"
    description="Somos un centro deportivo integral para todo público; cada deportista es un mundo diferente, atenderlo es el motivo que nos mueve a superarnos para ser cada día mejor."
    content-position="left"
    :ui="{
      aside: {
        base: 'bg-[var(--color-tertiary)] justify-center',
        title: 'text-[44px]',
      },
    }"
  >
    <template #main>
      <UCarousel
        v-slot="{ item }"
        :items="items"
        :ui="{ item: 'basis-full' }"
        class="overflow-hidden rounded-r-md"
      >
        <img :src="item" class="w-full" draggable="false" />
      </UCarousel>
    </template>
  </CommonBanner>
</template>
