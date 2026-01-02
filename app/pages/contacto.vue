<script setup lang="ts">
import { CAROUSEL_QUERY } from "~/schemas/cms";

const graphql = useStrapiGraphQL();

const { data: carrusel } = await useAsyncData("contact-carrusel", async () => {
  try {
    const response = await graphql<any>(CAROUSEL_QUERY);
    return response.data.carrusel?.imagenes || [];
  } catch (err) {
    console.error(err);
    return [];
  }
});
</script>

<template>
  <div>
    <AppSlider :slides="carrusel" />
    <section class="box">
      <div class="summary-content">
        <p class="accordion-item">
          Te invitamos a visitar y conocer nuestra sede en la Alta Florida, una
          piscina semi-olímpica, temperada, con un inmejorable equipo de trabajo
          liderado por nuestro Coach certificado en entrenamiento para Triatlón
          y con el mejor equipo de entrenadores capaces de brindar un ambiente
          cálido y estimulante para todos.
        </p>
        <br />
        <h3>Horarios de atención</h3>
        <p>Oficina Administrativa para pagos y formalizar inscripción</p>
        <br />
        <h3>De Lunes a Viernes</h3>
        <ul>
          <li>De 9:00am a 12:30pm</li>
          <li>De 1:30pm a 05:30pm</li>
        </ul>
        <br />
        <h3>Sábados</h3>

        <p>De 9:00am a 12:00pm</p>
        <br />
      </div>
    </section>
    <div class="contacto__grid">
      <AppContactForm />
      <AppAside />
    </div>
  </div>
</template>
