<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
const items = [
  {
    label: "Normas del centro deportivo",
    icon: "i-fa-solid-info-circle",
    content: "<ol><li>Regla 1</li> <li>Regla 2</li> <li>Regla 3</li></ol>",
    slot: "rules",
  },
];

const gql = useStrapiGraphQL();

const query = gql<any>(`
    query {
      empresa {
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

            trabajo {
              titulo
              descripcion
            }
          }
        }
      }

      requisito {
        data {
          attributes {
            requisitos {
              titulo
              descripcion
            }
          }
        }
      }

      norma {
        data {
          attributes {
            normas {
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
  queryKey: ["about-rules"],
  queryFn: () => query,
  select({ data }) {
    return data.norma.data.attributes.normas.map((identity) => ({
      label: identity.titulo,
      // icon: "i-fa-solid-info-circle",
      description: identity.descripcion,
      slot: "rules",
    }));
  },
  // 15 minutes
  staleTime: 1000 * 60 * 15,
});

await suspense();
</script>

<template>
  <section class="my-10 md:my-16">
    <h3
      class="font-black text-2xl lg:text-[40px] md:text-3xl text-center mt-20 md:mt-[7.75rem] mb-10"
    >
      También puede ver las normas en el siguiente desplegable
    </h3>
    <UAccordion
      class="rounded-xl"
      color="transparent"
      size="xl"
      :items="response"
      :ui="{
        container:
          'bg-gradient-to-r from-[#f3f3f4] to-[#E6E7E8] shadow-sm rounded-lg ring-1 ring-offset-8 ring-[#E6E7E8] border border-[#9E9E9E] [&_span]:font-black [&_span]:text-[#001E61]',
        item: {
          base: 'text-[#001E61] font-black',
          color: 'text-[#231F20]',
        },
      }"
    >
      <template #rules="{ item }">
        <div
          class="font-normal px-8 flex flex-col gap-2 text-[var(--color-tertiary)] [&>ol]:list-decimal [&>ol]:mt-6 [&>ol]:grid [&>ol]:grid-cols-1 md:[&>ol]:grid-cols-2 [&>ol]:gap-4 [&>ol]:list-inside"
          v-html="item.description"
        ></div>
      </template>
    </UAccordion>
  </section>
</template>
