<template>
  <hero
    :titulo="principal.titulo"
    :descripcion="principal.descripcion"
    url="https://res.cloudinary.com/novanet-studio/image/upload/v1670336594/ccs-multisport/cms_aliados_hombre_nadando_crawl_231313b588.webp"
    alternativeText="Hombre nadando crawl"
  />

  <section class="aliados">
    <div class="aliados__wrapper">
      <h2 class="aliados__title">Aliados</h2>
      <basic
        v-for="(aliado, index) in aliados"
        :logo="aliado.attributes.imagen.data.attributes.url"
        :alternativeText="
          aliado.attributes.imagen.data.attributes.alternativeText
        "
        :title="aliado.attributes.nombre"
        :description="aliado.attributes.descripcion"
        viewClass="basic--aliados"
        logoClass="basic__logo--aliados"
        :key="index"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
const principal = ref();
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
            }
          }
        }
      }

      aliados(sort: "nombre:asc") {
        data {
          attributes {
            nombre
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
  `);

  principal.value = query.data.inicio.data.attributes.principal;
  aliados.value = query.data.aliados.data;
} catch (err) {
  principal.value = [];
  aliados.value = [];
  console.log(err);
}
</script>
