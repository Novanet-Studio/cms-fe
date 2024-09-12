<script setup lang="ts">
import faqBannerImg from "@/assets/images/faq-banner.webp"
import { useQuery } from "@tanstack/vue-query";

const gql = useStrapiGraphQL();

// const items = [
//   "https://res.cloudinary.com/novanet-studio/image/upload/v1674752999/ccs-multisport/cms_triatleta_en_cada_disciplina_890ac7a154.webp",
// ];

// const accordionItems = [
//   {
//     label: "Normas del centro deportivo",
//     icon: "i-fa-solid-info-circle",
//     content: "<ol><li>Regla 1</li> <li>Regla 2</li> <li>Regla 3</li></ol>",
//     slot: "rules",
//   },
//   {
//     label: "Normas del centro deportivo",
//     icon: "i-fa-solid-info-circle",
//     content: "<ol><li>Regla 1</li> <li>Regla 2</li> <li>Regla 3</li></ol>",
//     slot: "rules",
//   },
//   {
//     label: "Normas del centro deportivo",
//     icon: "i-fa-solid-info-circle",
//     content: "<ol><li>Regla 1</li> <li>Regla 2</li> <li>Regla 3</li></ol>",
//     slot: "rules",
//   },
// ];

const query = gql<any>(`
    query {
      preguntas(sort: "id:asc") {
        data {
          attributes {
            titulo
            descripcion
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
  queryKey: ["faq"],
  queryFn: () => query,
  select({ data }) {
    console.log("faq", data.preguntas.data);
    return data.preguntas.data.map((faq) => ({
      label: faq.attributes.titulo,
      content: faq.attributes.descripcion,
    }));
  },
  // 15 minutes
  staleTime: 1000 * 60 * 15,
});

await suspense();
</script>

<template>
  <section>
    <CommonBanner
      title="¿En qué podemos ayudarte?"
      description="Estás son las preguntas que responden a alguna de sus inquietudes. Contáctanos para mayor información"
      :ui="{
        aside: {
          base: '!bg-[#E6E7E8] justify-center lg:px-10',
          title: 'text-[var(--color-tertiary)]',
          description: 'text-[var(--color-tertiary)]',
        },
      }"
    >
      <template #main>
        <!-- <UCarousel
          v-slot="{ item }"
          :items="items"
          :ui="{ item: 'basis-full' }"
          class="overflow-hidden rounded-t-md md:rounded-l-md md:rounded-tr-none min-h-[17.81rem] md:min-h-[18.31] lg:max-h-[33.75rem]"
        >
      </UCarousel> -->
      <img
        :src="faqBannerImg"
        class="w-full object-cover min-h-[17.81rem] md:min-h-[18.31] lg:min-h-[33.75rem] rounded-t-md md:rounded-l-md md:rounded-tr-none"
        draggable="false"
      />
      </template>
    </CommonBanner>

    <div class="mt-12 w-full lg:mb-32">
      <h3 class="font-black text-3xl">Preguntas frecuentes</h3>

      <div
        class="grid gap-8 md:grid-cols-[1fr_33%] lg:grid-cols-[1fr_25rem] lg:gap-12 mt-6"
      >
        <div class="ring-1 ring-offset-8 ring-[#E6E7E8] rounded-md">
          <UAccordion
            class="rounded-xl"
            color="transparent"
            size="xl"
            :items="response"
            :ui="{
              wrapper: 'gap-6',
              container:
                'bg-gradient-to-r from-[#f3f3f4] to-[#E6E7E8] shadow-sm rounded-lg border border-[#9E9E9E] [&_span]:font-black [&_span]:text-[#001E61]',
              item: {
                base: 'p-6 font-normal',
                color: 'text-[#231F20]',
              },
            }"
          >
            <template #rules="{ item }">
              <div class="font-light text- p-4">
                {{ item.content }}
              </div>
            </template>
          </UAccordion>
        </div>
        <div>
          <CompanyInfo />
        </div>
      </div>
    </div>
  </section>
</template>
