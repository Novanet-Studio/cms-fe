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
    title="Somos un Centro Deportivo Integral"
    description="Que busca destacarse en la integración de los sectores del deporte y la salud. Nuestro principal objetivo es mejorar la calidad de vida de nuestros usuarios mediante la enseñanza y práctica de la natación, acondicionamiento físico y aplicación de terapias que proporcionan soluciones a los problemas que afectan la salud."
  >
    <template #main>
      <UCarousel
        v-slot="{ item }"
        :items="items"
        :ui="{ item: 'basis-full' }"
        class="overflow-hidden rounded-t-md md:rounded-l-md md:rounded-tr-none min-h-[17.81rem] md:min-h-[18.31] lg:min-h-[540px]"
      >
        <img
          :src="item"
          class="w-full object-cover min-h-[17.81rem] md:min-h-[18.31] lg:min-h-[540px]"
          draggable="false"
        />
      </UCarousel>
    </template>
  </CommonBanner>
</template>
