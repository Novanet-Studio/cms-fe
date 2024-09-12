<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import contactBannerImg from "@/assets/images/contact-banner.webp"

const gql = useStrapiGraphQL();

const query = gql<any>(`
    query {
      carrusel(id: 3) {
        data {
          attributes {
            imagenes {
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
  data: response,
  suspense,
  isLoading,
} = useQuery({
  queryKey: ["contact-carousel"],
  queryFn: () => query,
  select({ data }) {
    return data.carrusel.data.attributes.imagenes.data;
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
      :items="response"
      :ui="{ item: 'basis-full' }"
      class="overflow-hidden rounded-md min-h-[17.81rem] md:min-h-[18.31] lg:min-h-[33.75rem]"
      arrows
    >
  </UCarousel> -->
    <img
      :src="contactBannerImg"
      alt="Personas en la piscina de cms"
      class="w-full object-cover rounded-md min-h-[17.81rem] md:min-h-[18.31] lg:min-h-[33.75rem]"
      draggable="false"
    />

    <p class="my-8 lg:text-lg">
      Te invitamos a visitar y conocer nuestra sede en la Alta Florida, una
      piscina semi-olímpica, temperada, con un inmejorable equipo de trabajo
      liderado por nuestro Coach certificado en entrenamiento para Triatlón y
      con el mejor equipo de entrenadores capaces de brindar un ambiente cálido
      y estimulante para todos.
    </p>

    <div class="flex flex-col gap-2">
      <div>
        <h4
          class="text-base font-black text-[var(--color-secondary)] md:text-2xl"
        >
          Horario de atención
        </h4>
        <p>Oficina Administrativa para pagos y formalizar inscripción</p>
      </div>

      <table class="table-auto md:w-[30rem]">
        <thead class="text-left border-b border-neutral-200">
          <tr class="divide-x border-b-2">
            <th class="whitespace-nowrap px-4 py-2 text-xl">Día</th>
            <th class="whitespace-nowrap px-4 py-2 text-xl">Fecha</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-neutral-200 divide-x">
            <td class="whitespace-nowrap px-4 py-2">Lunes a viernes</td>
            <td class="whitespace-nowrap px-4 py-2">
              De 9:00am a 12:30pm <br />
              De 1:30pm a 07:30pm
            </td>
          </tr>
          <tr class="divide-x">
            <td class="whitespace-nowrap px-4 py-2">Sábados</td>
            <td class="whitespace-nowrap px-4 py-2">De 9:00am a 12:00pm</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div
      class="grid gap-8 md:grid-cols-[1fr_33%] lg:grid-cols-[1fr_25rem] lg:gap-8 mt-6"
    >
      <div
        class="ring-1 ring-offset-8 ring-[#E6E7E8] rounded-md my-8 self-start"
      >
        <form
          class="bg-gradient-to-r from-[#f3f3f4] to-[#E6E7E8] shadow-sm rounded-lg border border-[#9E9E9E] p-6"
        >
          <h3 class="font-black text-[#231f20] md:text-xl">
            Envíanos un mensaje
          </h3>
          <div class="flex flex-col gap-4 mt-4">
            <div class="flex flex-col gap-4">
              <UInput
                color="white"
                variant="outline"
                placeholder="Nombre y apellido *"
              />
              <UInput
                color="white"
                type="email"
                variant="outline"
                placeholder="Email *"
              />
            </div>
            <div>
              <UInput color="white" variant="outline" placeholder="Asunto *" />
            </div>
            <UTextarea autoresize placeholder="Mensaje" model-value="" />
            <UButton
              label="Enviar"
              icon="i-fa-solid-paper-plane"
              size="lg"
              :ui="{
                base: 'self-start',
                rounded: 'rounded-full',
                variant: {
                  solid: 'bg-[#001E61] font-bold px-6 hover:bg-[#001f61d8]',
                },
              }"
            />
          </div>
        </form>

        <aside>
          <!-- Here goes CompanyInfo component -->
        </aside>
      </div>
      <div>
        <CompanyInfo />
      </div>
    </div>
  </section>
</template>
