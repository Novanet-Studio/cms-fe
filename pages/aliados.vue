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
            src="https://res.cloudinary.com/novanet-studio/image/upload/v1670336594/ccs-multisport/cms_aliados_hombre_nadando_crawl_231313b588.webp"
            alt="Hombre nadando crawl"
            class="hero__image-fg"
          />
        </div>
      </div>
    </div>
  </section>

  <section class="aliados">
    <h2 class="aliados__title">Aliados</h2>
    <div class="aliados__wrapper">
      <logo-card
        v-for="(aliado, index) in aliados"
        :logo="aliado.attributes.imagen.data.attributes.url"
        :alternativeText="aliado.attributes.imagen.data.attributes.alternativeText"
        :title="aliado.attributes.nombre"
        :description="aliado.attributes.descripcion"
        aliadoClass="aliado--aliados"
        logoClass="aliado__logo--aliados"
        :key="index"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
const clog = (e: any) => {
  console.log(e);
};

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

      aliados(sort: "id:asc") {
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
