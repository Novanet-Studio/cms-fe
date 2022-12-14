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

  <section class="box">
    <p v-html="parrafo || `<span>Cargando...</span>`"></p>
  </section>
  <div class="dots">
    <logo-dots />
  </div>

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

  <highlight
    title="Profesionales"
    description="Nuestros profesores cuentan en su mayoría con 5 o más años de experiencia,<br/> especialmente en la enseñanza de la práctica de la natación, con estudios de diplomados <br/>en Psicología Deportiva, Natación para niños con discapacidades,preparación física y además,<br/> algunos de ellos cuentan con experiencia en la práctica de la disciplina así como también<br/> en la natación competitiva; con esta experiencia a lo largo desus carreras han <br/>contribuido con la formaciónde muchos atletas de alta competencia.
"
    image="https://res.cloudinary.com/novanet-studio/image/upload/v1670606850/ccs-multisport/cms_mujer_nadando_crawl_ba37ab45e1.webp"
  />

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
const clog = (e: any) => {
  console.log(e);
};

const principal = ref();
const parrafo = ref();
const identidad = ref();
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

            parrafo

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
  parrafo.value = query.data.empresa.data.attributes.parrafo;
  identidad.value = query.data.empresa.data.attributes.identidad;
  trabajo.value = query.data.empresa.data.attributes.trabajo;
} catch (err) {
  principal.value = [];
  console.log(err);
}

</script>
