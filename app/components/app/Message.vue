<template>
  <div :class="estilo">
    <h2 class="mensaje__title">
      {{ mensaje.titulo }}
    </h2>
    <p class="mensaje__description">
      {{ mensaje.descripcion }}
    </p>
    <AppButton v-if="buttonText" class="button--blue">{{
      buttonText
    }}</AppButton>
    <NuxtPicture v-if="image" :src="image" :alt="alt"></NuxtPicture>
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
