<template>
  <transition name="fade" appear>
    <div>
      <the-header />
      <main class="main">
        <section class="articulo">
          <app-button
            class="button--yellow button--small"
            prefix="fas"
            iconName="caret-left"
            iconSize="1x"
            url="/blog"
          >
            Volver al blog
          </app-button>
          <div class="articulo-grid">
            <slot />
            <the-aside />
          </div>
        </section>
      </main>
      <the-footer />
    </div>
  </transition>
</template>

<script lang="ts" setup>
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
