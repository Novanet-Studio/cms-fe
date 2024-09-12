<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
const gql = useStrapiGraphQL();

const fetchCompany = gql<any>(`
    query {
      empresa {
        data {
          attributes {
            identidad {
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
  data: response,
  suspense,
  isLoading,
} = useQuery({
  queryKey: ["about-philosophy"],
  queryFn: () => fetchCompany,
  select({ data }) {
    return data.empresa.data.attributes.identidad.map((identity) => ({
      title: identity.titulo,
      description: identity.descripcion,
      src: identity.imagen.data.attributes.url,
      color: "#A7A9AC",
    }));
  },
  // 15 minutes
  staleTime: 1000 * 60 * 15,
});

await suspense();
</script>

<template>
  <section class="grid md:grid-cols-2 md:gap-x-10 lg:gap-10 lg:grid-cols-3">
    <CommonRoundedCard
      v-for="{ title, description, src, color } in response"
      class="lg:outline-offset-[0.1rem]"
      :title
      :description
      :src
      :style="{
        outlineColor: color,
      }"
    />
  </section>
</template>
