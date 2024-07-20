<script setup lang="ts">
const items = [
  "https://picsum.photos/1920/1080?random=1",
  "https://picsum.photos/1920/1080?random=2",
  "https://picsum.photos/1920/1080?random=3",
  "https://picsum.photos/1920/1080?random=4",
  "https://picsum.photos/1920/1080?random=5",
  "https://picsum.photos/1920/1080?random=6",
];
</script>

<template>
  <section>
    <CommonBanner
      title="Próximamente"
      description="Tienda de artículos deportivos y natación para niños, niñas, damas y caballeros. CTA con vínculo a la página de contacto."
      :ui="{
        aside: {
          base: 'justify-center',
        },
      }"
    >
      <template #main>
        <UCarousel
          v-slot="{ item }"
          :items="items"
          :ui="{ item: 'basis-full' }"
          class="overflow-hidden rounded-l-md"
        >
          <NuxtImg
            class="w-full"
            :src="item"
            alt="image"
            :placeholder="[1196, 540, 75, 5]"
            draggable="false"
          />
        </UCarousel>
      </template>
    </CommonBanner>
  </section>
</template>
