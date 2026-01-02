<script setup>
import { register } from "swiper/element/bundle";
register();

useHead({
  script: [
    {
      innerHTML:
        'function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"83999b6f6bd9f7dd35ae6cbb6cfca431"})});',
    },
  ],
});
</script>

<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
