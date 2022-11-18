<template>
  <header class="header">
    <div>
      <div class="header__logo">
        <nuxt-link to="/" target="_self">
          <nuxt-img alt="Caracas Sport logo" src="ccs-multisports-logo.svg" />
        </nuxt-link>
      </div>
      <nav class="header__navigation">
        <nuxt-link class="px-4" to="/">¿Quiénes somos?</nuxt-link>
        <nuxt-link class="px-4" to="/disciplinas">Disciplinas</nuxt-link>
        <nuxt-link class="px-4" to="#">tienda</nuxt-link>
        <nuxt-link class="px-4" to="/aliados">Aliados</nuxt-link>
        <nuxt-link class="px-4" to="/blog">Blog</nuxt-link>
        <nuxt-link class="px-4" to="/preguntas-frecuentes"
          >Preguntas frecuentes</nuxt-link
        >
        <nuxt-link class="px-4" to="/contacto">Contacto</nuxt-link>
        <app-button icon="/login.svg"> Login </app-button>
      </nav>
    </div>
  </header>
</template>
