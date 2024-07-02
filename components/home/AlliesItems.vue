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
        attributes {
          link
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
</script>

<template>
  <div class="grid lg:grid-cols-7 gap-6">
    <div v-for="ally in allies" :key="ally.id">
      <div class="size-[9rem] rounded-xl p-3 border border-[#A7A9ACBF]">
        <NuxtPicture
          :src="ally.attributes.imagen.data.attributes.url"
          :alt="ally.attributes.imagen.data.attributes.alternativeText"
        />
      </div>
    </div>
  </div>
</template>
