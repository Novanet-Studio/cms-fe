<script setup lang="ts">
import MarkdownIt from "markdown-it";
import { useQuery } from "@tanstack/vue-query";
const gql = useStrapiGraphQL();

const markdown = new MarkdownIt();
const route = useRoute();
const id = computed(() => route.params.id);

const query = (id: string) =>
  gql<any>(
    `
    query getProfessional($id: String!) {
      profesionales(filters: { link: { eq: $id } }) {
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
  `,
    {
      id,
    }
  );

const {
  data: professor,
  suspense,
  isLoading,
} = useQuery({
  queryKey: ["professional-detail", id],
  queryFn: () => query(id.value),
  select({ data }) {
    console.log("data ->", data);
    const professional = data.profesionales.data[0].attributes;
    return {
      name: professional.nombre_apellido,
      shortDescription: professional.extracto,
      curriculum: markdown.render(professional.bio),
      image: professional.imagen.data.attributes.url,
      color: "#A7A9AC",
    };
  },
  // 15 minutes
  staleTime: 1000 * 60 * 15,
});

await suspense();
</script>

<template>
  <section>
    <div
      class="overflow-hidden rounded-md h-[17.81rem] md:min-h-[18.31] lg:min-h-[33.75rem]"
    >
      <img
        src="https://res.cloudinary.com/novanet-studio/image/upload/v1679078540/ccs-multisport/cms_natacion_mujer_nadando_crawl_73586e8d41.webp"
        class="w-full object-cover min-h-[17.81rem] md:min-h-[18.31] lg:min-h-[33.75rem]"
        draggable="false"
      />
    </div>

    <div class="my-8">
      <UButton
        label="Volver"
        :ui="{
          base: 'self-start',
          rounded: 'rounded-full',
          variant: {
            solid: 'bg-[#f18a00] font-bold px-8 py-4',
          },
        }"
        @click="() => $router.push('/profesionales')"
      />
    </div>

    <div class="flex flex-col gap-10 mb-10 md:flex-row ">
      <CommonRoundedCard
        :title="professor?.name || '-'"
        :description="professor?.shortDescription || '-'"
        :src="professor?.image"
        :style="{
          outlineColor: professor.color,
        }"
      />

      <div class="flex flex-col gap-4">
        <h3 class="text-2xl font-black text-[var(--color-secondary)]">
          Resumen Curricular
        </h3>
        <div class="[&_ul]:list-disc [&_ul]:list-inside" v-html="professor?.curriculum"></div>
      </div>
    </div>
  </section>
</template>
