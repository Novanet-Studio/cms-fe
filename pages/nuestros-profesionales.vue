<template>
  <highlight estilo="highlight" :title="profesionales.titulo" :description="profesionales.descripcion"
    :image="profesionales.imagen.data.attributes.url" :alt="profesionales.imagen.data.attributes.alternativeText"
    url="/quienes-somos" />
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

const profesionales = ref();
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

  profesionales.value = query.data.empresa.data.attributes.profesionales;
} catch (err) {
  profesionales.value = [];
  console.log(err);
}

</script>
  