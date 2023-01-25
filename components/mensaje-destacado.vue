<template>
  <div :class="estilo">
    <h2 class="mensaje__title">
      {{ mensaje.titulo }}
    </h2>
    <p class="mensaje__description">
      {{ mensaje.descripcion }}
    </p>
    <app-button v-if="buttonText" class="button--blue">{{
      buttonText
    }}</app-button>
    <nuxt-picture v-if="image" :src="image" :alt="alt"></nuxt-picture>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  mensaje: any;
  estilo: string;
  buttonText?: string;
  image?: string;
  alt?: string;
};

defineProps<Props>();
</script>
