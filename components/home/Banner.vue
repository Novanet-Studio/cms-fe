<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";

const items = [
  "https://picsum.photos/1920/1080?random=1",
  "https://picsum.photos/1920/1080?random=2",
  "https://picsum.photos/1920/1080?random=3",
  "https://picsum.photos/1920/1080?random=4",
  "https://picsum.photos/1920/1080?random=5",
  "https://picsum.photos/1920/1080?random=6",
];

const STALE_TIME = 1000 * 60 * 15;

const gql = useStrapiGraphQL();

const fetchMain = gql<any>(`
  query {
    inicio {
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

          mensaje {
            titulo
            descripcion
          }
        }
      }
    }

    carrusel(id: 1) {
      data {
        attributes {
          imagenes {
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
  queryKey: ["home-content"],
  queryFn: () => fetchMain,
  select({ data }) {
    return {
      main: data.inicio.data.attributes.principal,
      carousel: data.carrusel.data.attributes.imagenes.data,
    };
  },
  // 15 minutes
  staleTime: STALE_TIME,
});

await suspense();
</script>

<template>
  <USkeleton
    class="w-full bg-gray-300 md:h-[18.31] lg:h-[540px]"
    v-if="isLoading"
  />
  <CommonBanner
    v-else
    :title="response?.main?.titulo || '-'"
    :description="response?.main?.descripcion || '-'"
    content-position="left"
    :ui="{
      aside: {
        base: 'bg-[var(--color-tertiary)] justify-center lg:px-10',
        title: 'text-[44px]',
      },
    }"
    class="mb-12"
  >
    <template #main>
      <UCarousel
        v-slot="{ item }"
        :items="response?.carousel"
        :ui="{ item: 'basis-full' }"
        class="overflow-hidden rounded-b-md h-[17.81rem] md:rounded-bl-none md:min-h-[18.31] lg:min-h-[540px] md:rounded-r-md"
      >
        <img
          class="w-full object-cover min-h-[17.81rem] md:min-h-[18.31] lg:min-h-[540px]"
          :src="item?.attributes?.url"
          :alt="item?.attributes?.alternativeText"
          :draggable="false"
        />
      </UCarousel>
    </template>
  </CommonBanner>
</template>
