<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import weAreProfessionals from "@/assets/images/cms-profesionales-grupo-de-profesores.webp"
const gql = useStrapiGraphQL();

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
  <div class="flex flex-col md:flex-row bg-[#D9D9D9]">
    <div class="basis-2/4 p-8 flex flex-col gap-4 md:p-4 md:gap-2 lg:gap-4 lg:p-8">
      <h2 class="font-black text-2xl lg:text-4xl lg:text-right text-[var(--color-secondary)]">
        {{ data.titulo }}
      </h2>
      <div class="text-sm md:text-xs lg:text-xl text-balance md:text-right text-black" v-html="data.descripcion"></div>
    </div>
    <div class="basis-2/4">
      <img
        :src="weAreProfessionals"
        class="w-full object-cover h-[17.81rem] md:min-h-[18.31] lg:min-h-[33.75rem]"
        draggable="false"
      />
    </div>
  </div>

    <div class="flex flex-col gap-4 mt-10">
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
