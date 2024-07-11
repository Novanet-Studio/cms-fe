<script setup lang="ts">
const items = [
  "https://picsum.photos/1920/1080?random=1",
  "https://picsum.photos/1920/1080?random=2",
  "https://picsum.photos/1920/1080?random=3",
  "https://picsum.photos/1920/1080?random=4",
  "https://picsum.photos/1920/1080?random=5",
  "https://picsum.photos/1920/1080?random=6",
];

const { articles, loading } = useArticlesData();

const excerpt = (string: string, indexEnd: number) =>
  string.replaceAll("**", "").substring(0, indexEnd).concat("...");
</script>

<template>
  <section>
    <UCarousel
      v-slot="{ item }"
      :items="items"
      :ui="{ item: 'basis-full' }"
      class="overflow-hidden rounded-md max-h-[33.75rem]"
      arrows
    >
      <img :src="item" class="w-full" draggable="false" />
    </UCarousel>

    <CommonTitle>Artículos</CommonTitle>

    <div
      class="grid lg:grid-cols-2 lg:my-20 lg:gap-20 place-items-center place-content-center"
    >
      <article
        class="flex gap-4"
        v-for="post in articles"
        :key="post.attributes.slug"
      >
        <div
          class="max-w-[19rem] h-max rounded-xl p-3 border border-[#A7A9ACBF]"
        >
          <NuxtPicture
            :src="post.attributes.imagen.data.attributes.url"
            :alt="post.attributes.imagen.data.attributes.alternativeText"
          />
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="font-black text-xl leading-tight text-[#001E61]">
            {{ post.attributes.titulo }}
          </h3>
          <div v-html="excerpt(post.attributes.descripcion, 90)"></div>
          <UButton
            label="Leer más"
            size="lg"
            :ui="{
              base: 'self-start',
              rounded: 'rounded-full',
              variant: {
                solid: 'bg-[#f18a00] font-bold px-8 py-4',
                link: 'text-[#f18a00] underline',
              },
            }"
          />
        </div>
      </article>
    </div>
  </section>
</template>
