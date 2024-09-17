<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
const gql = useStrapiGraphQL();

interface Props {
  onlyImages?: boolean;
}

withDefaults(defineProps<Props>(), {
  onlyImages: false,
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
      'grid-cols-2 place-items-center place-content-center md:grid-cols-4 lg:grid-cols-7 mx-auto lg:grid-rows-2 lg:gap-x-4':
        onlyImages,
      'lg:grid-cols-2': !onlyImages
    }"
  >
    <div
      class="flex gap-4"
      :class="{ 'flex-col md:flex-row md:gap-8': !onlyImages, 'lg:col-start-1': index === 0 && onlyImages, 'lg:col-start-3': index === 1 && onlyImages, 'lg:col-start-5': index === 2 && onlyImages, 'lg:col-start-7': index === 3 && onlyImages, 'lg:col-start-2': index === 4 && onlyImages, 'lg:col-start-4': index === 5 && onlyImages, 'lg:col-start-6': index === 6 && onlyImages }"
      v-for="(ally, index) in allies"
      :key="ally.id"
    >
      <div
        class="size-[9rem] min-w-[9rem] min-h-[9rem] rounded-xl p-3 border border-[#A7A9ACBF]"
      >
        <img
          :src="ally.attributes.imagen.data.attributes.url"
          :alt="ally.attributes.imagen.data.attributes.alternativeText"
        />
      </div>
      <div v-if="!onlyImages" class="mt-2">
        <h5 class="text-xl text-[#001E61] font-black">
          {{ ally.attributes.nombre }}
        </h5>
        <div
          v-if="ally.attributes?.descripcion"
          v-html="ally.attributes?.descripcion || ''"
          class="[&>a]:block [&>a]:font-semibold"
        ></div>
      </div>
    </div>
  </div>
</template>
