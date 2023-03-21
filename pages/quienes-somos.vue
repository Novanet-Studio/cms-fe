<template>
  <hero
    :titulo="principal.titulo"
    :descripcion="principal.descripcion"
    :url="principal.imagen.data.attributes.url"
    :alternativeText="principal.imagen.data.attributes.alternativeText"
  />

  <highlight
    estilo="highlight"
    :title="profesionales.titulo"
    :description="profesionales.descripcion"
    image="https://res.cloudinary.com/novanet-studio/image/upload/v1679081889/ccs-multisport/cms_quienes_somos_bfa5f868d7.webp"
    alt="Nadadora con lentes puestos mirando hacia la derecha"
    url="/disciplinas/"
  />

  <section class="identidad">
    <identidad-card
      v-for="(item, index) in identidad"
      :imagen="item.imagen.data.attributes.url"
      :alternativeText="item.imagen.data.attributes.alternativeText"
      :title="item.titulo"
      :description="item.descripcion"
      :key="index"
    />
  </section>

  <div class="dots"></div>

  <div v-if="trabajo?.length >= 1">
    <items-list :items="trabajo" :defaultOpened="false" />
  </div>

  <div v-if="requisitos?.length >= 0">
    <items-list :items="requisitos" :defaultOpened="false" />
  </div>

  <div v-if="normas?.length >= 0">
    <items-list :items="normas" :defaultOpened="false" />
  </div>
</template>

<script lang="ts" setup>
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
const identidad = ref();
const profesionales = ref();
const trabajo = ref();
const requisitos = ref();
const normas = ref();

const graphql = useStrapiGraphQL();

try {
  const query = await graphql<any>(`
    query {
      empresa {
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

            identidad {
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

            trabajo {
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
    }
  `);

  principal.value = query.data.empresa.data.attributes.principal;
  identidad.value = query.data.empresa.data.attributes.identidad;
  profesionales.value = query.data.empresa.data.attributes.profesionales;
  trabajo.value = query.data.empresa.data.attributes.trabajo;
  requisitos.value = query.data.requisito.data.attributes.requisitos;
  normas.value = query.data.norma.data.attributes.normas;
} catch (err) {
  principal.value = [];
  identidad.value = [];
  profesionales.value = [];
  trabajo.value = [];
  requisitos.value = [];
  normas.value = [];
  console.log(err);
}
</script>
