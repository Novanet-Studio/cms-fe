<script setup lang="ts">
const route = useRoute();
const { getAllyDetail } = useAllies();

const { data: aliado } = await useAsyncData(`aliado-${route.params.id}`, () => {
  const cleanId = route.params.id.toString().split("-").pop() || "";
  return getAllyDetail(cleanId);
});
</script>

<template>
  <section class="aliados mt-8" v-if="aliado">
    <div class="aliados__wrapper">
      <div
        class="grid gap-4 grid-cols-1 place-items-center md:grid-cols-[15rem_1fr]"
      >
        <div class="basic__logo w-56 mb-8 md:mb-0">
          <a v-if="aliado.link" :href="aliado.link" target="_blank">
            <NuxtPicture
              v-if="aliado.imagen?.url"
              :src="aliado.imagen.url"
              :alt="aliado.imagen.alternativeText"
            />
          </a>
        </div>
        <div>
          <h3 class="text-3xl font-extrabold relative mt-2"></h3>
          <p class="mt-3 md:text-xl">
            {{ aliado.descripcion_interna }}
          </p>
        </div>
      </div>

      <div class="mt-16" v-if="aliado.servicios">
        <h3 class="text-3xl font-extrabold relative mt-2">
          {{ aliado.servicios.titulo }}
        </h3>
        <p class="mt-4 md:text-xl">
          {{ aliado.servicios.descripcion }}
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div
            class="border p-2 rounded-xl border-secondary"
            v-for="(item, index) in aliado.servicios.servicio"
            :key="index"
          >
            <div
              class="flex gap-4 items-center bg-gradient-to-r from-[#FFFFFF] to-[#E6E7E8] p-8 rounded-xl shadow-md"
            >
              <div
                class="bg-primary min-w-12 min-h-12 rounded-full flex justify-center items-center"
              >
                <nuxt-img
                  v-if="item.icono?.url"
                  :src="item.icono.url"
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

      <div class="mt-20" v-if="aliado.personal">
        <h3 class="text-3xl font-extrabold relative mt-2">
          Personal de
          {{ aliado.nombre }}
        </h3>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-36 mt-36"
        >
          <div
            class="border p-2 rounded-xl border-mid-gray relative"
            v-for="(profesional, index) in aliado.personal.profesionales"
            :key="index"
          >
            <div
              class="flex justify-center items-center absolute -top-24 left-0 flex w-full justify-center"
            >
              <nuxt-img
                class="w-[157px] h-[157px] rounded-full"
                v-if="profesional.imagen?.url"
                :src="profesional.imagen.url"
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
          <NuxtPicture
            v-if="aliado.imagen_info?.url"
            class="articulo__image"
            :src="aliado.imagen_info.url"
            :alt="aliado.imagen_info.alternativeText"
            lazy
          />

          <aliados-info
            :link="aliado.link"
            :handle="aliado.handle"
            :telefonos="aliado.telefonos"
            :icono="aliado.icono_rrss"
          />
        </div>
      </section>
    </div>
  </section>
</template>
