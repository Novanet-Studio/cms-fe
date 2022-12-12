<template>
  <highlight
    title="Noticias de interés <br/>
    para la comunidad del CCS Multisport"
    description="Esta piscina alberga los sueños y las ilusiones de muchos y el escape de la rutina para otros.Aquí nadan los que entrenan duro, los que entrenan para competir, para relajarse y para llevar una una vida saludable"
    image="https://res.cloudinary.com/novanet-studio/image/upload/v1669823171/ccs-multisport/cms_piscina_en_atardecer_281eb141f9.webp"
  />

  <section class="articulos">
    <article class="flex" v-for="(post, index) in articulos" :key="index">
      <picture
        class="border p-4 border-[rgba(167,169,172,0.75)] rounded-2xl min-w-60"
      >
        <nuxt-img
          class="w-60 h-40 object-cover object-center"
          :src="post.attributes.imagen.data.attributes.url"
          :alt="post.attributes.imagen.data.attributes.alternativeText"
        />
      </picture>
      <div class="flex flex-col ml-4">
        <h3 class="font-extrabold text-2xl text-secondary mt-2">
          {{ post.attributes.titulo }}
        </h3>
        <p class="mt-2">
          {{ post.attributes.descripcion.substring(0, 160).concat("...") }}
        </p>
        <app-button
          class="bg-primary mt-8 w-36"
          @click="$router.push(`/blog/${post.attributes.slug}`)"
          >Leer más</app-button
        >
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
const clog = (e: any) => {
  console.log(e);
};

const { articles: articulos } = useArticles();
</script>
