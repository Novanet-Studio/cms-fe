<script setup lang="ts">
const items = [
  {
    title: "15% de descuento en la mensualidad",
    description:
      "Si pagas el trimestre adelantado",
    color: "#001E61",
  },
  {
    title: "50% de descuento en la inscripción",
    description:
      "Si al inscribirse pagas el trimestre adelantado",
    color: "#F18A00",
  },
  {
    title: "30% de descuento en la tarifa",
    description:
      "Si te inscribes en el horario flexible de natación para adultos (Consulte horarios).",
    color: "#231F20",
  },
];
</script>

<template>
  <section class="my-20">
    <h3
      class="font-black text-[40px] text-center mt-[7.75rem] md:text-3xl mb-8 lg:mb-12"
    >
      Opciones de descuento
    </h3>
    <UCarousel
      v-slot="{ item: { title, description, color }, index }"
      arrows
      :items
      :prev-button="{
        class: '-left-2 lg:-left-12',
      }"
      :next-button="{
        class: '-right-2 lg:-right-12',
      }"
      :ui="{
        item: 'basis-full lg:basis-1/3',
        container: 'gap-1',
        default: {
          prevButton: {
            color: 'bg-transparent text-black',
            class: 'rtl:[&_span:first-child]:rotate-180 absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full disabled:!cursor-default',
            icon: 'i-fa-angle-left'
          },
          nextButton: {
            color: 'bg-transparent text-black',
            class: 'rtl:[&_span:last-child]:rotate-180 absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full disabled:!cursor-default',
            icon: 'i-fa-angle-left rotate-180'
          }
        }
      }"
    >
      <div class="mx-auto py-10">
        <CommonRoundedCard
          class="md:outline-offset-[1rem]"
          :title
          :description
          :style="{
            backgroundColor: color,
            outlineColor: color,
          }"
        />
      </div>
    </UCarousel>
  </section>
</template>

<style>
@keyframes offset {
  100% {
    outline-offset: 50px;
  }
}
</style>
