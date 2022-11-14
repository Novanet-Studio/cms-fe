<template>
  <header class="shadow shadow-lg">
    <div class="container mx-auto flex justify-between py-8">
      <div class="header__logo">
        <nuxt-link to="/" target="_self">
          <nuxt-img alt="Caracas Sport logo" src="ccs-multisports-logo.svg" />
        </nuxt-link>
      </div>
      <div class="flex-1 flex justify-end items-center">
        <nav class="flex mr-8">
          <nuxt-link class="px-4" to="/">¿Quiénes somos?</nuxt-link>
          <nuxt-link class="px-4" to="/disciplinas">Disciplinas</nuxt-link>
          <nuxt-link class="px-4" to="/tienda">tienda</nuxt-link>
          <nuxt-link class="px-4" to="/aliados">Aliados</nuxt-link>
          <nuxt-link class="px-4" to="/blog">Blog</nuxt-link>
          <nuxt-link class="px-4" to="/preguntas-frecuentes">Preguntas frecuentes</nuxt-link>
          <nuxt-link class="px-4" to="/contacto">Contacto</nuxt-link>
        </nav>
        <app-button icon="/login.svg">
          Login
        </app-button>
      </div>
    </div>
  </header>
</template>
