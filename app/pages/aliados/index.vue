<script setup lang="ts">
import slugify from "slugify";

const { getAllies } = useAllies();

const { data } = await useAsyncData(() => getAllies());

function getAliaseData(aliado: any) {
  const hasPersonalOrServices =
    (aliado.personal && aliado.personal.length > 0) ||
    (aliado.servicios && aliado.servicios.length > 0);

  return {
    to: hasPersonalOrServices
      ? `/aliados/${slugify(aliado?.nombre ?? "", {
          lower: true,
        })}-${aliado?.documentId}`
      : "",
    link: hasPersonalOrServices ? "" : aliado.link,
    linkTarget: hasPersonalOrServices ? "" : "_blank",
  };
}
</script>

<template>
  <div>
    <AppHero
      titulo="Nuestros aliados amplian y complementan nuestra oferta de servicios"
      :descripcion="data?.principal?.descripcion"
      url="https://res.cloudinary.com/novanet-studio/image/upload/v1679055991/ccs-multisport/cms_caracas_multisport_la_florida_4c348f133f.webp"
      :alternativeText="data?.principal?.imagen?.alternativeText"
    />

    <section class="aliados">
      <div class="aliados__wrapper">
        <h2 class="aliados__title">Aliados</h2>
        <AppBasic
          v-for="(aliado, index) in data?.aliados"
          :logo="aliado.imagen?.url"
          :alternativeText="aliado.imagen?.alternativeText"
          :title="aliado.nombre"
          :description="aliado.descripcion"
          :to="getAliaseData(aliado).to"
          :link="getAliaseData(aliado).link"
          :linkTarget="getAliaseData(aliado).linkTarget"
          viewClass="basic--aliados"
          logoClass="basic__logo--aliados"
          :key="index"
        />
      </div>
    </section>
  </div>
</template>
