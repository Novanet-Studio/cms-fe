<script lang="ts" setup>
type Props = {
  link: string;
  handle: string;
  telefonos: array;
  icono: string;
};

defineProps<Props>();
</script>

<template>
  <aside class="aside">
    <div class="contacto__group">
      <h2 class="contacto__subtitle">Ubicación</h2>
      <p>
        Urb. Alta Florida Av. Los Mangos Quinta Caracas Multisport (al frente de
        la Plaza Benito Juárez subiendo a la Cota Mil).
        <a
          class="contacto__link"
          href="https://maps.app.goo.gl/X25KbsffHZEN5Y236"
          target="_blank"
        >
          Abrir en Google Maps
          <font-awesome-icon :icon="['fas', 'map']" />
        </a>
      </p>
    </div>

    <div class="contacto__group">
      <h2 class="contacto__subtitle">Teléfonos</h2>
      <div>
        <p v-for="(item, index) in telefonos" :key="index">{{ item.numero }}</p>
      </div>
    </div>

    <div class="contacto__group">
      <h2 class="contacto__subtitle">Redes sociales</h2>
      <div>
        <a class="contacto__link" :href="link" target="_blank">
          <font-awesome-icon :icon="['fab', `${icono}`]" v-if="icono" />
          {{ handle }}
        </a>
      </div>
    </div>
  </aside>
</template>
