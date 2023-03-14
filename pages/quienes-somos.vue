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
    :image="profesionales.imagen.data.attributes.url"
    :alt="profesionales.imagen.data.attributes.alternativeText"
    url="/disciplinas/"
  />

  <div class="identidad">
    <identidad-card
      v-for="(item, index) in identidad"
      :imagen="item.imagen.data.attributes.url"
      :alternativeText="item.imagen.data.attributes.alternativeText"
      :title="item.titulo"
      :description="item.descripcion"
      :key="index"
    />
  </div>

  <div class="dots"></div>

  <div v-if="trabajo?.length >= 1">
    <items-list :items="trabajo" :defaultOpened="true" />
  </div>
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
const identidad = ref();
const profesionales = ref();
const trabajo = ref();

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
    }
  `);

  principal.value = query.data.empresa.data.attributes.principal;
  identidad.value = query.data.empresa.data.attributes.identidad;
  profesionales.value = query.data.empresa.data.attributes.profesionales;
  trabajo.value = query.data.empresa.data.attributes.trabajo;
} catch (err) {
  principal.value = [];
  identidad.value = [];
  profesionales.value = [];
  trabajo.value = [];
  console.log(err);
}
</script>
