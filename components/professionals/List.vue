<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
const gql = useStrapiGraphQL();

const query = gql<any>(`
    query {
      profesionales(sort: "id:asc") {
        data {
          attributes {
            nombre_apellido
            extracto
            bio
            link
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
  `);

const {
  data: items,
  suspense,
  isLoading,
} = useQuery({
  queryKey: ["professors"],
  queryFn: () => query,
  select({ data }) {
    return data.profesionales.data.map((item) => ({
      title: item.attributes.nombre_apellido,
      src: item.attributes.imagen.data.attributes.url,
      link: item.attributes.link,
      color: "#A7A9AC",
    }));
    // return data.empresa.data.attributes.identidad.map((identity) => ({
    //   title: identity.titulo,
    //   description: identity.descripcion,
    //   src: identity.imagen.data.attributes.url,
    //   color: "#A7A9AC",
    // }));
  },
  // 15 minutes
  staleTime: 1000 * 60 * 15,
});

await suspense();
</script>

<template>
  <section class="my-20">
    <h3
      class="font-black text-[40px] text-center mt-[7.75rem] md:text-3xl mb-8 lg:mb-12"
    >
      Nuestros profesores
    </h3>
    <UCarousel
      v-slot="{ item: { title, src, link, color }, index }"
      arrows
      :items
      :prev-button="{
        class: '-left-2 lg:-left-12',
      }"
      :next-button="{
        class: '-right-2 lg:-right-12',
      }"
      :ui="{
        item: 'basis-full lg:basis-1/2',
        container: 'gap-1',
      }"
    >
      <div class="mx-auto py-10">
        <CommonRoundedCard
          :title
          :src
          :style="{
            outlineColor: color,
          }"
        >
          <template #content>
            <NuxtLink :to="`/profesionales/${link}`">
              <h4
                class="font-black text-2xl text-center mt-8 lg:mt-10 lg:text-3xl"
              >
                {{ title }}
              </h4>
            </NuxtLink>
          </template>
        </CommonRoundedCard>
      </div>
    </UCarousel>
  </section>
</template>

<style>
@keyframes offset {
  100% {
    outline-offset: 50px;
  }
}
</style>
