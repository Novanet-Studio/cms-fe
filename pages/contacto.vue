<template>
  <slider :slides="carrusel" />
  <section class="box">
    <p class="accordion-item">
      Te invitamos a visitar y conocer nuestra sede en la Alta Florida, una
      piscina semi-olímpica, temperada, con un inmejorable equipo de trabajo
      liderado por nuestro Coach certificado en entrenamiento para Triatlón y
      con el mejor equipo de entrenadores capaces de brindar un ambiente cálido
      y estimulante para todos.
    </p>
  </section>
  <div class="contacto__grid">
    <contact-form />
    <the-aside />
  </div>
</template>

<script lang="ts" setup>
const carrusel = ref();
const graphql = useStrapiGraphQL();

try {
  const query = await graphql<any>(`
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
