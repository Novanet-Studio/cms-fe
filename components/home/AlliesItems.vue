<script setup lang="ts">
const gql = useStrapiGraphQL();

const {
  data: {
    aliados: { data: allies },
  },
} = await gql<any>(`
  query {
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
</script>

<template>
  <div class="grid lg:grid-cols-2 gap-6">
    <div class="flex gap-4" v-for="ally in allies" :key="ally.id">
      <div
        class="size-[9rem] min-w-[9rem] min-h-[9rem] rounded-xl p-3 border border-[#A7A9ACBF]"
      >
        <NuxtPicture
          :src="ally.attributes.imagen.data.attributes.url"
          :alt="ally.attributes.imagen.data.attributes.alternativeText"
          placeholder
        />
      </div>
      <div class="mt-2">
        <h5 class="text-xl text-[#001E61] font-black">
          {{ ally.attributes.nombre }}
        </h5>
        <div
          v-if="ally.attributes?.descripcion"
          v-html="ally.attributes?.descripcion || ''"
          class="[&>a]:block"
        ></div>
      </div>
    </div>
  </div>
</template>
