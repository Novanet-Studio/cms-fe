<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
const gql = useStrapiGraphQL();

// const {
//   data: {
//     disciplinas: { data: disciplines },
//   },
// } = await ;

const fetchDisciplines = gql<any>(`
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

const {
  data: response,
  suspense,
  isLoading,
} = useQuery({
  queryKey: ["home-disciplines"],
  queryFn: () => fetchDisciplines,
  select({ data }) {
    return data.disciplinas.data;
  },
  // 15 minutes
  staleTime: 1000 * 60 * 15,
});

await suspense();
</script>

<template>
  <div class="grid grid-cols-2 gap-y-6 place-items-center my-10 lg:grid-cols-4">
    <div
      v-for="discipline in response"
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
