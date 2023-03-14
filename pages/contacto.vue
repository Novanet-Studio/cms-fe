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
    <aside class="aside">
      <div class="contacto__group">
        <h2 class="contacto__subtitle">Ubicación</h2>
        <p>
          Urb. Alta Florida Av. Los Mangos Quinta Caracas Multisport (al frente
          de la Plaza Benito Juárez subiendo a la Cota Mil)
        </p>
      </div>
      <div class="contacto__group">
        <h2 class="contacto__subtitle">Información general</h2>
        <p>info@ccsmultisport.com</p>
      </div>

      <div class="contacto__group">
        <h2 class="contacto__subtitle">Buzón de sugerencias</h2>
        <p>sugerencias@ccsmultisport.com</p>
      </div>
      <div class="contacto__group">
        <h2 class="contacto__subtitle">Teléfonos</h2>
        <p>+58 212-935.45.46</p>
      </div>
      <div class="contacto__group">
        <h2 class="contacto__subtitle">WhatsApp</h2>
        <div>
          <a class="contacto__link" href="https://whatsapp.me/+581241289" target="_blank">
            <font-awesome-icon :icon="['fab', 'whatsapp']" size="2x" />
          </a>
        </div>
      </div>

      <div class="contacto__group">
        <h2 class="contacto__subtitle">Redes sociales</h2>
        <div>
          <a class="contacto__link" href="https://facebook.com" target="_blank">
            <font-awesome-icon :icon="['fab', 'facebook']" size="2x" />
          </a>
          <a class="contacto__link" href="https://instagram.com" target="_blank">
            <font-awesome-icon :icon="['fab', 'instagram']" size="2x" />
          </a>
        </div>
      </div>
    </aside>
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
