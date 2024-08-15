<script setup lang="ts">
const items = [
  "~/assets/images/cms-piscina.webp",
];
</script>

<template>
  <CommonBanner
    title="Somos un Centro Deportivo Integral"
    description="Que busca destacarse en la integración de los sectores del deporte y la salud. Nuestro principal objetivo es mejorar la calidad de vida de nuestros usuarios mediante la enseñanza y práctica de la natación, acondicionamiento físico y aplicación de terapias que proporcionan soluciones a los problemas que afectan la salud."
    :ui="{
      aside: {
        base: 'lg:px-10 lg:py-6'
      }
    }"
  >
    <template #main>
      <!-- <UCarousel
        v-slot="{ item }"
        :items="items"
        :ui="{ item: 'basis-full' }"
        class="overflow-hidden rounded-t-md md:rounded-l-md md:rounded-tr-none h-[17.81rem] md:min-h-[18.31] lg:min-h-[540px]"
      > -->
        <img
          src="~/assets/images/cms-piscina.webp"
          class="w-full object-cover min-h-[17.81rem] md:min-h-[18.31] lg:min-h-[540px] rounded-t-md md:rounded-l-md md:rounded-tr-none"
          draggable="false"
        />
      <!-- </UCarousel> -->
    </template>
  </CommonBanner>
</template>
