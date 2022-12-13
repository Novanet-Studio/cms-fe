<template>
  <highlight
    title="Noticias de interés <br/>
    para la comunidad del CCS Multisport"
    description="Esta piscina alberga los sueños y las ilusiones de muchos y el escape de la rutina para otros.Aquí nadan los que entrenan duro, los que entrenan para competir, para relajarse y para llevar una una vida saludable"
    image="https://res.cloudinary.com/novanet-studio/image/upload/v1669823171/ccs-multisport/cms_piscina_en_atardecer_281eb141f9.webp"
  />

  <section class="articulos">
    <h2 class="articulos__title">Artículos</h2>
    <div class="articulos__wrapper">
      <article class="articulo" v-for="(post, index) in articulos" :key="index">
        <div class="articulo__img-container">
          <nuxt-img
            class="articulo__imagen"
            :src="post.attributes.imagen.data.attributes.url"
            :alt="post.attributes.imagen.data.attributes.alternativeText"
          />
        </div>
        <div class="articulo__info">
          <h3 class="articulo__title">
            {{ post.attributes.titulo }}
          </h3>
          <p>
            {{ post.attributes.descripcion.substring(0, 80).concat("...") }}
          </p>
          <app-button
            class="button--yellow button--small articulo__boton"
            @click="$router.push(`/blog/${post.attributes.slug}`)"
          >
            Leer más
          </app-button>
        </div>
      </article>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { articles: articulos } = useArticles();
</script>
