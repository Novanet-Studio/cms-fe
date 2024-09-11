<script setup lang="ts">
import storeBannerImg from "@/assets/images/store-banner.webp"
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
        <!-- <UCarousel
          v-slot="{ item }"
          :items="items"
          :ui="{ item: 'basis-full' }"
          class="overflow-hidden rounded-t-md md:rounded-l-md md:rounded-tr-none min-h-[17.81rem] md:min-h-[18.31] lg:max-h-[33.75rem]"
        >
      </UCarousel> -->
      <img
        class="w-full object-cover rounded-t-md md:rounded-l-md md:rounded-tr-none min-h-[17.81rem] md:min-h-[18.31] lg:min-h-[33.75rem]"
        :src="storeBannerImg"
        alt="Una persona nadando"
        draggable="false"
      />
      </template>
    </CommonBanner>
  </section>
</template>
