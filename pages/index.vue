<template>
  <hero
    :titulo="principal.titulo"
    :descripcion="principal.descripcion"
    :url="principal.imagen.data.attributes.url"
    :alternativeText="principal.imagen.data.attributes.alternativeText"
  />

  <slider :slides="slides" />

  <section class="disciplinas">
    <h2 class="disciplinas__title">Disciplinas</h2>
    <div class="disciplinas__container">
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
    </div>
  </section>

  <highlight
    title="FEVEDA prepara su COPA<br />
        Pasión Acuática 2022"
    description="La junta directiva de la federación venezolana de<br />
        deportes acuáticos “FEVEDA”, se complace en invitar a<br />
        todas las asociaciones afiliadas"
    image="https://res.cloudinary.com/novanet-studio/image/upload/v1669823165/ccs-multisport/cms_hombre_nadando_crawl_6e3eead054.webp"
  />

  <section class="mensaje">
    <div class="mensaje__container">
      <h2 class="mensaje__title">
        {{ mensaje.titulo }}
      </h2>
      <p class="text-center mb-8 text-lg mt-4">
        {{ mensaje.descripcion }}
      </p>
      <app-button class="button--blue">Conoce más</app-button>
    </div>
  </section>

  <section class="aliados">
    <h2 class="aliados__title">Aliados</h2>
    <div class="aliados__wrapper">
      <basic
        v-for="(aliado, index) in aliados"
        :logo="aliado.attributes.imagen.data.attributes.url"
        :alternativeText="
          aliado.attributes.imagen.data.attributes.alternativeText
        "
        logoClass="basic__logo--index"
        :key="index"
      />
    </div>
  </section>

  <section class="tienda">
    <h2 class="tienda__title">Tienda</h2>
    <div class="tienda__wrapper">
      <gradient-overlay
        v-for="(item, index) in storeItems"
        :key="index"
        :image="item.image"
        :text="item.text"
        :alternativeText="item.alternativeText"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const clog = (e: any) => {
  console.log(e);
};

const config = useAppConfig();

useHead({
  titleTemplate() {
    return config.pwaManifest.name;
  },
  title() {
    return config.pwaManifest.short_name;
  },
});

const principal = ref();
const slides = ref();
const disciplinas = ref();
const mensaje = ref();
const aliados = ref();
const graphql = useStrapiGraphQL();

try {
  const query = await graphql<any>(`
    query {
      inicio {
        data {
          attributes {
            principal {
              titulo
              descripcion
              imagen {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
            }

            carrusel {
              data {
                attributes {
                  name
                  alternativeText
                  url
                }
              }
            }

            mensaje {
              titulo
              descripcion
            }
          }
        }
      }

      disciplinas(sort: "id:asc") {
        data {
          attributes {
            nombre
            link
            icono {
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

      aliados(sort: "updatedAt:desc") {
        data {
          attributes {
            imagen {
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

  principal.value = query.data.inicio.data.attributes.principal;
  slides.value = query.data.inicio.data.attributes.carrusel.data;
  disciplinas.value = query.data.disciplinas.data;
  mensaje.value = query.data.inicio.data.attributes.mensaje;
  aliados.value = query.data.aliados.data;
} catch (err) {
  principal.value = [];
  slides.value = [];
  disciplinas.value = [];
  mensaje.value = [];
  aliados.value = [];
  console.log(err);
}

const storeItems = [
  {
    image:
      "https://res.cloudinary.com/novanet-studio/image/upload/v1669823173/ccs-multisport/cms_tienda_caballeros_d004a62d61.webp",
    text: "Caballeros",
    alternativeText: "Hombre con gorro y lentes nadando en aguas abiertas",
  },
  {
    image:
      "https://res.cloudinary.com/novanet-studio/image/upload/v1669823172/ccs-multisport/cms_tienda_damas_8a5caff429.webp",
    text: "Damas",
    alternativeText: "Mujer con gorro y lentes nadando en piscimna",
  },
  {
    image:
      "https://res.cloudinary.com/novanet-studio/image/upload/v1669823173/ccs-multisport/cms_tienda_ninos_3af6013c20.webp",
    text: "Niños",
    alternativeText: "Niño posando al borde de piscina con lentes en la frente",
  },
];
</script>
