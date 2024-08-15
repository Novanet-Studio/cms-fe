<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
const gql = useStrapiGraphQL();

defineProps({
  onlyImages: {
    type: Boolean,
    default: false,
  },
});

const fetchProfessionals = gql<any>(`
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

const {
  data: professionals,
  suspense,
  isLoading,
} = useQuery({
  queryKey: ["home-professionals"],
  queryFn: () => fetchProfessionals,
  select({ data }) {
    return data.empresa.data.attributes.profesionales;
  },
  // 15 minutes
  staleTime: 1000 * 60 * 15,
});

await suspense();
</script>

<template>
  <section
    class="grid md:grid-cols-[21em_1fr] lg:grid-cols-[45%_1fr] md:place-items-center lg:my-24"
  >
    <div>
      <img
        src="~/assets/images/cms-profesores.webp"
        :alt="professionals.imagen.data.attributes.alternativeText"
      />
    </div>
    <div
      class="flex flex-col gap-6 mt-10 px-4 justify-center lg:pl-[5.8125rem] pr-0"
    >
      <h3 class="font-black text-2xl lg:text-[2.5rem]">
        {{ professionals.titulo }}
      </h3>
      <CommonDots class="[&>div]:w-3 [&>div]:h-3 w-max gap-1 -mt-4" />
      <p v-html="professionals.descripcion"></p>

      <UButton
        label="Ver profesores"
        size="lg"
        :ui="{
          base: 'self-start',
          rounded: 'rounded-full',
          variant: {
            solid: 'bg-[#f18a00] font-bold px-8 py-3 hover:bg-[#f18900c7]',
          },
        }"
        @click="() => $router.push('/profesionales')"
      />
    </div>
  </section>
</template>
