<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
const gql = useStrapiGraphQL();

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
  <div class="grid grid-cols-2 gap-y-6 place-items-center my-10 md:grid-cols-4">
    <div
      v-for="discipline in response"
      :key="discipline.attributes.nombre"
      class="flex flex-col items-center gap-6"
    >
      <div
        class="w-24 h-24 md:w-16 md:h-16 bg-[#f18a00] rounded-full flex justify-center items-center lg:w-24 lg:h-24"
      >
        <img
          class="w-12 md:w-10"
          :src="discipline.attributes.icono.data?.attributes?.url"
          :alt="
            discipline.attributes.icono.data?.attributes?.alternativeText ?? ''
          "
        />
      </div>
      <div class="text-[var(--color-tertiary)] gap-2 text-center">
        <h4 class="font-black text-3xl md:text-xl lg:text-3xl">
          {{ discipline.attributes.nombre }}
        </h4>
        <NuxtLink
          class="text-lg pb-2 border-b !border-b-transparent transition ease hover:border-b-[#f18a00] cursor-pointer md:text-sm lg:text-lg"
          :to="`/disciplinas/${discipline.attributes.link}`"
          active-class="s"
        >
          Ver información y planes
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
