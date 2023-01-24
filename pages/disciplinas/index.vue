<template>
  <slider :slides="slides" />

  <div class="disciplinas">
    <section class="disciplinas__container">
      <h2 class="disciplinas__title">Disciplinas</h2>
      <div class="cards__wrapper">
        <template v-if="loading">
          <card-skeletor v-for="i in 4" />
        </template>
        <template v-else-if="!loading && disciplinas.length">
          <nuxt-link
            :to="{
              path: `/disciplinas/${disciplina.attributes.link}`,
              replace: true,
            }"
            v-for="(disciplina, index) in disciplinas"
            :key="index"
          >
            <card
              :logo="disciplina.attributes.icono.data.attributes.url"
              :alternativeText="
                disciplina.attributes.icono.data.attributes.alternativeText
              "
              :title="disciplina.attributes.nombre"
              description="Ver información y planes"
            />
          </nuxt-link>
        </template>
      </div>
    </section>
  </div>

  <highlight
    estilo="highlight"
    title="Nuestra piscina es un <br />
        lugar de encuentro, es nuestra <br />
        casa, es CCS Multisport"
    description="Esta piscina alberga los sueños y las ilusiones de muchos y el escape de la rutina para otros.Aquí nadan los que entrenan duro, los que entrenan para competir, para relajarse y para llevar una una vida saludable"
    image="https://res.cloudinary.com/novanet-studio/image/upload/v1669823171/ccs-multisport/cms_piscina_en_atardecer_281eb141f9.webp"
    url="natacion"
    alt="Pisicina de natación con fondo en atardecer rosado"
  />
</template>

<script lang="ts" setup>
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = ref();
const { disciplines: disciplinas, loading } = useDisciplines();
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
