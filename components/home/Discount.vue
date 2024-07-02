<script setup lang="ts">
const items = [
  {
    title: "15% de descuento",
    description:
      "Para pagos por trimestre adelantado (aplican ciertas condiciones)",
    color: "#001E61",
  },
  {
    title: "50% en la inscripción",
    description:
      "Si al momento de inscribirse pagas el trimestre adelantado, además del descuento, obtienes el 50% en la tarifa de la inscripción.",
    color: "#F18A00",
  },
  {
    title: "30% en la tarifa",
    description:
      "Si te inscribes en el horario flexible de natación para adultos (Consulte horarios).",
    color: "#231F20",
  },
];
</script>

<template>
  <section class="my-20">
    <h3 class="font-black text-[40px] text-center mt-[7.75rem] mb-12">
      Opciones de descuento
    </h3>
    <UCarousel
      v-slot="{ item, index }"
      arrows
      :items
      :prev-button="{
        class: '-left-12',
      }"
      :next-button="{
        class: '-right-12',
      }"
      :ui="{
        item: 'basis-full md:basis-1/2 lg:basis-1/3',
        container: 'gap-1',
      }"
    >
      <div class="mx-auto py-10">
        <div
          class="size-[23rem] rounded-full outline-offset-[1.7rem] outline-1 outline flex flex-col text-white p-4 transition ease"
          :style="{
            backgroundColor: item.color,
            outlineColor: item.color,
          }"
        >
          <h4 class="font-black text-3xl text-center mt-28">
            {{ item.title }}
          </h4>
          <p class="text-xl text-center">
            {{ item.description }}
          </p>
        </div>
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
