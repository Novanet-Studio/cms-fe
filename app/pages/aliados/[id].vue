<template>
  <section class="aliados mt-8">
    <div class="aliados__wrapper">
      <div
        class="grid gap-4 grid-cols-1 place-items-center md:grid-cols-[15rem_1fr]"
      >
        <div class="basic__logo w-56 mb-8 md:mb-0">
          <a
            v-if="aliado?.attributes?.link"
            :href="aliado?.attributes?.link"
            target="_blank"
          >
            <nuxt-picture
              :src="aliado?.attributes?.imagen?.data?.attributes?.url"
              :alt="
                aliado.attributes?.imagen?.data?.attributes?.alternativeText
              "
            />
          </a>
        </div>
        <div>
          <h3 class="text-3xl font-extrabold relative mt-2"></h3>
          <p class="mt-3 md:text-xl">
            {{ aliado.attributes?.descripcion_interna }}
          </p>
        </div>
      </div>
      <div class="mt-16">
        <h3 class="text-3xl font-extrabold relative mt-2">
          {{ aliado.attributes?.servicios?.titulo }}
        </h3>
        <p class="mt-4 md:text-xl">
          {{ aliado.attributes?.servicios?.descripcion }}
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div
            class="border p-2 rounded-xl border-secondary"
            v-for="(item, index) in aliado.attributes?.servicios?.servicio"
            :key="index"
          >
            <div
              class="flex gap-4 items-center bg-gradient-to-r from-[#FFFFFF] to-[#E6E7E8] p-8 rounded-xl shadow-md"
            >
              <div
                class="bg-primary min-w-12 min-h-12 rounded-full flex justify-center items-center"
              >
                <nuxt-img
                  v-if="item.icono?.data?.attributes?.url"
                  :src="item.icono?.data?.attributes?.url"
                  class="w-6"
                />
              </div>
              <p class="text-lg font-extrabold text-secondary">
                {{ item.titulo }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-20">
        <h3 class="text-3xl font-extrabold relative mt-2">
          Personal de
          {{ aliado.attributes?.nombre }}
        </h3>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-36 mt-36"
        >
          <div
            class="border p-2 rounded-xl border-mid-gray relative"
            v-for="(profesional, index) in aliado.attributes?.personal
              ?.profesionales"
            :key="index"
          >
            <div
              class="flex justify-center items-center absolute -top-24 left-0 flex w-full justify-center"
            >
              <nuxt-img
                class="w-[157px] h-[157px] rounded-full"
                v-if="profesional?.imagen?.data?.attributes?.url"
                :src="profesional?.imagen?.data?.attributes?.url"
              />
            </div>
            <div
              class="flex flex-col gap-4 items-center justify-center px-8 py-4 mt-12"
            >
              <h4 class="text-xl font-extrabold text-secondary text-center">
                {{ profesional.titulo }}
              </h4>
              <p class="text-center">{{ profesional.descripcion }}</p>
            </div>
          </div>
        </div>
      </div>

      <section class="articulo">
        <div class="articulo-grid">
          <nuxt-picture
            class="articulo__image"
            :src="aliado?.attributes?.imagen_info?.data?.attributes?.url"
            :alt="
              aliado.attributes?.imagen_info?.data?.attributes?.alternativeText
            "
            lazy
          />

          <aliados-info
            :link="aliado.attributes?.link"
            :handle="aliado.attributes?.handle"
            :telefonos="aliado.attributes?.telefonos"
            :icono="aliado.attributes?.icono_rrss"
          />
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
const aliado = ref({});
const route = useRoute();
const graphql = useStrapiGraphQL();

try {
  const query = await graphql(
    `
      query ($id: ID) {
        aliado(id: $id) {
          data {
            attributes {
              nombre
              descripcion_interna
              link
              handle
              icono_rrss
              imagen {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
              imagen_info {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
              telefonos {
                numero
              }
              servicios {
                titulo
                descripcion
                servicio {
                  titulo
                  icono {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
              personal {
                profesionales {
                  titulo
                  descripcion
                  imagen {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
    {
      id: route.params.id.replace(/[A-Za-z-]/g, ""),
    }
  );

  aliado.value = query.data.aliado.data;
} catch (error) {
  console.log("An error occurred while getting `aliado`");
}
</script>
