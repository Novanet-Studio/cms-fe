<template>
  <div class="articulo__image">
    <skeletor width="100%" height="500" />
  </div>
  <h1 class="articulo__title">
    <skeletor class="mt-8" width="100%" height="40" />
  </h1>
  <div class="articulo__description">
    <skeletor class="mt-4" width="90%" height="20" v-for="i in 2" />
    <skeletor class="mt-4" width="80%" height="20" v-for="i in 2" />
    <skeletor class="mt-4" width="70%" height="20" v-for="i in 2" />
  </div>
</template>
