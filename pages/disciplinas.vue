<template>
  <section class="w-full">
    <swiper :slider-per-view="1" :space-between="1" loop navigation :modules="[Autoplay, Navigation, Pagination]">
      <swiper-slide v-for="(image, index) in slides" :key="index">
        <nuxt-img :src="image" class="h-xl bg-cover w-full" />
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
  <section class="flex container mx-auto items-center bg-[#E6E7E8] mb-12">
    <div class="flex-basis-[50%] flex flex-col items-end mr-9">
      <logo-dots />
      <h3 class="text-4xl font-black text-[#231F20] text-right">Nuestra piscina es un <br> lugar de encuentro, es
        nuestra <br> casa, es CCS Multisport
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
</template>

<script lang="ts" setup>
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  'https://images.pexels.com/photos/8688568/pexels-photo-8688568.jpeg',
  'https://images.pexels.com/photos/2250432/pexels-photo-2250432.jpeg',
  'https://images.pexels.com/photos/261185/pexels-photo-261185.jpeg',
];
</script>
