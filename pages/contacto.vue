<template>
  <slider :slides="slides" />
  <div class="dots">
    <logo-dots />
  </div>
  <section class="box">
    <p class="accordion-item">
      Te invitamos a visitar y conocer nuestra sede en la Alta Florida, una
      piscina semi-olímpica, temperada, con un inmejorable equipo de trabajo
      liderado por nuestro Coach certificado en entrenamiento para Triatlón y
      con el mejor equipo de entrenadores capaces de brindar un ambiente cálido
      y estimulante para todos.
    </p>
  </section>
  <div class="dots">
    <logo-dots />
  </div>
  <div class="contacto__grid">
    <FormularioContacto />
    <aside class="aside">
      <h2 class="tienda__title">Ubicación</h2>
      <p>
        Urb. Alta Florida Av. Los Mangos Quinta Caracas Multisport (al frente de
        la Plaza Benito Juárez subiendo a la Cota Mil)
      </p>
      <h2 class="tienda__title">Información general</h2>
      <p>info@ccsmultisport.com</p>
      <h2 class="tienda__title">Buzón de sugerencias</h2>
      <p>sugerencias@ccsmultisport.com</p>
      <h2 class="tienda__title">Teléfonos</h2>
      <p>+58 212-935.45.46</p>
      <h2 class="tienda__title">WhatsApp</h2>
      <div>
        <a
          class="footer__link"
          href="https://whatsapp.me/+581241289"
          target="_blank"
        >
          <font-awesome-icon :icon="['fab', 'whatsapp']" size="2x" />
        </a>
      </div>
      <h2 class="tienda__title">Redes sociales</h2>
      <div>
        <a class="footer__link" href="https://facebook.com" target="_blank">
          <font-awesome-icon :icon="['fab', 'facebook']" size="2x" />
        </a>
        <a class="footer__link" href="https://instagram.com" target="_blank">
          <font-awesome-icon :icon="['fab', 'instagram']" size="2x" />
        </a>
      </div>
    </aside>
  </div>
</template>

<script lang="ts" setup>
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = ref();
const graphql = useStrapiGraphQL();

try {
  const query = await graphql<any>(`
    query {
      inicio {
        data {
          attributes {
            carrusel {
              data {
                attributes {
                  name
                  alternativeText
                  url
                }
              }
            }
          }
        }
      }
    }
  `);

  slides.value = query.data.inicio.data.attributes.carrusel.data;
} catch (err) {
  slides.value = [];

  console.log(err);
}
</script>
