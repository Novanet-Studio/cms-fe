<template>
  <hero
    :titulo="principal.titulo"
    :descripcion="principal.descripcion"
    :url="principal.imagen.data.attributes.url"
    :alternativeText="principal.imagen.data.attributes.alternativeText"
  />

  <slider :slides="carrusel" />

  <section class="disciplinas">
    <div class="disciplinas__container">
      <h2 class="disciplinas__title">Disciplinas</h2>
      <div class="cards__wrapper">
        <nuxt-link
          :to="`/disciplinas/${disciplina.attributes.link}`"
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
      </div>
    </div>
  </section>

  <highlight
    estilo="highlight"
    :title="profesionales.titulo"
    :description="profesionales.descripcion"
    :image="profesionales.imagen.data.attributes.url"
    :alt="profesionales.imagen.data.attributes.alternativeText"
    buttonText="Ver profesores"
    url="/profesionales"
  />

  <section class="mensaje">
    <div class="mensaje__container">
      <h2 class="mensaje__title">
        {{ mensaje.titulo }}
      </h2>
      <p class="text-center mb-8 text-lg mt-4">
        {{ mensaje.descripcion }}
      </p>
      <app-button class="button--blue" url="/disciplinas"
        >Conoce más</app-button
      >
    </div>
  </section>

  <section class="aliados">
    <div class="aliados__wrapper">
      <h2 class="aliados__title">Aliados</h2>
      <basic
        v-for="(aliado, index) in aliados"
        :link="aliado.attributes.link"
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
    <!-- <h2 class="tienda__title">Tienda</h2>
    <div class="tienda__wrapper">
      <gradient-overlay
        v-for="(item, index) in storeItems"
        :key="index"
        :image="item.image"
        :text="item.text"
        :alternativeText="item.alternativeText"
      />
    </div> -->
  </section>
</template>

<script lang="ts" setup>
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
const carrusel = ref();
const disciplinas = ref();
const profesionales = ref();
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

            mensaje {
              titulo
              descripcion
            }
          }
        }
      }

      carrusel(id: 1) {
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

      empresa {
        data {
          attributes {
            profesionales {
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
          }
        }
      }

      aliados(sort: "nombre:asc") {
        data {
          attributes {
            link
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
  carrusel.value = query.data.carrusel.data.attributes.imagenes.data;
  disciplinas.value = query.data.disciplinas.data;
  profesionales.value = query.data.empresa.data.attributes.profesionales;
  mensaje.value = query.data.inicio.data.attributes.mensaje;
  aliados.value = query.data.aliados.data;
} catch (err) {
  principal.value = [];
  carrusel.value = [];
  disciplinas.value = [];
  profesionales.value = [];
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
