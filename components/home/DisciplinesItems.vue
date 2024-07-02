<script setup lang="ts">
const gql = useStrapiGraphQL();

const {
  data: {
    disciplinas: { data: disciplines },
  },
} = await gql<any>(`
  query {
    disciplinas(sort: "id:asc") {
      data {
        attributes {
          nombre
          link
          icono {
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
  <div class="grid lg:grid-cols-4 lg:my-10">
    <div
      v-for="discipline in disciplines"
      :key="discipline.attributes.nombre"
      class="flex flex-col items-center gap-6"
    >
      <div
        class="w-24 h-24 bg-[#f18a00] rounded-full flex justify-center items-center"
      >
        <NuxtImg
          class="w-12"
          :src="discipline.attributes.icono.data?.attributes?.url"
          :alt="
            discipline.attributes.icono.data?.attributes?.alternativeText ?? ''
          "
        />
      </div>
      <div class="text-[var(--color-tertiary)] gap-2 text-center">
        <h4 class="font-black text-3xl">{{ discipline.attributes.nombre }}</h4>
        <p
          class="text-lg pb-2 border-b border-b-transparent transition ease hover:border-b-[#f18a00] cursor-pointer"
        >
          Ver información y planes
        </p>
      </div>
    </div>
  </div>
</template>
