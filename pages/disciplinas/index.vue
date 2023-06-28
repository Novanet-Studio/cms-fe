<template>
  <slider :slides="carrusel" />

  <section class="disciplinas">
    <div class="disciplinas__container">
      <h2 class="disciplinas__title">Disciplinas</h2>
      <div class="cards__wrapper">
        <template v-if="loading">
          <card-skeletor v-for="i in 4" />
        </template>
        <template v-else-if="!loading && disciplinas.length">
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
        </template>
      </div>
    </div>
  </section>

  <highlight
    estilo="highlight"
    title="Nuestra piscina es un <br />
        lugar de encuentro, es nuestra <br />
        casa, es CCS Multisport"
    description="Esta piscina alberga los sueños y las ilusiones de muchos y el escape de la rutina para otros.Aquí nadan los que entrenan duro, los que entrenan para competir, para relajarse y para llevar una una vida saludable"
    image="https://res.cloudinary.com/novanet-studio/image/upload/v1679082237/ccs-multisport/cms_disciplinas_hombre_nadando_estilo_mariposa_8740ad8328.webp"
    url="/disciplinas/natacion"
    alt="Hombre nadando estilo mariposa"
  />

  <div class="dots"></div>

  <section class="box">
    <div>
      <h3 class="box__title">
        {{ requisitos[0]?.titulo }}
      </h3>
      <div v-html="requisitos[0]?.descripcion || `<span>Cargando...</span>`"></div>
    </div>
  </section>

  <section class="box">
    <div>
      <h3 class="box__title">
        {{ descuentos[0]?.titulo }}
      </h3>
      <div v-html="descuentos[0]?.descripcion || `<span>Cargando...</span>`"></div>
    </div>
  </section>

  <div v-if="normas?.length >= 0">
    <items-list :items="normas" :defaultOpened="false" />
  </div>
</template>

<script lang="ts" setup>
const { disciplines: disciplinas, loading } = useDisciplines();
const normas = ref();
const carrusel = ref();
const requisitos = ref();
const descuentos = ref();
const graphql = useStrapiGraphQL();

try {
  const query = await graphql<any>(`
    query {
      carrusel(id: 2) {
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

      norma {
        data {
          attributes {
            normas {
              titulo
              descripcion
            }
          }
        }
      }

      requisito {
        data {
          attributes {
            requisitos {
              titulo
              descripcion
            }
          }
        }
      }

      descuento {
        data {
          attributes {
            descuentos {
              titulo
              descripcion
            }
          }
        }
      }
    }
  `);

  carrusel.value = query.data.carrusel.data.attributes.imagenes.data;
  normas.value = query.data.norma.data.attributes.normas;
  requisitos.value = query.data.requisito.data.attributes.requisitos;
  descuentos.value = query.data.descuento.data.attributes.descuentos;
} catch (err) {
  carrusel.value = [];
  normas.value = [];
  requisitos.value = [];
  descuentos.value = [];
  console.log(err);
}
</script>
