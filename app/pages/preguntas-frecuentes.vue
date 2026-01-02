<script lang="ts" setup>
import { FAQ_QUERY } from "~/schemas/cms";

const graphql = useStrapiGraphQL();

const { data: preguntas } = await useAsyncData("faq-data", async () => {
  try {
    const response = await graphql<any>(FAQ_QUERY);
    return response.data.preguntas || [];
  } catch (err) {
    console.error(err);
    return [];
  }
});
</script>

<template>
  <div>
    <AppHighlight
      estilo="highlight"
      title="¿En qué podemos ayudarte?"
      description="Estás son las preguntas que responden a alguna de sus inquietudes. Contáctanos para mayor información"
      image="https://res.cloudinary.com/novanet-studio/image/upload/v1674752999/ccs-multisport/cms_triatleta_en_cada_disciplina_890ac7a154.webp"
      alt="Montaje de triatleta nadando, en bicicleta y nadando"
      url="/contacto"
      buttonText="Contáctanos"
    />

    <section class="faq-grid">
      <div>
        <h2 class="faq__title">Preguntas frecuentes</h2>
        <AppItemsList :items="preguntas" />
      </div>
      <AppAside />
    </section>
  </div>
</template>
