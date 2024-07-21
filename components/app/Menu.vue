<script lang="ts" setup>
const props = defineProps({
  count: {
    type: Number,
    default: 0,
  },
});

const emits = defineEmits<{
  close: [];
}>();

const menu = [
  {
    id: "home",
    label: "Inicio",
    link: "/",
  },
  {
    id: "about",
    label: "¿Quiénes somos?",
    link: "/quienes-somos",
  },
  {
    id: "disciplines",
    label: "Disciplinas",
    link: "/disciplinas",
  },
  {
    id: "allies",
    label: "Aliados",
    link: "/aliados",
  },
  {
    id: "blog",
    label: "Blog",
    link: "/blog",
  },
  {
    id: "store",
    label: "Tienda",
    link: "/tienda",
  },
  {
    id: "faq",
    label: "Preguntas frecuentes",
    link: "/preguntas-frecuentes",
  },
  {
    id: "contact",
    label: "Contacto",
    link: "/contacto",
  },
];
</script>

<template>
  <USlideover>
    <UCard
      class="flex flex-col flex-1"
      :ui="{
        body: { base: 'flex-1' },
        ring: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
      }"
    >
      <template #header>
        <div class="flex items-center justify-end">
          <button
            class="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center"
            @click="emits('close')"
          >
            <UIcon name="i-fa-solid-times" class="text-xl w-8 text-white" />
          </button>
        </div>
      </template>

      <div class="flex flex-col items-end pr-6">
        <NuxtLink
          v-for="item in menu"
          :key="item.id"
          :to="item.link"
          class="transition-all ease-in duration-75 pt-4 pb-2 pl-6 text-2xl font-light text-[var(--color-tertiary)]"
          @click="emits('close')"
        >
          {{ item.label }}
        </NuxtLink>
      </div>
    </UCard>
  </USlideover>
</template>
