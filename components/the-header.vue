<template>
  <header class="header">
    <div>
      <div class="header__logo">
        <nuxt-link to="/" target="_self">
          <nuxt-img alt="Caracas Sport logo" src="ccs-multisports-logo.svg" />
        </nuxt-link>
      </div>
      <nav class="header__navigation">
        <nuxt-link class="header__link" to="/">¿Quiénes somos?</nuxt-link>
        <nuxt-link class="header__link" to="/disciplinas"
          >Disciplinas</nuxt-link
        >
        <nuxt-link class="header__link" to="#">tienda</nuxt-link>
        <nuxt-link class="header__link" to="/aliados">Aliados</nuxt-link>
        <nuxt-link class="header__link" to="/blog">Blog</nuxt-link>
        <nuxt-link class="header__link" to="/preguntas-frecuentes"
          >Preguntas frecuentes</nuxt-link
        >
        <nuxt-link class="header__link" to="/contacto">Contacto</nuxt-link>
        <app-button class="blue-button" prefix="fas" iconName="right-to-bracket">
          Login
        </app-button>
      </nav>
    </div>
  </header>
</template>
