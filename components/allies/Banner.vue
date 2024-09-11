<script setup lang="ts">
import alliesBanner from '@/assets/images/allies-banner.webp'
</script>

<template>
  <CommonBanner
    title="Nuestros aliados amplían nuestra oferta de servicios"
    description="Siempre hay un motivo para lograr cruzar una meta, para conquistar un sueño. Nuestro sueño, NUESTRA META es prestar un servicio de calidad. Somos un Centro Deportivo Integral para todo público; cada deportista es un mundo diferente, atenderlo es el motivo que nos mueve a superarnos para ser cada día mejor."
    :ui="{
      aside: {
        base: '!bg-[#E6E7E8] lg:px-10 lg:py-6',
        title: 'text-[var(--color-tertiary)]',
        description: 'text-[var(--color-tertiary)]',
      },
    }"
  >
    <template #main>
      <img
        :src="alliesBanner"
        class="w-full object-cover object-top rounded-t-md md:rounded-l-md md:rounded-tr-none min-h-[17.81rem] md:min-h-[18.31] lg:min-h-[540px]"
        draggable="false"
      />
    </template>
  </CommonBanner>
</template>
