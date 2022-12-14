<template>
  <highlight
    title="Noticias de interés <br/>
    para la comunidad del CCS Multisport"
    description="Esta piscina alberga los sueños y las ilusiones de muchos y el escape de la rutina para otros.Aquí nadan los que entrenan duro, los que entrenan para competir, para relajarse y para llevar una una vida saludable"
    image="https://res.cloudinary.com/novanet-studio/image/upload/v1669823171/ccs-multisport/cms_piscina_en_atardecer_281eb141f9.webp"
  />

  <section class="blog">
    <h2 class="blog__title">Artículos</h2>
    <div class="blog__wrapper">
      <article
        class="blog-item"
        v-for="(post, index) in articulos"
        :key="index"
      >
        <div class="blog-item__img-container">
          <nuxt-picture
            :src="post.attributes.imagen.data.attributes.url"
            :alt="post.attributes.imagen.data.attributes.alternativeText"
            class="blog-item__imagen"
          />
        </div>
        <div class="blog-item__info">
          <h3 class="blog-item__title">
            {{ post.attributes.titulo }}
          </h3>
          <p>
            {{ post.attributes.descripcion.substring(0, 80).concat("...") }}
          </p>
          <app-button
            class="button--yellow button--small blog-item__boton"
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
