<template>
  <div>
    <slider :slides="carrusel" />
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
          <li>De 1:30pm a 07:30pm</li>
        </ul>
        <br />
        <h3>Sábados</h3>

        <p>De 9:00am a 12:00pm</p>
        <br />
      </div>
    </section>
    <div class="contacto__grid">
      <contact-form />
      <the-aside />
    </div>
  </div>
</template>

<script setup>
const carrusel = ref();
const graphql = useStrapiGraphQL();

try {
  const query = await graphql(`
    query {
      carrusel(id: 3) {
        data {
          attributes {
            imagenes {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
          }
        }
      }
    }
  `);

  carrusel.value = query.data.carrusel.data.attributes.imagenes.data;
} catch (err) {
  carrusel.value = [];

  console.log(err);
}
</script>
