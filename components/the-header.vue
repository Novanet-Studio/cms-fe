<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <nuxt-link to="/" target="_self">
          <img
            alt="Caracas Sport logo"
            src="~/assets/images/ccs-multisports-logo.svg"
          />
        </nuxt-link>
        <div
          class="header__bars"
          @click="toggleMenu"
          :class="`header__bars ${isExpanded && 'header__bars--expanded'}`"
        >
          <font-awesome-icon :icon="['fas', 'bars']" size="2x" />
        </div>
      </div>
      <nav
        :class="`header__navigation ${
          isExpanded && 'header__navigation--expanded'
        }`"
        @click="toggleMenu"
      >
        <nuxt-link class="header__link" to="/">Inicio</nuxt-link>
        <nuxt-link class="header__link" to="/quienes-somos/"
          >¿Quiénes somos?</nuxt-link
        >
        <nuxt-link class="header__link" to="/disciplinas/"
          >Disciplinas</nuxt-link
        >
        <!-- <nuxt-link class="header__link" to="/">Tienda</nuxt-link> -->
        <nuxt-link class="header__link" to="/aliados/">Aliados</nuxt-link>
        <nuxt-link class="header__link" to="/blog/">Blog</nuxt-link>
        <nuxt-link class="header__link" to="/preguntas-frecuentes/"
          >Preguntas frecuentes</nuxt-link
        >
        <nuxt-link class="header__link" to="/contacto">Contacto</nuxt-link>
        <app-button
          class="button--blue button--small"
          prefix="fas"
          iconName="right-to-bracket"
          iconSize="1x"
        >
          Login
        </app-button>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
const isExpanded = ref(false);

const toggleMenu = () => {
  isExpanded.value = !isExpanded.value;
};
</script>
