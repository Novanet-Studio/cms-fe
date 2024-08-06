<script setup lang="ts">
const items = [
  "https://res.cloudinary.com/novanet-studio/image/upload/v1679080991/ccs-multisport/cms_tienda_maniquies_exhibicion_ab9a16ab35.webp",
];
</script>

<template>
  <section class="mb-40">
    <CommonBanner
      title="Próximamente"
      description="Tienda de artículos deportivos y natación para niños, niñas, damas y caballeros. CTA con vínculo a la página de contacto."
      :ui="{
        aside: {
          base: 'justify-center py-20 lg:px-8',
        },
      }"
    >
      <template #main>
        <UCarousel
          v-slot="{ item }"
          :items="items"
          :ui="{ item: 'basis-full' }"
          class="overflow-hidden rounded-t-md md:rounded-l-md md:rounded-tr-none min-h-[17.81rem] md:min-h-[18.31] lg:max-h-[33.75rem]"
        >
          <img
            class="w-full object-cover min-h-[17.81rem] md:min-h-[18.31] lg:min-h-[33.75rem]"
            :src="item"
            alt="image"
            draggable="false"
          />
        </UCarousel>
      </template>
    </CommonBanner>
  </section>
</template>
