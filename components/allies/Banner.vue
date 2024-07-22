<script setup lang="ts">
const items = [
  "https://res.cloudinary.com/novanet-studio/image/upload/v1679055991/ccs-multisport/cms_caracas_multisport_la_florida_4c348f133f.webp",
];
</script>

<template>
  <CommonBanner
    title="Nuestros aliados amplían nuestra oferta de servicios"
    description="Siempre hay un motivo para lograr cruzar una meta, para conquistar un sueño. Nuestro sueño, NUESTRA META es prestar un servicio de calidad. Somos un Centro Deportivo Integral para todo público; cada deportista es un mundo diferente, atenderlo es el motivo que nos mueve a superarnos para ser cada día mejor."
    :ui="{
      aside: {
        base: '!bg-[#E6E7E8]',
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
