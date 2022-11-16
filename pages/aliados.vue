<template>
  <section class="flex py-24 container mx-auto items-center">
    <div class="w-2xl flex flex-col items-end">
      <logo-dots />
      <h3 class="text-4xl font-black text-[#231F20] text-right">Siempre hay un motivo <br> para lograr cruzar una meta
      </h3>
      <p class="text-right mt-4">Lorem ipsum dolor sit amet consectetur <br> adipisicing elit Explicabo sed suscipit aut
        iure
        ipsam ex voluptates?
      </p>
    </div>
    <div class="ml-20">
      <div class="w-[23.125rem] h-[23.125rem] relative">
        <nuxt-img src="https://images.pexels.com/photos/8688175/pexels-photo-8688175.jpeg" alt="my image"
          class="w-full h-full rounded-full z-50 absolute z-[10]" />
        <div class="w-[13.75rem] h-[13.75rem] bg-primary rounded-full absolute top-0 -left-5"></div>
        <div class="w-[11.125rem] h-[11.125rem] bg-secondary rounded-full absolute top-18 -right-8"></div>
        <div class="w-[6.875rem] h-[6.875rem] bg-tertiary rounded-full absolute bottom-0 left-10"></div>
      </div>
    </div>
  </section>
  <section class="container mx-auto">
    <header>
      <logo-dots />
      <h1 class="text-3xl font-black mt-2">Aliados</h1>
      <icon-card-wrapper class="grid grid-cols-2">
        <icon-card v-for="(ally, index) in allies" :icon="ally.logo" :title="ally.title" :content="ally.content"
          :key="index" />
      </icon-card-wrapper>
    </header>
  </section>
</template>

<script lang="ts" setup>
const allies2 = [
  'logo-1.svg',
  'logo-2.svg',
  'logo-3.svg',
  'logo-4.svg',
  'logo-5.svg',
  'logo-6.svg',
];

const allies = [
  {
    logo: 'logo-1.svg',
    title: 'My title',
    content: 'Unidad de Medicina Física y Rehabilitación, Fisioterapia, Fisioterapia acuática. Local PB-01. Teléfono: 0212 - 730 48 58 Instagram: @physia.ve'
  },
  {
    logo: 'logo-2.svg',
    title: 'My title',
    content: 'Unidad de Medicina Física y Rehabilitación, Fisioterapia, Fisioterapia acuática. Local PB-01. Teléfono: 0212 - 730 48 58 Instagram: @physia.ve'
  },
  {
    logo: 'logo-3.svg',
    title: 'My title',
    content: 'Unidad de Medicina Física y Rehabilitación, Fisioterapia, Fisioterapia acuática. Local PB-01. Teléfono: 0212 - 730 48 58 Instagram: @physia.ve'
  },
  {
    logo: 'logo-4.svg',
    title: 'My title',
    content: 'Unidad de Medicina Física y Rehabilitación, Fisioterapia, Fisioterapia acuática. Local PB-01. Teléfono: 0212 - 730 48 58 Instagram: @physia.ve'
  },
  {
    logo: 'logo-5.svg',
    title: 'My title',
    content: 'Unidad de Medicina Física y Rehabilitación, Fisioterapia, Fisioterapia acuática. Local PB-01. Teléfono: 0212 - 730 48 58 Instagram: @physia.ve'
  },
  {
    logo: 'logo-6.svg',
    title: 'My title',
    content: 'Unidad de Medicina Física y Rehabilitación, Fisioterapia, Fisioterapia acuática. Local PB-01. Teléfono: 0212 - 730 48 58 Instagram: @physia.ve'
  },
];
</script>