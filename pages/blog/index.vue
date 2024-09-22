<script setup lang="ts">
import articleBannerImg from '@/assets/images/article-banner.webp'

const { articles } = useArticlesData();

const excerpt = (string: string, indexEnd: number) =>
  string.replaceAll("**", "").substring(0, indexEnd).concat("...");
</script>

<template>
  <section>
    <!-- <UCarousel
      v-slot="{ item }"
      :items="articles"
      :ui="{ item: 'basis-full' }"
      class="overflow-hidden rounded-md h-[17.81rem] md:min-h-[18.31] lg:min-h-[33.75rem]"
      arrows
    >
  </UCarousel> -->
    <UButton class="mb-6" label="← Ir al inicio" size="lg" variant="outline" :ui="{
      base: 'self-start',
      rounded: 'rounded-full',
      variant: {
        outline: 'ring-1 font-semibold text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-gray-light)]',
      },
    }" @click="$router.push('/')" />
    <img :src="articleBannerImg" alt="Dos personas realizando ciclismo"
      class="w-full object-cover min-h-[17.81rem] md:min-h-[18.31] rounded-md" draggable="false" />

    <CommonTitle class="my-12 md:my-14 lg:my-16">Artículos</CommonTitle>

    <div class="grid gap-8 place-items-center place-content-center md:grid-cols-2 lg:my-20 lg:gap-20">
      <article class="flex flex-col gap-4 lg:flex-row md:self-start" v-for="post in articles"
        :key="post.attributes.slug">
        <div class="w-full h-max rounded-xl p-3 border border-[#A7A9ACBF] md:max-w-[19rem]">
          <img :src="post.attributes.imagen.data.attributes.url"
            :alt="post.attributes.imagen.data.attributes.alternativeText" />
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="font-black text-xl leading-tight text-[#001E61]">
            {{ post.attributes.titulo }}
          </h3>
          <div v-html="excerpt(post.attributes.descripcion, 90)"></div>
          <UButton label="Leer más" size="lg" :ui="{
            base: 'self-start',
            rounded: 'rounded-full',
            variant: {
              solid: 'bg-[#f18a00] font-bold px-10 md:px-8 md:py-3 hover:bg-[#f18900c7]',
              link: 'text-[#f18a00] underline',
            },
          }" @click="() => $router.push(`/blog/${post.attributes.slug}`)" />
        </div>
      </article>
    </div>
  </section>
</template>
