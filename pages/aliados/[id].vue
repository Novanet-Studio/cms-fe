<template>
  <section class="aliados mt-8">
    <div class="aliados__wrapper">
      <div class="grid gap-4 grid-cols-1 place-items-center md:grid-cols-[15rem_1fr]">
        <div class="basic__logo w-56 mb-8 md:mb-0">
          <a v-if="aliado?.attributes?.link" :href="aliado?.attributes?.link" target="_blank">
            <nuxt-picture :src="aliado?.attributes?.imagen?.data?.attributes?.url" :alt="aliado.attributes?.imagen?.data?.attributes?.alternativeText" />
          </a>
        </div>
        <div>
          <h3 class="text-3xl font-extrabold relative mt-2"><logo-dots class="absolute left-0 -top-3" />{{ aliado.attributes?.nombre }}</h3>
          <p class="mt-3 md:text-xl">{{ aliado.attributes?.descripcion_interna }}</p>
        </div>
      </div>
      <div class="mt-16">
        <h3 class="text-3xl font-extrabold relative mt-2"><logo-dots class="absolute left-0 -top-3" />{{ aliado.attributes?.servicios?.titulo }}</h3>
        <p class="mt-4 md:text-xl">{{ aliado.attributes?.servicios?.descripcion }}</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div class="border p-2 rounded-xl border-secondary" v-for="(item, index) in aliado.attributes?.servicios?.servicio" :key="index">
            <div class="flex gap-4 items-center bg-gradient-to-r from-[#FFFFFF] to-[#E6E7E8] p-8 rounded-xl shadow-md">
              <div class="bg-primary min-w-12 min-h-12 rounded-full flex justify-center items-center">
                <nuxt-img v-if="item.icono?.data?.attributes?.url" :src="item.icono?.data?.attributes?.url" />
              </div>
              <p class="text-lg font-extrabold text-secondary">{{ item.titulo }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-20">
        <h3 class="text-3xl font-extrabold relative mt-2"><logo-dots class="absolute left-0 -top-3" />Personal de {{ aliado.attributes?.nombre }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-36 mt-36">
          <div class="border p-2 rounded-xl border-mid-gray relative" v-for="(profesional, index) in aliado.attributes?.personal?.profesionales" :key="index">
            <div class="flex justify-center items-center absolute -top-24 left-0 flex w-full justify-center">
              <nuxt-img class="w-[157px] h-[157px] rounded-full" v-if="profesional?.imagen?.data?.attributes?.url" :src="profesional?.imagen?.data?.attributes?.url" />
            </div>
            <div class="flex flex-col gap-4 items-center justify-center px-8 py-4 mt-12">
              <h4 class="text-xl font-extrabold text-secondary text-center">{{ profesional.titulo }}</h4>
              <p class="text-center">{{ profesional.descripcion }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="grid gap-8 mt-8 grid-cols-1 md:(grid-cols-2 mt-12) lg:(grid-cols-[70%_1fr] mt-24)">
        <div class="mt-8 md:mt-0">
          <nuxt-img class="w-full h-full md:h-[400px]" src="https://res.cloudinary.com/novanet-studio/image/upload/v1692046941/ccs-multisport/cms_aliados_physia_31b2222f66.webp" lazy />
        </div>
        <div class="flex flex-col gap-6">
          <div>
            <h5 class="text-2xl font-extrabold relative mt-2"><logo-dots class="absolute left-0 -top-3" />Ubicación</h5>
            <p class="mt-2">Estamos ubicados en la Av. Los Mangos de la Alta Florida (Multisport, Caracas)</p>
          </div>
          <div>
            <h5 class="text-2xl font-extrabold relative mt-2"><logo-dots class="absolute left-0 -top-3" />Teléfonos</h5>
            <p class="mt-2">(+58) 412-5727652</p>
            <p class="my-2">(+58) 212-7304673</p>
            <p>(+58) 212-7304356</p>
          </div>
          <div>
            <h5 class="text-2xl font-extrabold relative mt-2"><logo-dots class="absolute left-0 -top-3" />Instagram</h5>
            <a class="mt-2" :href="aliado?.attributes?.link" target="_blank">@physia.ve</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const aliado = ref({});
const route = useRoute();
const graphql = useStrapiGraphQL();
const media = useStrapiMedia()

try {
  const query = await graphql(`
    query($id: ID) {
      aliado(id: $id) {
        data {
          attributes {
            nombre
            descripcion_interna
            link
            imagen {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
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
  `, {
    id: route.params.id.replace(/[A-Za-z-]/g, ''),
  });

  aliado.value = query.data.aliado.data;
} catch (error) {
  console.log('An error occurred while getting `aliado`')
}
</script>