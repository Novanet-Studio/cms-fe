<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
const gql = useStrapiGraphQL();

defineProps({
  onlyImages: {
    type: Boolean,
    default: false,
  },
});

const fetchAllies = gql<any>(`
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

const {
  data: allies,
  suspense,
  isLoading,
} = useQuery({
  queryKey: ["home-allies"],
  queryFn: () => fetchAllies,
  select({ data }) {
    return data.aliados.data;
  },
  // 15 minutes
  staleTime: 1000 * 60 * 15,
});

await suspense();
</script>

<template>
  <div
    class="grid gap-6"
    :class="{
      'grid-cols-2 place-items-center md:grid-cols-4 lg:grid-cols-6':
        onlyImages,
    }"
  >
    <div
      class="flex gap-4"
      :class="{ 'flex-col md:flex-row md:gap-8': !isOnlyImages }"
      v-for="ally in allies"
      :key="ally.id"
    >
      <div
        class="size-[9rem] min-w-[9rem] min-h-[9rem] rounded-xl p-3 border border-[#A7A9ACBF]"
      >
        <NuxtPicture
          :src="ally.attributes.imagen.data.attributes.url"
          :alt="ally.attributes.imagen.data.attributes.alternativeText"
          placeholder
        />
      </div>
      <div v-if="!onlyImages" class="mt-2">
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
