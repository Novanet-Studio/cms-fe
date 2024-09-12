<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import weAreProfessionals from "@/assets/images/we-are-professionals.webp"
const gql = useStrapiGraphQL();

// const items = [
//   "https://picsum.photos/1920/1080?random=1",
//   "https://picsum.photos/1920/1080?random=2",
//   "https://picsum.photos/1920/1080?random=3",
//   "https://picsum.photos/1920/1080?random=4",
//   "https://picsum.photos/1920/1080?random=5",
//   "https://picsum.photos/1920/1080?random=6",
// ];

const query = gql<any>(`
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

const { data, suspense, isLoading } = useQuery({
  queryKey: ["professionals"],
  queryFn: () => query,
  select({ data }) {
    return data.empresa.data.attributes.profesionales;
  },
  // 15 minutes
  staleTime: 1000 * 60 * 15,
});

await suspense();
</script>

<template>
  <section>
    <!-- <UCarousel
      v-slot="{ item }"
      :items="items"
      :ui="{ item: 'basis-full' }"
      class="overflow-hidden rounded-md h-[17.81rem] md:min-h-[18.31] lg:min-h-[33.75rem]"
      arrows
    >
  </UCarousel> -->
  <img
    :src="weAreProfessionals"
    class="rounded-md w-full object-cover h-[17.81rem] md:min-h-[18.31] lg:min-h-[33.75rem]"
    draggable="false"
  />

    <div class="flex flex-col gap-4 mt-10">
      <h2 class="font-black text-3xl text-[var(--color-secondary)]">
        {{ data.titulo }}
      </h2>
      <div v-html="data.descripcion"></div>
      <UButton
        label="Volver"
        size="lg"
        :ui="{
          base: 'self-start',
          rounded: 'rounded-full',
          variant: {
            solid: 'bg-[#f18a00] font-bold px-8 py-3 hover:bg-[#f18900c7]',
          },
        }"
        @click="$router.push('/')"
      />
    </div>

    <ProfessionalsList />
  </section>
</template>
