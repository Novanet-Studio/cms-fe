<script lang="ts" setup>
import MarkdownIt from "markdown-it";

const markdown = new MarkdownIt();
const route = useRoute();
const id = route.params.id as string;

const isOpen = ref(false);
const info = ref({});

const { discipline: disciplina } = useDisciplines({
  link: id,
});

const items = computed(() => {
  const $items = [];

  if (disciplina.value?.attributes?.horarios?.length) {
    $items.push({
      label: "Horarios",
      description: disciplina.value?.attributes?.horarios,
      slot: "rules",
    });
  }

  if (disciplina.value?.attributes?.planes?.length) {
    $items.push({
      label: "Planes",
      description: disciplina.value?.attributes?.planes,
      slot: "rules",
    });
  }

  if (disciplina.value?.attributes?.informacion_adicional?.titulo) {
    $items.push({
      label: disciplina.value?.attributes?.informacion_adicional?.titulo,
      description:
        disciplina.value?.attributes?.informacion_adicional?.descripcion,
      slot: "rules",
    });
  }

  if (disciplina.value?.attributes?.requisitos?.titulo) {
    $items.push({
      label: disciplina.value?.attributes?.requisitos?.titulo,
      description: disciplina.value?.attributes?.requisitos?.descripcion,
      slot: "rules",
    });
  }

  return $items;
});
</script>

<template>
  <div>
    <section class="w-full h-72 relative mb-8 px-0">
      <img
        class="w-full h-full object-cover"
        :src="disciplina?.attributes?.imagen.data.attributes.url"
        :alt="disciplina?.attributes?.imagen.data.attributes.alternativeText"
      />
      <div
        class="flex flex-col items-center justify-center absolute bottom-0 left-0 top-0 right-0 px-4 py-2 from-[#001E61] bg-gradient-to-t"
      >
        <div
          class="flex items-center justify-center w-16 h-16 bg-[var(--color-primary)] rounded-full mb-4"
        >
          <img :src="disciplina?.attributes?.icono.data.attributes.url" />
        </div>
      </div>
    </section>

    <div class="mb-8 mt-0">
      <UButton
        label="Volver"
        :ui="{
          base: 'self-start',
          rounded: 'rounded-full',
          variant: {
            solid: 'bg-[#f18a00] font-bold px-8 py-3 hover:bg-[#f18900c7]',
          },
        }"
        @click="() => $router.push('/disciplinas')"
      />
    </div>

    <section class="bg-[#E6E7E8] rounded-2xl grid md:grid-cols-[1fr_40%]">
      <div class="box p-6">
        <CommonTitle
          class="mb-4 !items-start [&_h3]:text-2xl gap-2 [&_div_div]:w-2 [&_div_div]:h-2"
        >
          {{ disciplina?.attributes?.nombre || "Cargando..." }}
        </CommonTitle>
        <div
          class="md:text-sm leading-snug"
          v-html="
            disciplina?.attributes?.descripcion || `<span>Cargando...</span>`
          "
        />
      </div>
      <div class="w-full lg:!rounded-tr-2xl">
        <img
          class="w-full h-full rounded-b-2xl max-h-[383px] object-cover lg:!rounded-tr-2xl"
          src="https://placehold.co/1290x2183"
        />
      </div>
    </section>

    <section
      v-if="!disciplina?.attributes.clases?.length"
      class="my-10 flex flex-col gap-4 md:my-14 md:gap-6"
    >
      <h3 class="text-2xl font-black text-balance">
        ¿Cómo trabajamos en esta disciplina?
      </h3>

      <div class="flex flex-col gap-10 md:flex-row">
        <div
          class="ring-1 ring-offset-8 ring-[#E6E7E8] rounded-2xl md:flex-1 md:self-start"
        >
          <UAccordion
            class="rounded-xl"
            color="transparent"
            size="xl"
            :items="items"
            :ui="{
              wrapper: 'gap-6',
              container:
                'bg-gradient-to-r from-[#f3f3f4] to-[#E6E7E8] shadow-sm rounded-lg border border-[#9E9E9E] md:shadow-md [&_span]:font-black [&_span]:text-[#001E61]',
              item: {
                base: 'text-[#231F20] p-6 box',
              },
            }"
          >
            <template #rules="{ item }">
              <div
                v-if="item.label === 'Horarios'"
                class="[&_ul]:list-disc [&_ul]:list-inside"
              >
              <!-- <pre>{{
                JSON.stringify(item.description, null, 2) }}</pre> -->
                <!-- <div v-for="({ horarios }, index) in item.description" :key="index"> -->
                  <div v-html="item.description[0].horarios"></div>
                <!-- </div> -->
              </div>
              <div
                v-if="item.label === 'Planes'"
                class="[&_ul]:list-disc [&_ul]:list-inside"
              >
                <div v-for="({ planes }, index) in item.description" :key="index">
                  <div v-html="planes"></div>
                </div>
              </div>
              <div
                v-else
                class="[&_ul]:list-disc [&_ul]:list-inside"
                v-html="item.description"
              />
            </template>
          </UAccordion>
        </div>
        <div class="w-full mb-12 md:flex-1">
          <img class="w-full" src="https://placehold.co/308x198" />
        </div>
      </div>
    </section>

    <section
      v-if="disciplina?.attributes.clases?.length"
      class="my-10 flex flex-col gap-4 md:my-14 md:gap-6"
    >
      <h3 class="text-2xl font-black text-balance">
        ¿Cuáles son las clases que manejamos?
      </h3>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="item in disciplina.attributes.clases"
          class="relative w-full"
          :key="items.titulo"
          @click="
            () => {
              info = item;
              isOpen = true;
            }
          "
        >
          <img
            class="w-full h-full max-h-[300px] object-cover"
            src="https://placehold.co/1308x2198"
          />

          <div
            class="flex flex-col items-center justify-end absolute bottom-0 left-0 top-0 right-0 px-4 py-2 from-[#001E61] bg-gradient-to-t"
          >
            <h5 class="text-white pb-4 text-center text-balance">
              {{ item.titulo }}
            </h5>
          </div>
        </div>
        <!-- <section class="w-full h-72 relative mb-16 px-0">
      <img
        class="w-full h-full object-cover"
        :src="disciplina?.attributes?.imagen.data.attributes.url"
        :alt="disciplina?.attributes?.imagen.data.attributes.alternativeText"
      />
      <div
        class="flex flex-col items-center justify-center absolute bottom-0 left-0 top-0 right-0 px-4 py-2 from-[#001E61] bg-gradient-to-t"
      >
        <div
          class="flex items-center justify-center w-16 h-16 bg-[var(--color-primary)] rounded-full mb-4"
        >
          <img :src="disciplina?.attributes?.icono.data.attributes.url" />
        </div>
      </div>
    </section> -->
      </div>
      <!-- <div class="flex flex-col gap-10 md:flex-row">
        <div class="w-full mb-12 md:flex-1">
          <img class="w-full" src="https://placehold.co/308x198" />
        </div>
      </div> -->
    </section>

    <UModal v-model="isOpen" :ui="{ width: 'md:max-w-3xl lg:max-w-6xl' }">
      <section class="p-4">
        <header class="flex items-center justify-end">
          <button
            class="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center lg:w-12 lg:h-12"
            @click="
              () => {
                isOpen = false;
                info = {};
              }
            "
          >
            <UIcon name="i-fa-solid-times" class="text-xl w-8 text-white" />
          </button>
        </header>
        <section
          class="bg-[#E6E7E8] rounded-2xl grid md:grid-cols-[1fr_40%] mt-4 md:min-w-[720px]"
        >
          <div class="box p-6">
            <CommonTitle
              class="mb-4 !items-start [&_h3]:text-2xl [&_h3]:text-left [&_h3]:text-balance"
            >
              {{ info.titulo || "Cargando..." }}
            </CommonTitle>
            <div
              class="md:text-sm"
              v-html="info?.descripcion || `<span>Cargando...</span>`"
            />
          </div>
          <div class="w-full lg:!rounded-tr-2xl">
            <img
              class="w-full h-full rounded-b-2xl max-h-[383px] object-cover lg:!rounded-tr-2xl"
              src="https://placehold.co/1290x2183"
            />
          </div>
        </section>
        <section class="my-10 flex flex-col gap-4 md:my-14 md:gap-6">
          <h3 class="text-2xl font-black text-balance">
            ¿Cómo trabajamos en esta clase?
          </h3>

          <div class="flex flex-col gap-10 md:flex-row">
            <div
              class="ring-1 ring-offset-8 ring-[#E6E7E8] rounded-2xl md:flex-1 md:self-start"
            >
              <UAccordion
                class="rounded-xl"
                color="transparent"
                size="xl"
                :items="[
                  {
                    label: 'Horarios',
                    description: info.horarios,
                    slot: 'rules',
                  },
                  {
                    label: 'Planes',
                    description: info.planes,
                    slot: 'rules',
                  },
                ]"
                :ui="{
                  wrapper: 'gap-6',
                  container:
                    'bg-gradient-to-r from-[#f3f3f4] to-[#E6E7E8] shadow-sm rounded-lg border border-[#9E9E9E] md:shadow-md [&_span]:font-black [&_span]:text-[#001E61]',
                  item: {
                    base: 'p-6 box',
                    color: '!text-[#231F20]',
                  },
                }"
              >
                <template #rules="{ item }">
                  <div
                    class="[&_ul]:list-disc [&_ul]:list-inside"
                    v-html="item.description"
                  />
                </template>
              </UAccordion>
            </div>
            <div class="w-full mb-12 md:flex-1">
              <img class="w-full" src="https://placehold.co/308x198" />
            </div>
          </div>
        </section>
      </section>
    </UModal>
  </div>
</template>

<style scoped>
/* DO NOT REMOVE. FIX BULLETS ISSUE FOR DISCIPLINES PAGE (Natacion) */
ul {
  @apply list-disc list-inside;
}

:global(.summary-content > ul) {
  @apply list-disc pl-5;
}

:global(.summary-content > ul > ul) {
  @apply list-disc pl-4;
}

:global(.summary-content > ul > li > p) {
  @apply inline-block;
}

:global(.summary-content > ul > li > p + ul) {
  @apply list-disc pl-4;
}

:global(.summary-content > h3 + ul ul ul) {
  @apply list-disc;
}

:global(.summary-content > h3 + ul ul) {
  @apply list-disc pl-4;
}

/* BOX */
:global(.box > div > h3 + div > ul p) {
  @apply inline-block;
}

:global(.box > div > h3 + div > ul) {
  @apply list-disc pl-4;
}

/* YOGA */
:global(.box p + ul) {
  @apply list-disc pl-4;
}

:global(.box > h2 + div > div > ul) {
  @apply list-disc pl-4;
}
</style>
