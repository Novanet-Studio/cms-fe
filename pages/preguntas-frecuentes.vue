<template>
  <div>
    <highlight
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
        <items-list :items="preguntas" />
      </div>
      <the-aside />
      <!-- <aside class="aside">
      <h2 class="tienda__title">Tienda</h2>
      <p>
        Tienda artículos deportivos y natación para niños, niñas, damas y caballeros, cambiar las fotos por alguna de ellos.
      </p>
      <basic
        v-for="(item, index) in storeItems"
        :key="index"
        :logo="item.image"
        :alternativeText="item.alternativeText"
        :title="item.text"
        viewClass="basic--aside"
      />
    </aside> -->
    </section>
  </div>
</template>

<script lang="ts" setup>
const preguntas = ref();
const graphql = useStrapiGraphQL();
try {
  const query = await graphql<any>(`
    query {
      preguntas(sort: "id:asc") {
        data {
          attributes {
            titulo
            descripcion
          }
        }
      }
    }
  `);
  preguntas.value = query.data.preguntas.data;
} catch (err) {
  preguntas.value = [];
  console.log(err);
}

const storeItems = [
  {
    image:
      "https://res.cloudinary.com/novanet-studio/image/upload/v1669823173/ccs-multisport/cms_tienda_caballeros_d004a62d61.webp",
    text: "Caballeros",
    alternativeText: "Hombre con gorro y lentes nadando en aguas abiertas",
  },
  {
    image:
      "https://res.cloudinary.com/novanet-studio/image/upload/v1669823172/ccs-multisport/cms_tienda_damas_8a5caff429.webp",
    text: "Damas",
    alternativeText: "Mujer con gorro y lentes nadando en piscimna",
  },
  {
    image:
      "https://res.cloudinary.com/novanet-studio/image/upload/v1669823173/ccs-multisport/cms_tienda_ninos_3af6013c20.webp",
    text: "Niños",
    alternativeText: "Niño posando al borde de piscina con lentes en la frente",
  },
];
</script>
