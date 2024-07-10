<script setup lang="ts">
const items = [
  {
    title: "Misión",
    description:
      "Planificar, dirigir y desarrollar los programas deportivos de alto rendimiento como la natación, acondicionamiento físico integral y las actividades recreativas; como herramientas que ayuden a mejorar la calidad de vida del ser humano.",
    src: "https://placehold.co/682x511",
    color: "#A7A9AC",
  },
  {
    title: "Visión",
    description:
      "Contribuir con la formación integral deportiva de niños, jóvenes y adultos; incorporando el mayor número de personas a la práctica deportiva, sembrando el sentido de espíritu deportivo y la salud para desarrollarse en el ámbito competitivo en la sociedad venezolana.",
    src: "https://placehold.co/682x511",
    color: "#A7A9AC",
  },
  {
    title: "Valores",
    description:
      "Nos caracterizamos por poner en práctica el trabajo en equipo, con lealtad, responsabilidad, actitud positiva, autoestima, espíritu de colaboración, capacidad para compartir, entusiasmo y solidaridad. Promovemos la disposición al trabajo en situaciones bajo presión cuando algunas actividades del ámbito deportivo así lo ameriten.",
    src: "https://placehold.co/682x511",
    color: "#A7A9AC",
  },
];
</script>

<template>
  <section class="grid grid-cols-3 gap-10">
    <CommonRoundedCard
      v-for="{ title, description, src, color } in items"
      :title
      :description
      :src
      :style="{
        outlineColor: color,
      }"
    />
  </section>
</template>
