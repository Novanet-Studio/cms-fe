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
  <section class="w-full">
    <swiper :slider-per-view="1" :space-between="1" loop navigation :modules="[Autoplay, Navigation, Pagination]">
      <swiper-slide v-for="(image, index) in slides" :key="index">
        <nuxt-img :src="image" class="h-[33.75rem] bg-cover w-full" />
      </swiper-slide>
    </swiper>
  </section>
  <section class="container mx-auto py-[4.875rem] mb-16">
    <header>
      <logo-dots />
      <h1 class="text-3xl font-black mt-2">Disciplinas</h1>
      <card-wrapper>
        <card logo="/natacion.svg" title="Natación" description="Ver información y planes" />
        <card logo="/yoga.svg" title="Yoga" description="Ver información y planes" />
        <card logo="/karate.svg" title="Karate" description="Ver información y planes" />
        <card logo="/custom.svg" title="Entrenamiento personalizado" description="Ver información y planes" />
      </card-wrapper>
    </header>
  </section>

  <section class="flex w-full items-center bg-[#E6E7E8]">
    <div class="flex-basis-[50%] flex flex-col items-end mr-9">
      <logo-dots />
      <h3 class="text-4xl font-black text-[#231F20] text-right">FEVEDA prepara su COPA<br> Pasión Acuática 2022
      </h3>
      <p class="text-right my-4">Lorem ipsum dolor sit amet consectetur <br> adipisicing elit Explicabo sed suscipit aut
        iure
        ipsam ex voluptates?
      </p>
      <app-button class="w-[9.5]">Button</app-button>
    </div>
    <div class="flex-basis-[50%]">
      <nuxt-img src="https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg"
        class="w-full h-[45rem] bg-cover" />
    </div>
  </section>

  <section class="container mx-auto py-56 flex flex-col items-center">
    <h2 class="text-[2.5rem] text-center font-extrabold">Conóce la información de nuestras disciplinas</h2>
    <p class="text-center mb-8 text-lg mt-4">información y detalles para que te inscribas en Caracas Multisport</p>
    <app-button class="px-10 py-4">Conoce más</app-button>
  </section>

  <section class="container mx-auto">
    <header>
      <logo-dots />
      <h1 class="text-3xl font-black mt-2">Aliados</h1>
      <icon-card-wrapper>
        <icon-card v-for="(logo, index) in allies" :icon="`/${logo}`" :key="index" />
      </icon-card-wrapper>
    </header>
  </section>

  <section class="container mx-auto mt-48">
    <header>
      <logo-dots />
      <h1 class="text-3xl font-black mt-2">Tienda</h1>
      <div class="flex gap-8 mt-10 mb-20">
        <card-overlay v-for="(item, index) in storeItems" :key="index" :image="item.image" :text="item.text" />
      </div>
    </header>
  </section>
</template>

<script lang="ts" setup>
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const config = useAppConfig();

useHead({
  titleTemplate: 'CCS Multisports - %s',
  title() {
    return config.pwaManifest.short_name;
  }
});

const slides = [
  'https://images.pexels.com/photos/8688568/pexels-photo-8688568.jpeg',
  'https://images.pexels.com/photos/2250432/pexels-photo-2250432.jpeg',
  'https://images.pexels.com/photos/261185/pexels-photo-261185.jpeg',
];

const allies = [
  'logo-1.svg',
  'logo-2.svg',
  'logo-3.svg',
  'logo-4.svg',
  'logo-5.svg',
  'logo-6.svg',
]

const storeItems = [
  {
    image: 'https://images.pexels.com/photos/1415810/pexels-photo-1415810.jpeg',
    text: 'Caballeros',
  },
  {
    image: 'https://images.pexels.com/photos/3775161/pexels-photo-3775161.jpeg',
    text: 'Damas',
  },
  {
    image: 'https://images.pexels.com/photos/2326887/pexels-photo-2326887.jpeg',
    text: 'Niños',
  }
]
</script>