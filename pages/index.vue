<template>
  <section class="hero">
    <div class="hero__info">
      <h3 class="hero__title" v-html="principal.titulo"></h3>
      <p class="hero__description" v-html="principal.descripcion"></p>
    </div>
    <div class="hero__image">
      <div class="hero__image-container">
        <nuxt-img
          :src="principal.imagen.data.attributes.url"
          :alt="principal.imagen.data.attributes.alternativeText"
        />
      </div>
    </div>
  </section>
  <section class="swiper">
    <swiper
      :slider-per-view="1"
      :space-between="0"
      loop
      navigation
      :modules="[Autoplay, Navigation, Pagination]"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <nuxt-img
          :src="slide.attributes.url"
          sizes="xs:100vw sm:640 md:768 lg:1024 xl:1280 xxl:1920"
        />
      </swiper-slide>
    </swiper>
  </section>
  <section class="container mx-auto py-[4.875rem] mb-16">
    <logo-dots />
    <h1 class="text-3xl font-black mt-2">Disciplinas</h1>
    <card-wrapper>
      <card
        v-for="(disciplina, index) in disciplinas"
        :key="index"
        :logo="disciplina.attributes.imagen.data.attributes.url"
        :alternativeText="
          disciplina.attributes.imagen.data.attributes.alternativeText
        "
        :title="disciplina.attributes.nombre"
        description="Ver información y planes"
      />
    </card-wrapper>
  </section>

  <section class="flex w-full items-center bg-[#E6E7E8]">
    <div class="flex-basis-[50%] flex flex-col items-end mr-9">
      <logo-dots />
      <h3 class="text-4xl font-black text-[#231F20] text-right">
        FEVEDA prepara su COPA<br />
        Pasión Acuática 2022
      </h3>
      <p class="text-right my-4">
        Lorem ipsum dolor sit amet consectetur <br />
        adipisicing elit Explicabo sed suscipit aut iure ipsam ex voluptates?
      </p>
      <app-button class="w-[9.5]">Button</app-button>
    </div>
    <div class="flex-basis-[50%]">
      <nuxt-img
        src="https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg"
        class="w-full h-[45rem] bg-cover"
      />
    </div>
  </section>

  <section class="container mx-auto py-56 flex flex-col items-center">
    <h2 class="text-[2.5rem] text-center font-extrabold">
      {{ mensaje.titulo }}
    </h2>
    <p class="text-center mb-8 text-lg mt-4">
      {{ mensaje.descripcion }}
    </p>
    <app-button class="px-10 py-4">Conoce más</app-button>
  </section>

  <section class="container mx-auto">
    <logo-dots />
    <h1 class="text-3xl font-black mt-2">Aliados</h1>
    <icon-card-wrapper>
      <icon-card
        v-for="(aliado, index) in aliados"
        :icon="aliado.attributes.imagen.data.attributes.url"
        :key="index"
      />
    </icon-card-wrapper>
  </section>

  <section class="container mx-auto mt-48">
    <header>
      <logo-dots />
      <h1 class="text-3xl font-black mt-2">Tienda</h1>
      <div class="flex gap-8 mt-10 mb-20">
        <card-overlay
          v-for="(item, index) in storeItems"
          :key="index"
          :image="item.image"
          :text="item.text"
        />
      </div>
    </header>
  </section>
</template>

<script lang="ts" setup>
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const config = useAppConfig();

useHead({
  titleTemplate() {
    return config.pwaManifest.name;
  },
  title() {
    return config.pwaManifest.short_name;
  },
});

const clog = (e: any) => {
  console.log(e);
};

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
    image: "https://images.pexels.com/photos/1415810/pexels-photo-1415810.jpeg",
    text: "Caballeros",
  },
  {
    image: "https://images.pexels.com/photos/3775161/pexels-photo-3775161.jpeg",
    text: "Damas",
  },
  {
    image: "https://images.pexels.com/photos/2326887/pexels-photo-2326887.jpeg",
    text: "Niños",
  },
];
</script>
