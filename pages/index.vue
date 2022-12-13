<template>
  <section class="hero">
    <div class="hero__container">
      <div class="hero__info">
        <h1 class="hero__title" v-html="principal.titulo"></h1>
        <p class="hero__description" v-html="principal.descripcion"></p>
      </div>
      <div class="hero__images">
        <div class="hero__image-bg">
          <nuxt-picture
            :src="principal.imagen.data.attributes.url"
            :alt="principal.imagen.data.attributes.alternativeText"
            class="hero__image-fg"
          />
        </div>
      </div>
    </div>
  </section>

  <div class="swiper">
    <swiper
      :slider-per-view="1"
      :space-between="0"
      loop
      navigation
      :modules="[Autoplay, Navigation, Pagination]"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <nuxt-picture
          :src="slide.attributes.url"
          sizes="xs:100vw sm:640 md:768 lg:1024 xl:1280 xxl:1920"
        />
      </swiper-slide>
    </swiper>
  </div>

  <section class="disciplinas">
    <div class="disciplinas__container">
      <h2 class="disciplinas__title">Disciplinas</h2>
      <div class="cards__wrapper">
        <card
          v-for="(disciplina, index) in disciplinas"
          :key="index"
          :logo="disciplina.attributes.icono.data.attributes.url"
          :alternativeText="
            disciplina.attributes.icono.data.attributes.alternativeText
          "
          :title="disciplina.attributes.nombre"
          description="Ver información y planes"
        />
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
      <logo-card
        v-for="(aliado, index) in aliados"
        :logo="aliado.attributes.imagen.data.attributes.url"
        :alternativeText="aliado.attributes.imagen.data.attributes.alternativeText"
        logoClass="aliado__logo--index"
        :key="index"

      />
    </div>
  </section>

  <section class="tienda">
    <h2 class="tienda__title">Tienda</h2>
    <div class="tienda__wrapper">
      <card-overlay
        v-for="(item, index) in storeItems"
        :key="index"
        :image="item.image"
        :text="item.text"
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

      aliados(sort: "id:asc") {
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
  },
  {
    image:
      "https://res.cloudinary.com/novanet-studio/image/upload/v1669823172/ccs-multisport/cms_tienda_damas_8a5caff429.webp",
    text: "Damas",
  },
  {
    image:
      "https://res.cloudinary.com/novanet-studio/image/upload/v1669823173/ccs-multisport/cms_tienda_ninos_3af6013c20.webp",
    text: "Niños",
  },
];
</script>
