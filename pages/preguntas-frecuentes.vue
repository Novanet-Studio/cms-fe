<template>
  <highlight
    estilo="highlight"
    title="Preguntas frecuentes"
    description="La junta directiva de la federación venezolana de deportes acuáticos “FEVEDA”, se complace en invitar a todas las asociaciones afiliadas"
    image="https://res.cloudinary.com/novanet-studio/image/upload/v1669823165/ccs-multisport/cms_hombre_nadando_crawl_6e3eead054.webp"
    alt="Nombre nadando estilo crawl en competencia"
  />

  <div class="faq-grid">
    <section>
      <h2 class="faq__title">Preguntas frecuentes</h2>
      <items-list :items="preguntas" />
    </section>
    <aside class="aside">
      <h2 class="tienda__title">Tienda</h2>
      <p>
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur
      </p>
      <basic
        v-for="(item, index) in storeItems"
        :key="index"
        :logo="item.image"
        :alternativeText="item.alternativeText"
        :title="item.text"
        viewClass="basic--aside"
      />
    </aside>
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

const test = preguntas;

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
