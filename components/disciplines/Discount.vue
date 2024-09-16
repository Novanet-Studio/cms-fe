<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
const gql = useStrapiGraphQL();

const fetchDiscount = gql<any>(`
  query {
    descuento {
      data {
        attributes {
          descuentos {
            titulo
            descripcion
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
  queryKey: ["disciplines-discount"],
  queryFn: () => fetchDiscount,
  select({ data }) {
    return data?.descuento?.data?.attributes?.descuentos[0];
  },
  // 15 minutes
  staleTime: 1000 * 60 * 15,
});

await suspense();
</script>

<template>
  <section class="mt-[7.75rem]">
    <h3
      class="font-black text-3xl text-balance text-[var(--color-secondary)] text-center lg:text-4xl"
    >
      {{ response?.titulo || "-" }}
    </h3>

    <div class="w-full rounded-xl p-6 pt-0 border border-[#A7A9ACBF] mt-6">
      <div v-html="response.descripcion || `<span>Cargando...</span>`"></div>
    </div>
  </section>
</template>
