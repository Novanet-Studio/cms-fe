<template>
  <div>
    <highlight
      estilo="highlight"
      :title="empresa.titulo"
      :description="empresa.descripcion"
      image="https://res.cloudinary.com/novanet-studio/image/upload/v1679081889/ccs-multisport/cms_quienes_somos_bfa5f868d7.webp"
      :alt="empresa.imagen.data.attributes.alternativeText"
    />

    <div class="dots"></div>

    <div class="disciplinas__button">
      <app-button
        class="button--blue"
        prefix="fas"
        iconName="caret-left"
        iconSize="1x"
        url="/quienes-somos"
      >
        Volver a la página anterior
      </app-button>
    </div>

    <section class="profesionales">
      <div class="profesionales__container">
        <h2 class="profesionales__title">Nuestros profesores</h2>
        <div class="cards__wrapper">
          <nuxt-link
            :to="`/profesionales/${profesor.attributes.link}`"
            v-for="(profesor, index) in profesores"
            :key="index"
            class="profesionales__item"
          >
            <card
              :logo="profesor.attributes.imagen.data.attributes.url"
              :alternativeText="
                profesor.attributes.imagen.data.attributes.alternativeText
              "
              :title="profesor.attributes.nombre_apellido"
              description=""
            />
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const { profesionals: profesores, loading } = useProfesionals();
const empresa = ref();
const graphql = useStrapiGraphQL();

try {
  const query = await graphql<any>(`
    query {
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
    }
  `);

  empresa.value = query.data.empresa.data.attributes.profesionales;
} catch (err) {
  empresa.value = [];
  console.log(err);
}
</script>
