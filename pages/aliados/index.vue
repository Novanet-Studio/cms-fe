<template>
  <hero
     titulo="Nuestros aliados amplian y complementan nuestra oferta de servicios"
    :descripcion="principal.descripcion"
    url="https://res.cloudinary.com/novanet-studio/image/upload/v1679055991/ccs-multisport/cms_caracas_multisport_la_florida_4c348f133f.webp"
    :alternativeText="principal.imagen.data?.attributes?.alternativeText"
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
        :to="getAliaseData(aliado).to"
        :link="getAliaseData(aliado).link"
        :linkTarget="getAliaseData(aliado).linkTarget"
        viewClass="basic--aliados"
        logoClass="basic__logo--aliados"
        :key="index"
      />
    </div>
  </section>
</template>

<script setup>
import slugify from 'slugify';

const principal = ref();
const aliados = ref();
const graphql = useStrapiGraphQL();

function getAliaseData(aliado) {
  const hasPersonalOrServices = aliado.attributes?.personal || aliado.attributes?.servicios;

  return {
    to: hasPersonalOrServices ? `/aliados/${slugify(aliado?.attributes?.nombre ?? '', { lower: true })}-${aliado?.id}` : '',
    link: hasPersonalOrServices ? '' : aliado.attributes.link,
    linkTarget: hasPersonalOrServices ? '' : '_blank'
  }
}

try {
  const query = await graphql(`
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
          }
        }
      }

      aliados(sort: "nombre:asc") {
        data {
          id
          attributes {
            nombre
            descripcion
            link
            imagen {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            servicios {
              servicio {
                titulo
              }
            }
            personal {
              profesionales {
                titulo
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
