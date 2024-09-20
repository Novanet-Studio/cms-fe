<script setup lang="ts">
import cmsIndividualYoga from '~/assets/images/disciplines/cms-disciplinas-individuales-yoga.webp'
import cmsIndividualNatacion from '~/assets/images/disciplines/cms-disciplinas-individuales-natacion.webp'
import cmsIndividualKarate from '~/assets/images/disciplines/cms-disciplinas-individuales-karate.webp'
import cmsIndividualTriatlon from '~/assets/images/disciplines/cms-disciplinas-individuales-triatlon.webp'
</script>

<template>
  <section>
    <div class="grid grid-cols-2 md:grid-cols-4">
      <div class="w-full h-[17.81rem] md:min-h-[18.31] lg:min-h-[540px] object-cover object-center bg-cover bg-center" :style="{ backgroundImage: `url(${cmsIndividualNatacion})` }"></div>
      <div class="w-full h-[17.81rem] md:min-h-[18.31] lg:min-h-[540px] object-cover object-center bg-cover bg-center" :style="{ backgroundImage: `url(${cmsIndividualYoga})` }"></div>
      <div class="w-full h-[17.81rem] md:min-h-[18.31] lg:min-h-[540px] object-cover object-center bg-cover bg-center" :style="{ backgroundImage: `url(${cmsIndividualKarate})` }"></div>
      <div class="w-full h-[17.81rem] md:min-h-[18.31] lg:min-h-[540px] object-cover object-center bg-cover bg-center" :style="{ backgroundImage: `url(${cmsIndividualTriatlon})` }"></div>
    </div>
  </section>
</template>
